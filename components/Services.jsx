"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { getPlaylistVideoCount } from '@/lib/youtube';

export default function Services() {
    const [usaCount, setUsaCount] = useState("0");
    const [japanCount, setJapanCount] = useState("0");

    useEffect(() => {
        async function fetchCounts() {
            //USA Playlist ID https://youtube.com/playlist?list=PLUCZ8nTtB5aPtNFuikTqBeD0Al9Gfzwnu&si=PxyC1Eq56qRBi314
            const usaVideoCount = await getPlaylistVideoCount("PLUCZ8nTtB5aPtNFuikTqBeD0Al9Gfzwnu");
            setUsaCount(usaVideoCount);

            //Japan Playlist ID https://youtube.com/playlist?list=PLUCZ8nTtB5aMmL6s-lMvr0PVvEOBhah84&si=4c8pOe87tg2GFlmp 
            const japanVideoCount = await getPlaylistVideoCount("PLUCZ8nTtB5aMmL6s-lMvr0PVvEOBhah84");
            setJapanCount(japanVideoCount)
            console.log('Japan count', japanVideoCount)

        }
        fetchCounts();
    }, []);
    const services = [
        {
            title: "Higher Study in the USA",
            description: "Consultancy covering university selection, scholarship, and complete F1 Visa documentation.",
            banner: "/images/study_in_usa.png",
            icon: "🇺🇸",
            videoCount: `${usaCount}+ Videos`,
            link: "/consultancy/usa"
        },

        {
            title: "Higher Study in Japan",
            description: "End-to-end mentorship for Japanese Government University, professor outreach, and scholarships.",
            banner: "/images/study_in_japan.png",
            icon: "🇯🇵",
            videoCount: `${japanCount}+ Videos`,
            link: "/consultancy/japan"
        },
      
        {
            title: "Cybersecurity Teaching",
            description: "Hands-on online bootcamps covering Pen-testing and Secure Coding.",
            banner: "/images/cybersecurity_training.png",
            icon: "🛡️",
            videoCount: "25+ Tutorials",
            link: "/cybersicurity"
        }
    ];
    return (
        <section id='services' className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Consultancy & <span className="text-blue-600">Mentorship</span>
                    </h2>
                    <div className="w-60 h-1.5 bg-orange-100 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group p-8 border border-gray-100 rounded-3xl bg-[#f8f9fa] hover:bg-white hover:shadow-2xl transition-all duration-300">
                            {/* Image Banner Container */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={service.banner}
                                    alt={service.title}
                                    fill  /* ADD THIS PROP */
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" /* Optional: Helps with performance */
                                />
                                {/* Optional: Dark overlay to make text pop if needed */}
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                            </div>
                            {/* <div className="text-4xl mb-4">{service.icon}</div> */}
                            <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600">{service.title}</h3>
                            <p className="text-gray-600 text-sm mb-6">{service.description}</p>

                            <div className="flex items-center gap-2 text-xs font-bold text-red-600 mb-6">
                                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                                {service.videoCount} ON YOUTUBE
                            </div>

                            <Link href={service.link} className="inline-block w-full text-center py-3 rounded-xl border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-colors">
                                View Service Details
                            </Link>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    )
}
