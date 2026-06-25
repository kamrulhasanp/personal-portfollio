import { NextResponse } from "next/server";

export const runtime = "nodejs";

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const CLIENT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

const SHEET_NAME = "Visitors"; // make sure this matches your sheet tab exactly
const DATA_START = 4;

function requireEnv() {
  if (!SHEET_ID) throw new Error("Missing GOOGLE_SHEET_ID");
  if (!CLIENT_EMAIL) throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_EMAIL");
  if (!PRIVATE_KEY) throw new Error("Missing GOOGLE_PRIVATE_KEY");
}

async function getAccessToken() {
  requireEnv();

  const now = Math.floor(Date.now() / 1000);

  const header = {
    alg: "RS256",
    typ: "JWT",
  };

  const payload = {
    iss: CLIENT_EMAIL,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };

  const base64url = (obj) =>
    Buffer.from(JSON.stringify(obj))
      .toString("base64")
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");

  const unsignedJWT = `${base64url(header)}.${base64url(payload)}`;

  const crypto = await import("crypto");

  const signer = crypto.createSign("RSA-SHA256");
  signer.update(unsignedJWT);
  signer.end();

  const signature = signer.sign(PRIVATE_KEY, "base64url");
  const jwt = `${unsignedJWT}.${signature}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  const data = await res.json();

  // if (!res.ok) {
  //   console.error("Google token error:", data);
  //   throw new Error(data.error_description || data.error || "Failed to get Google access token");
  // }

  return data.access_token;
}

function parseDevice(ua = "") {
  if (/ipad/i.test(ua)) return "Tablet (iPad)";
  if (/android.*tablet/i.test(ua)) return "Tablet (Android)";
  if (/mobile|android|iphone|ipod/i.test(ua)) return "Mobile";
  return "Desktop";
}

function parseBrowser(ua = "") {
  if (/Edg\//i.test(ua)) return "Edge";
  if (/OPR\//i.test(ua)) return "Opera";
  if (/Chrome\//i.test(ua)) return "Chrome";
  if (/Firefox\//i.test(ua)) return "Firefox";
  if (/Safari\//i.test(ua)) return "Safari";
  return "Unknown";
}

function parseOS(ua = "") {
  if (/Windows NT 10/i.test(ua)) return "Windows 10/11";
  if (/Windows NT/i.test(ua)) return "Windows";
  if (/Mac OS X/i.test(ua)) return "macOS";
  if (/Android/i.test(ua)) return "Android";
  if (/iPhone|iPad|iPod/i.test(ua)) return "iOS";
  if (/Linux/i.test(ua)) return "Linux";
  return "Unknown";
}

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const ua = body.userAgent || request.headers.get("user-agent") || "";

    const forwarded = request.headers.get("x-forwarded-for");
    const ip =
      forwarded?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const isLocal = ["127.0.0.1", "::1", "unknown"].includes(ip);

    let city = "—";
    let region = "—";
    let country = "—";
    let isp = "—";

    if (!isLocal) {
      try {
        const geoRes = await fetch(
          `http://ip-api.com/json/${ip}?fields=status,country,regionName,city,isp`
        );

        const geoData = await geoRes.json();

        if (geoData.status === "success") {
          city = geoData.city || "—";
          region = geoData.regionName || "—";
          country = geoData.country || "—";
          isp = geoData.isp || "—";
        }
      } catch (geoErr) {
        
      }
    }

    const row = [
      new Date().toLocaleString("en-US", {
        timeZone: "America/Los_Angeles",
      }),
      isLocal ? "localhost" : ip,
      parseDevice(ua),
      parseBrowser(ua),
      parseOS(ua),
      city,
      region,
      country,
      isp,
      body.referrer || "direct",
      body.page || "-",
      body.firstVisit || "No",
    ];

    const token = await getAccessToken();

    const range = encodeURIComponent(`${SHEET_NAME}!A${DATA_START}`);

    const sheetRes = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          values: [row],
        }),
      }
    );

    const sheetData = await sheetRes.json();

    // if (!sheetRes.ok) {
    //   console.error("Google Sheets append failed:", sheetData);
    //   throw new Error(sheetData.error?.message || "Google Sheets append failed");
    // }

    return NextResponse.json({
      ok: true,
      row,
      sheetResponse: sheetData,
    });
  } catch (err) {
    // console.error("log_visit error:", err);

    return NextResponse.json(
      {
        ok: false,
        error: err.message,
      },
      { status: 500 }
    );
  }
}