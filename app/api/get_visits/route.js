// app/api/get_visits/route.js
import { NextResponse } from "next/server";

const SHEET_ID     = process.env.GOOGLE_SHEET_ID;
const CLIENT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY  = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
const SHEET_NAME   = "Vsitors";

// ── Google Auth (same JWT approach) ─────────────────────────────────────────
async function getAccessToken() {
  const now = Math.floor(Date.now() / 1000);
  const header  = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: CLIENT_EMAIL,
    scope: "https://www.googleapis.com/auth/spreadsheets.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };

  const encode = (obj) =>
    Buffer.from(JSON.stringify(obj))
      .toString("base64")
      .replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");

  const unsignedJWT = `${encode(header)}.${encode(payload)}`;

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

// ── GET handler ───────────────────────────────────────────────────────────────
export async function GET(request) {
  // Password check
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");
  if (key !== process.env.VISITS_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const token = await getAccessToken();

    // Read all data rows (row 4 onwards — row 3 is headers)
    const range = encodeURIComponent(`${SHEET_NAME}!A4:K`);
    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const data = await res.json();
    const rows = data.values || [];

    // Map each row array to a named object matching the dashboard's expected shape
    const visits = rows
      .filter((r) => r.length > 0 && r[0]) // skip empty rows
      .map((r, i) => ({
        id:        i + 1,
        timestamp: r[0]  || "—",
        ip:        r[1]  || "—",
        device:    r[2]  || "—",
        browser:   r[3]  || "—",
        os:        r[4]  || "—",
        city:      r[5]  || "—",
        region:    r[6]  || "—",
        country:   r[7]  || "—",
        isp:       r[8]  || "—",
        referrer:  r[9]  || "—",
        page:      r[10] || "—",
      }))
      .reverse(); // newest first

    return NextResponse.json(visits);
  } catch (err) {
    console.error("get_visits error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}