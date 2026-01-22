'use client'

import Image from "next/image";
import { MdLocationPin } from "react-icons/md";
import { FaReact, FaPython, FaPhp, FaLaravel, FaDocker, FaSquareGithub } from "react-icons/fa6";
import { SiNextdotjs, SiKotlin } from "react-icons/si";
import { DiDjango, DiJavascript } from "react-icons/di";


const About = () => {
    const skills = ["Laravel", "Next.js", "Django", "Docker", "Cybersecurity"];

    return (
        <section id="about" className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Stats/Image Box */}
                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="order-2 md:order-none bg-[#f8f9fa] p-8 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-2xl shadow-sm">
                                <div className="text-center" >
                                    <h3 className="text-4xl font-bold text-blue-600 mb-2">8+</h3>
                                    <p className="text-gray-600 font-bold">Projects Built with</p>
                                </div>

                                <div className="flex flex-wrap justify-center gap-6 mt-5">
                                    {/* Setting size to 40 (pixels) for a large, professional look */}
                                    <FaReact size={20} color="#61DAFB" title="React" />
                                    <SiNextdotjs size={20} color="#000000" title="Next.js" />
                                    <FaPython size={20} color="#3776AB" title="Python" />
                                    <DiDjango size={20} color="#092E20" title="Django" />
                                    <FaPhp size={20} color="#777BB4" title="PHP" />
                                    <FaLaravel size={20} color="#FF2D20" title="Laravel" />
                                    <FaDocker size={20} color="#2496ED" title="Docker" />
                                    <FaSquareGithub size={20} color="#181717" title="GitHub" />
                                    <SiKotlin size={20} color="#7F52FF" title="Kotlin" />
                                    <DiJavascript size={20} color="#F7DF1E" title="JavaScript" />
                                </div>
                            </div>
                            <div className="order-1 md:order-none bg-[#f8f9fa] p-8 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-2xl shadow-sm mt-8">
                                <div className="text-center" >
                                    <h3 className="text-4xl font-bold text-blue-600 mb-2">4+</h3>
                                    <p className="text-gray-600 font-bold">Years Experience</p>
                                </div>
                                <div className="space-y-3 mt-5">
                                    {/* Bangladesh Row */}
                                    <div className="flex items-center gap-2 text-gray-700 font-medium">
                                        <MdLocationPin className="text-red-500 text-xl" />
                                        <span>Bangladesh</span>
                                        <Image width={20} height={20} alt="Bangladesh" src="/icons/bangladeshGifFlag.gif" />

                                    </div>

                                    {/* Japan Row */}
                                    <div className="flex items-center gap-2 text-gray-700 font-medium">
                                        <MdLocationPin className="text-red-600 text-xl" />
                                        <span>Japan </span>
                                        <Image width={20} height={20} alt="Bangladesh" src="/icons/japanese-flag.gif" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-orange-100 rounded-full blur-3xl"></div>
                    </div>

                    {/* Right: Content */}
                    <div>
                        {/* Section Heading */}
                        <div className="mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                My <span className="text-blue-600">Journey</span>
                            </h2>
                            <div className="w-20 h-1.5 bg-orange-100 rounded-full"></div>
                        </div>
                        {/* <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">
                            My Journey
                        </span> */}
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Bridging the gap between <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                Code & Security
                            </span>
                        </h2>

                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            I am a Full-Stack Developer currently advancing my expertise in Cybersecurity in California.
                            My background in Bangladesh and Japan has taught me the importance of precision,
                            scalable architecture, and user-centric design.
                        </p>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            I dont just build websites; I engineer secure digital environments that protect users
                            while providing a seamless experience.
                        </p>

                        {/* Skill Chips */}
                        {/* <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;