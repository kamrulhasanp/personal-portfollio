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

    fetch("/api/log_visit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userAgent: navigator.userAgent,
        referrer: document.referrer || "direct",
        page: pathname,
      }),
    }).catch((err) => {
      
    });
  }, [pathname]);

  return null;
}