// app/api/log-visit/route.js
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "visits.json");

// Ensure the data directory and file exist
function ensureFile() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, "[]");
}

// Parse a rough device type from user-agent string
function parseDevice(ua = "") {
  if (/mobile|android|iphone|ipad|ipod/i.test(ua)) {
    if (/ipad/i.test(ua)) return "Tablet (iPad)";
    if (/android.*tablet/i.test(ua)) return "Tablet (Android)";
    return "Mobile";
  }
  return "Desktop";
}

// Parse browser name from user-agent
function parseBrowser(ua = "") {
  if (/Edg\//i.test(ua))    return "Edge";
  if (/OPR\//i.test(ua))    return "Opera";
  if (/Chrome\//i.test(ua)) return "Chrome";
  if (/Firefox\//i.test(ua))return "Firefox";
  if (/Safari\//i.test(ua)) return "Safari";
  return "Unknown";
}

// Parse OS from user-agent
function parseOS(ua = "") {
  if (/Windows NT 10/i.test(ua)) return "Windows 10/11";
  if (/Windows NT/i.test(ua))    return "Windows";
  if (/Mac OS X/i.test(ua))      return "macOS";
  if (/Android/i.test(ua))       return "Android";
  if (/iPhone|iPad|iPod/i.test(ua)) return "iOS";
  if (/Linux/i.test(ua))         return "Linux";
  return "Unknown";
}

export async function POST(request) {
  try {
    const body = await request.json();
    const ua   = body.userAgent || "";

    // Get IP — check headers set by proxies/Vercel/Netlify first
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = (forwarded ? forwarded.split(",")[0] : null)
      || request.headers.get("x-real-ip")
      || "unknown";

    // Skip logging if it's localhost (your own dev visits)
    const isLocal = ip === "127.0.0.1" || ip === "::1" || ip === "unknown";

    let location = { country: "—", region: "—", city: "—", isp: "—" };

    if (!isLocal) {
      try {
        const geo = await fetch(
          `http://ip-api.com/json/${ip}?fields=status,country,regionName,city,isp`,
          { next: { revalidate: 0 } }
        );
        const geoData = await geo.json();
        if (geoData.status === "success") {
          location = {
            country: geoData.country  || "—",
            region:  geoData.regionName || "—",
            city:    geoData.city     || "—",
            isp:     geoData.isp      || "—",
          };
        }
      } catch {
        // geo lookup failed — store what we have
      }
    }

    const visit = {
      id:        Date.now(),
      timestamp: new Date().toISOString(),
      ip:        isLocal ? "localhost" : ip,
      device:    parseDevice(ua),
      browser:   parseBrowser(ua),
      os:        parseOS(ua),
      ...location,
      referrer:  body.referrer || "direct",
      page:      body.page     || "/biodata",
    };

    ensureFile();
    const existing = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
    existing.unshift(visit); // newest first
    // Keep max 500 records
    fs.writeFileSync(DATA_FILE, JSON.stringify(existing.slice(0, 500), null, 2));

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("log-visit error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}