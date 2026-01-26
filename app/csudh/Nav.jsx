'use client'


import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Nav() {
    return (
        <nav className={`sticky top-0 z-50 w-full bg-[#860038] transition-all duration-300}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex justify-between items-center h-16">

                    {/* Left: Logo with Hover Effect */}
                    <div className="flex-shrink-0 transition-transform hover:scale-105 active:scale-95">
                        <Link href="/csudh">
                            <Image
                                alt="Kamrul Hasan"
                                src="/logo/csudh_logo.png"
                                height={45}
                                width={140}
                                priority
                                className="object-contain"
                            />
                        </Link>
                    </div>
                </div>
            </div>

        </nav>
    )
}
