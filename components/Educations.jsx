'use client'

import React from 'react'
import Image from 'next/image';

export const Educations = () => {
    const educationData = [
        {
            university: "Daffodil International University",
            location: "Dhaka, Bangladesh",
            flag: "/icons/bangladeshGifFlag.gif", // Using the same path as your About section
            years: "2015 – 2019",
            degree: "BSc in Software Engineering",
            description: "Completed my BSc in Software Engineering at one of Bangladesh's leading private universities. The program covered key areas such as software development, database management, and project management, emphasizing problem-solving and technical innovation."
        },
        {
            university: "California State University, Dominguez Hills",
            location: "Los Angeles, California, USA",
            flag: "/icons/usa_flag.gif", // You can use a USA flag gif here
            years: "2025 – 2027",
            degree: "Cybersecurity Specialist Program",
            description: "Currently pursuing advanced studies in Cybersecurity. This program equips me with in-depth knowledge of network security, ethical hacking, risk management, and digital forensics, preparing me to secure complex digital infrastructures."
        }
    ];

    return (

        <section id="education" className="py-10 bg-[#f8f9fa]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Heading */}
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        My <span className="text-blue-600">Education</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-orange-100 rounded-full"></div>
                </div>

                {/* Education Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {educationData.map((edu, index) => (
                        <div key={index} className="flex flex-col group">

                            {/* University Name */}
                            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                {edu.university}
                            </h3>

                            {/* Location and Flag */}
                            <div className="flex items-center gap-2 mt-2 mb-1">
                                <span className="text-gray-500 font-medium">{edu.location}</span>
                                <div className="relative w-6 h-4 overflow-hidden rounded-sm shadow-sm">
                                    <Image
                                        src={edu.flag}
                                        alt={edu.location}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Years (Using your yellow/gold brand color) */}
                            <span className="text-[#f1c40f] font-bold text-lg mb-4">
                                {edu.years}
                            </span>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed text-base">
                                <span className="font-bold text-gray-800 italic block mb-2">{edu.degree}</span>
                                {edu.description}
                            </p>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
