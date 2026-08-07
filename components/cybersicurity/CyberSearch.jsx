"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function CyberSearch() {
  const [query, setQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const cleanQuery = query.trim();

    if (!cleanQuery) return;

    console.log("Search for:", cleanQuery);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-8 flex max-w-3xl items-center gap-3 rounded-2xl border border-cyan-400/20 bg-slate-950/50 px-5 py-4"
    >
      <Search className="text-slate-400" size={21} />

      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search authentication, phishing, firewall, OWASP..."
        aria-label="Search cybersecurity topics"
        className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
      />
    </form>
  );
}