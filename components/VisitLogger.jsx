"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function VisitLogger({
  onlyPages = null,
  ignorePages = [],
  ignoreHosts = [],
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    
    const hostname = window.location.hostname;

    if (onlyPages && !onlyPages.includes(pathname)) return;

     // Ignore selected hosts
     if (ignoreHosts.includes(hostname)) return;

     // Ignore selected page
    if (ignorePages.includes(pathname)) return;

    // For get visited key
    const visitedKey = "hasVisitedWebsite";
    const isFirstVisit = localStorage.getItem(visitedKey) ? "No" : "Yes";

    if (isFirstVisit === "Yes") {
      localStorage.setItem(visitedKey, "true");
    }

    fetch("/api/log_visit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userAgent: navigator.userAgent,
        referrer: document.referrer || "direct",
        page: pathname,
        firstVisit: isFirstVisit,
      }),
    }).catch((err) => {
      
    });
  }, [ignorePages, ignoreHosts, onlyPages, pathname]);

  return null;
}