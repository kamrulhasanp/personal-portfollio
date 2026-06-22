// app/api/log_visit/route.js
import { NextResponse } from "next/server";

const SHEET_ID     = process.env.GOOGLE_SHEET_ID;
const CLIENT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY  = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
const SHEET_NAME   = "Vsitors"; // your tab name (note spelling)
const DATA_START   = 4;        // headers are row 3, data starts row 4

// ── Google Auth: create a JWT and exchange for access token ─────────────────
async function getAccessToken() {
  const now = Math.floor(Date.now() / 1000);
  const header  = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: CLIENT_EMAIL,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };

  const encode = (obj) =>
    Buffer.from(JSON.stringify(obj))
      .toString("base64")
      .replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");

  const unsignedJWT = `${encode(header)}.${encode(payload)}`;

  // Sign with RS256 using Web Crypto
  const keyData = PRIVATE_KEY
    .replace("-----BEGIN PRIVATE KEY-----", "")
    .replace("-----END PRIVATE KEY-----", "")
    .replace(/\s/g, "");

  const binaryKey = Uint8Array.from(atob(keyData), (c) => c.charCodeAt(0));
  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8", binaryKey.buffer,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false, ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    new TextEncoder().encode(unsignedJWT)
  );

  const sig = Buffer.from(signature)
    .toString("base64")
    .replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");

  const jwt = `${unsignedJWT}.${sig}`;

  // Exchange JWT for access token
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  const data = await res.json();
  return data.access_token;
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function parseDevice(ua = "") {
  if (/ipad/i.test(ua))             return "Tablet (iPad)";
  if (/android.*tablet/i.test(ua))  return "Tablet (Android)";
  if (/mobile|android|iphone|ipod/i.test(ua)) return "Mobile";
  return "Desktop";
}

function parseBrowser(ua = "") {
  if (/Edg\//i.test(ua))     return "Edge";
  if (/OPR\//i.test(ua))     return "Opera";
  if (/Chrome\//i.test(ua))  return "Chrome";
  if (/Firefox\//i.test(ua)) return "Firefox";
  if (/Safari\//i.test(ua))  return "Safari";
  return "Unknown";
}

function parseOS(ua = "") {
  if (/Windows NT 10/i.test(ua))       return "Windows 10/11";
  if (/Windows NT/i.test(ua))          return "Windows";
  if (/Mac OS X/i.test(ua))            return "macOS";
  if (/Android/i.test(ua))             return "Android";
  if (/iPhone|iPad|iPod/i.test(ua))    return "iOS";
  if (/Linux/i.test(ua))               return "Linux";
  return "Unknown";
}

// ── POST handler ─────────────────────────────────────────────────────────────
export async function POST(request) {
  try {
    const body = await request.json();
    const ua   = body.userAgent || "";

    // Get real IP
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = (forwarded ? forwarded.split(",")[0].trim() : null)
      || request.headers.get("x-real-ip")
      || "unknown";

    const isLocal = ["127.0.0.1", "::1", "unknown"].includes(ip);

    // Geo lookup
    let city = "—", region = "—", country = "—", isp = "—";
    if (!isLocal) {
      try {
        const geo = await fetch(
          `http://ip-api.com/json/${ip}?fields=status,country,regionName,city,isp`
        );
        const geoData = await geo.json();
        if (geoData.status === "success") {
          city    = geoData.city       || "—";
          region  = geoData.regionName || "—";
          country = geoData.country    || "—";
          isp     = geoData.isp        || "—";
        }
      } catch { /* geo failed — continue */ }
    }

    // Row to append — order must match your sheet columns:
    // Timestamp | ip | Device | Browser | OS | City | Region | Country | ips | Referrer | Page
    const row = [
      new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" }),
      isLocal ? "localhost" : ip,
      parseDevice(ua),
      parseBrowser(ua),
      parseOS(ua),
      city,
      region,
      country,
      isp,                          // your column is named "ips" — this is the ISP value
      body.referrer || "direct",
      body.page     || "/biodata",
    ];

    // Append to Google Sheet
    const token = await getAccessToken();
    const range = encodeURIComponent(`${SHEET_NAME}!A${DATA_START}`);
    await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ values: [row] }),
      }
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("log_visit error:", err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}