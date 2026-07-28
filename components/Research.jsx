'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
//import { HiOutlineExternalLink, HiOutlineDocumentSearch } from "react-icons/hi";
import { HiOutlineExternalLink, HiOutlineDocumentText } from "react-icons/hi";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Research = () => {

    const papers = [
        {
            title: "Machine Learning Approaches to Real-Time Risk Assessment in Cloud Computing: An Intelligent Framework for Proactive Threat Detection",
            journal: "European Journal of Applied Science, Engineering and Technology",
            date: "July 2024",
            status: "Published",
            link: "https://ejaset.com/index.php/journal/article/view/402/289",
            description: "Developed an integrated ML platform for real-time cloud risk assessment using XGBoost (98.6% accuracy) and Random Forest for proactive threat detection."
        },
 
        {
            title: "A Multi-Platform Framework for Islamophobia Detection on Indian Twitter and Instagram Using ML and Transformer-Based Deep Learning Models",
            journal: "IEEE Xplore (Conference Paper)",
            date: "April 2026",
            status: "Published",
            link: "https://ieeexplore.ieee.org/abstract/document/11545601",
            description: "Built a cross-platform hate speech detection framework using 7,000 Indian tweets and 1,000 Instagram posts. Benchmarked SVM, Logistic Regression, Random Forest, Naïve Bayes, fine-tuned BERT, and T5 — with SVM achieving the best accuracy of 95.49% (F1: 0.99) for Islamophobic content classification."
        }
    ];

    // Logic: Disable sliding features if only 1 item exists
    const isSlidingEnabled = papers.length > 1;

    return (
        <section id="papers" className="py-10 bg-[#fcfcfc]">
            <div className="max-w-7xl mx-auto px-4">

                {/* Section Heading */}

                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Research <span className="text-blue-600">Papers</span>
                    </h2>
                    <div className="w-45 h-1.5 bg-orange-100 rounded-full"></div>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={isSlidingEnabled}
                    pagination={{ clickable: true }}
                    autoplay={isSlidingEnabled ? { delay: 6000 } : false}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 2, spaceBetween: 40 }
                    }}
                    className="pb-16 !px-2"
                >
                    {papers.map((paper, index) => (
                        <SwiperSlide key={index} className="h-auto mb-12">
                            <div className="group relative bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:border-blue-400 hover:-translate-y-2 transition-all duration-500 h-full flex flex-col overflow-hidden">

                                {/* Background Decorative Icon */}
                                <HiOutlineDocumentText className="absolute -bottom-4 -right-4 text-9xl text-gray-50 group-hover:text-blue-50 transition-colors duration-300 pointer-events-none" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest ${paper.status === "Published" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                                            }`}>
                                            {paper.status}
                                        </span>
                                        {paper.link !== "#" && (
                                            <a
                                                href={paper.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 flex items-center gap-1.5 text-xs font-bold hover:text-blue-800 transition-colors"
                                            >
                                                SOURCE <HiOutlineExternalLink className="text-sm" />
                                            </a>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 leading-tight mb-4 group-hover:text-blue-600 transition-colors">
                                        {paper.title}
                                    </h3>

                                    <div className="mb-4">
                                        <p className="text-sm text-gray-900 font-extrabold mb-1 tracking-tight">
                                            {paper.journal}
                                        </p>
                                        <p className="text-xs text-gray-400 font-medium">
                                            {paper.date}
                                        </p>
                                    </div>

                                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-4 group-hover:text-gray-700 transition-colors">
                                        {paper.description}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Custom CSS for Swiper Navigation & Pagination */}
            <style jsx global>{`
                .swiper-pagination-bullet { width: 10px; height: 10px; background: #cbd5e1; opacity: 1; transition: all 0.3s; }
                .swiper-pagination-bullet-active { background: #2563eb !important; width: 24px; border-radius: 5px; }
                .swiper-button-next, .swiper-button-prev { background: white; width: 35px !important; height: 35px !important; border-radius: 50%; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); color: #2563eb !important; }
                .swiper-button-next:after, .swiper-button-prev:after { font-size: 18px !important; font-weight: 800 !important; }
                .swiper-button-next:hover, .swiper-button-prev:hover { background: #2563eb; color: white !important; }
        
            `}</style>
        </section>
    )
}
