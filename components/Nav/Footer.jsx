'use client'

import React from 'react'
import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaYoutube } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaXTwitter} from 'react-icons/fa6';

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 text-gray-300 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">
              Kamrul<span className="text-blue-500">.</span>
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Full-Stack Developer and Cybersecurity Specialist. 
              Bridging the gap between secure architecture and 
              seamless user experiences across the globe.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="hover:text-blue-400 transition-colors">About Me</Link></li>
              <li><Link href="#papers" className="hover:text-blue-400 transition-colors">Research Papers</Link></li>
              <li><Link href="#services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="#contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/consultancy/japan" className="hover:text-blue-400 transition-colors">Japan Study Consultant</Link></li>
              <li><Link href="/consultancy/usa" className="hover:text-blue-400 transition-colors">USA Study Consultant</Link></li>
              <li><Link href="/cybersicurity" className="hover:text-blue-400 transition-colors">Cybersecurity Mentorship</Link></li>
            </ul>
          </div>

          {/* Location & Social */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://linkedin.com/in/kamrulhasanp" target="_blank" className="hover:text-white transition-colors"><FaLinkedinIn size={20} /></a>
              <a href="https://github.com/kamrulhasanp" target="_blank" className="hover:text-white transition-colors"><FaGithub size={20} /></a>
              <a href="https://www.youtube.com/@kamrulhasanp/" target="_blank" className="hover:text-white transition-colors"><FaYoutube size={20} /></a>
              <a href="https://x.com/@kamrul_se" target="_blank" className="hover:text-white transition-colors"><FaXTwitter size={20} /></a>
              <a href="https://www.facebook.com/kamrulhasan.p.se" target="_blank" className="hover:text-white transition-colors"><FaFacebookF size={20} /></a>
              <a href="https://www.instagram.com/kamrul.se/" target="_blank" className="hover:text-white transition-colors"><FaInstagram size={20} /></a>
            </div>
            {/* <p className="text-xs text-gray-500">
              Based in Los Angeles, USA <br />
              & Tokyo, Japan
            </p> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 items-center text-center">
          <p className="text-xs text-gray-500">
            © {currentYear} Kamrul Hasan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
