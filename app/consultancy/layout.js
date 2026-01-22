import React from 'react'
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from '@/components/Nav/NavBar';
import Footer from '@/components/Nav/Footer';

import "../globals.css";
import Contact from '@/components/Contact';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kamrul Hasan | Portfolio",
  description: "Full-Stack Developer & Cybersecurity Specialist",

};

export default async function RootLayout({ children }) {

  return (
    <div className='h-screen overflow-auto'>

      <NavBar />

      <main className='mt-5'>
        {children}
      </main>

      <Contact />

      <Footer />


    </div>

  )
}
