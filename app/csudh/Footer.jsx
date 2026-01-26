
import React from 'react'

export default function Footer() {
    
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-gray-300 pt-16 pb-8 border-t border-slate-900">
    

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-slate-900 items-center text-center">
        <p className="text-xs text-gray-500">
          © {currentYear} Kamrul Hasan. All rights reserved.
        </p>
      </div>
    
  </footer>
  )
}
