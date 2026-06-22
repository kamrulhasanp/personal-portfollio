// app/api/get-visits/route.js
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "visits.json");

export async function GET(request) {
  // Simple password check via query param: /api/get-visits?key=YOUR_SECRET
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");

  if (key !== process.env.VISITS_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    if (!fs.existsSync(DATA_FILE)) {
      return NextResponse.json([]);
    }
    const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Failed to read data" }, { status: 500 });
  }
}