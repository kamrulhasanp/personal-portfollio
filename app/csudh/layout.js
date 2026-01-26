import React from 'react'
import { Geist, Geist_Mono } from "next/font/google";

import "../globals.css";
import Footer from './Footer';
import Nav from './Nav';

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
        <div className="min-h-screen flex flex-col">
            <Nav />
            <main className="flex-grow">
                {children}
            </main>

            <div >
                <Footer />
            </div>
        </div>

    )
}
