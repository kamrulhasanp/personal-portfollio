'use client'

import Link from 'next/link'
import React from 'react'

export default function ButtonWithDesign({ text = "Hire Me", href = "#", className = "", type = "button", onClick}) {
  // Shared styles so the design stays identical
  const styles = `relative inline-block px-5 py-2 rounded-full font-medium text-white 
                bg-blue-600 transition-all duration-500 ease-in-out
                bg-gradient-to-r from-yellow-600 to-yellow-600 bg-[length:0%_100%] bg-no-repeat 
                hover:bg-[length:100%_100%] active:bg-[length:100%_100%] shadow-md active:scale-95 text-center ${className}`;

  // If it's a submit button or has an onClick, use <button> 
  if (type === "submit" || onClick) {
    return (
      <button type={type} onClick={onClick} className={styles}>
        <span className="relative z-10">{text}</span>
      </button>
    );
  }

  // Otherwise, treat it as a navigation Link
  return (
    <Link href={href || "#"} className={styles}>
      <span className="relative z-10">{text}</span>
    </Link>
  );
}
