'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import ButtonWithDesign from './common/ButtonWithDesign'

export default function Hero() {
  const ref = useRef(null)

 
  return (
    <section ref={ref}
      className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-[#f8f9fa]">
        {/* bg-[#f8f9fa] previous bg color*/}  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">

        {/* Left Side: Text Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <span className='text-2xl font-bold text-blue-600 block mb-2'>
            Hey, I&apos;m Kamrul Hasan
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 relative">
            {/* The peach accent line under "Building Secure" */}

            <span className="relative inline-block">
              Building Secure &
              <span className="absolute bottom-2 left-0 w-full h-3 bg-red-500 -z-10 "></span>
            </span>
            <br />
            Scalable Web Systems
          </h1>

          <p className="text-lg text-gray-600 max-w-lg mb-10 leading-relaxed">
            Full Stack Developer & Cybersecurity Specialist focused on
            building secure, scalable, and user-centric applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <ButtonWithDesign
              href="#about"
              className="px-8 py-4 text-sm uppercase tracking-widest"
              text='More About Me'
            />
          </div>
        </div>

        {/* Right Side: Image with Border Effect */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-[3/4] shadow-2xl overflow-hidden border-4 border-white/20">
            <Image
              src="/Kamrul_Hero.jpg" // Ensure your image is in public/ folder
              alt="Kamrul Hasan"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>      
    </section>
  )
}
