"use client";
// app/biodata/visits/page.js

import { useState, useEffect } from "react";

const LABELS = {
  timestamp: "Time",
  ip:        "IP Address",
  device:    "Device",
  browser:   "Browser",
  os:        "OS",
  city:      "City",
  region:    "Region",
  country:   "Country",
  isp:       "ISP",
  referrer:  "Referrer",
};

function Badge({ value }) {
  const map = {
    Mobile:  "bg-blue-100 text-blue-800",
    Desktop: "bg-emerald-100 text-emerald-800",
    Tablet:  "bg-purple-100 text-purple-800",
    Chrome:  "bg-yellow-100 text-yellow-800",
    Firefox: "bg-orange-100 text-orange-800",
    Safari:  "bg-sky-100 text-sky-800",
    Edge:    "bg-indigo-100 text-indigo-800",
  };
  const key = Object.keys(map).find((k) => value?.includes(k));
  const cls = map[key] || "bg-stone-100 text-stone-700";
  return (
    <span className={`inline-block text-[11px] font-medium px-2 py-0.5 rounded-full ${cls}`}>
      {value || "—"}
    </span>
  );
}

function StatCard({ label, value, sub }) {
  return (
    <div className="bg-white border border-stone-200 rounded p-4">
      <p className="text-xs text-stone-500 uppercase tracking-wide">{label}</p>
      <p className="text-2xl font-bold text-emerald-900 mt-1">{value}</p>
      {sub && <p className="text-xs text-stone-400 mt-0.5">{sub}</p>}
    </div>
  );
}

export default function VisitsDashboard() {
  const [key,     setKey]     = useState("");
  const [authed,  setAuthed]  = useState(false);
  const [visits,  setVisits]  = useState([]);
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState("");
  const [filter,  setFilter]  = useState("");
  const [sort,    setSort]    = useState("newest");

  async function fetchVisits(secret) {
    setLoading(true);
    setError("");
    try {
      const res  = await fetch(`/api/get_visits?key=${encodeURIComponent(secret)}`);
      if (res.status === 401) { setError("Wrong password."); return; }
      const data = await res.json();
      setVisits(data);
      setAuthed(true);
    } catch {
      setError("Failed to load visits.");
    } finally {
      setLoading(false);
    }
  }

  // ── Derived stats ────────────────────────────────────────────────────────
  const unique   = new Set(visits.map((v) => v.ip)).size;
  const devices  = visits.reduce((acc, v) => { acc[v.device] = (acc[v.device]||0)+1; return acc; }, {});
  const topDevice= Object.entries(devices).sort((a,b)=>b[1]-a[1])[0];
  const countries= [...new Set(visits.map((v) => v.country))].filter(Boolean).length;

  // ── Filter + sort ────────────────────────────────────────────────────────
  const displayed = visits
    .filter((v) => {
      if (!filter) return true;
      const q = filter.toLowerCase();
      return (
        v.country?.toLowerCase().includes(q) ||
        v.city?.toLowerCase().includes(q)    ||
        v.device?.toLowerCase().includes(q)  ||
        v.browser?.toLowerCase().includes(q) ||
        v.ip?.toLowerCase().includes(q)
      );
    })
    .sort((a, b) =>
      sort === "newest"
        ? new Date(b.timestamp) - new Date(a.timestamp)
        : new Date(a.timestamp) - new Date(b.timestamp)
    );

  // ── Login screen ─────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen bg-stone-100 flex items-center justify-center px-4">
        <div className="bg-white border border-stone-200 rounded shadow-sm p-8 w-full max-w-sm">
          <h1 className="font-serif text-xl text-emerald-900 mb-1">Visits Dashboard</h1>
          <p className="text-sm text-stone-500 mb-6">Enter your secret key to view visitor records.</p>

          <input
            type="password"
            placeholder="Secret key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchVisits(key)}
            className="w-full border border-stone-300 rounded px-3 py-2 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-emerald-700"
          />
          {error && <p className="text-red-600 text-xs mb-3">{error}</p>}
          <button
            onClick={() => fetchVisits(key)}
            disabled={loading}
            className="w-full bg-emerald-900 hover:bg-emerald-800 text-white text-sm font-medium py-2 rounded transition-colors disabled:opacity-50"
          >
            {loading ? "Loading…" : "View Visits"}
          </button>
        </div>
      </div>
    );
  }

  // ── Dashboard ─────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-stone-100 py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-serif text-2xl text-emerald-900">Visitor Records</h1>
            <p className="text-sm text-stone-500 mt-0.5">
              kamrulhasanp.com/biodata
            </p>
          </div>
          <button
            onClick={() => fetchVisits(key)}
            className="text-sm border border-stone-300 rounded px-4 py-2 hover:bg-stone-50 transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh
          </button>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <StatCard label="Total Visits"    value={visits.length} />
          <StatCard label="Unique IPs"      value={unique} />
          <StatCard label="Countries"       value={countries} />
          <StatCard label="Top Device"      value={topDevice?.[0] || "—"} sub={topDevice ? `${topDevice[1]} visits` : ""} />
        </div>

        {/* Filter + sort */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="search"
            placeholder="Filter by country, city, device, browser, IP…"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="flex-1 border border-stone-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-stone-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700"
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>

        {/* Table */}
        <div className="bg-white border border-stone-200 rounded overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-emerald-900 text-white text-left">
                <th className="px-4 py-3 font-medium whitespace-nowrap">#</th>
                {Object.values(LABELS).map((lbl) => (
                  <th key={lbl} className="px-4 py-3 font-medium whitespace-nowrap">{lbl}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayed.length === 0 ? (
                <tr>
                  <td colSpan={Object.keys(LABELS).length + 1} className="px-4 py-8 text-center text-stone-400">
                    No visits found.
                  </td>
                </tr>
              ) : (
                displayed.map((v, i) => (
                  <tr key={v.id} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                    <td className="px-4 py-3 text-stone-400 text-xs">{i + 1}</td>
                    <td className="px-4 py-3 text-stone-500 text-xs whitespace-nowrap">
                      {new Date(v.timestamp).toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-stone-600 text-xs font-mono">{v.ip}</td>
                    <td className="px-4 py-3"><Badge value={v.device} /></td>
                    <td className="px-4 py-3"><Badge value={v.browser} /></td>
                    <td className="px-4 py-3"><Badge value={v.os} /></td>
                    <td className="px-4 py-3 text-stone-700 whitespace-nowrap">{v.city}</td>
                    <td className="px-4 py-3 text-stone-700 whitespace-nowrap">{v.region}</td>
                    <td className="px-4 py-3 text-stone-700 whitespace-nowrap">{v.country}</td>
                    <td className="px-4 py-3 text-stone-500 text-xs">{v.isp}</td>
                    <td className="px-4 py-3 text-stone-500 text-xs">{v.referrer}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-stone-400 text-center">
          Showing {displayed.length} of {visits.length} total visits
        </p>
      </div>
    </div>
  );
}