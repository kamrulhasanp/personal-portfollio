"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function VisitLogger({
  onlyPages = null,
  ignorePages = [],
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    if (onlyPages && !onlyPages.includes(pathname)) return;
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
  }, [ignorePages, onlyPages, pathname]);

  return null;
}