import React from 'react'
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

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

      <main className=''>
        {children}
      </main>

    </div>

  )
}
