'use client'

import React, { useState } from 'react'
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FaLinkedinIn, FaYoutube, FaGithub } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import ButtonWithDesign from './common/ButtonWithDesign';
import { toastNotification } from '@/lib/toastNotification';

// Helper to render error messages
const ErrorMsg = ({ msg }) => msg ? <p className="text-red-500 text-xs mt-1 ml-2">{msg}</p> : null;


export default function Contact() {
    const [status, setStatus] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = (data) => {
        let newErrors = {};

        // Name validation
        if (!data.name || data.name.length < 1) newErrors.name = "Enter your name";

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) newErrors.email = "Invalid email address";

        // Phone validation (at least 10 digits)
        if (data.phone && data.phone.length < 10) newErrors.phone = "Invalid phone number";

        // Service validation
        if (data.service === "Select Service" || !data.service) newErrors.service = "Please select a service";

        // Message validation
        if (!data.message || data.message.length < 10) newErrors.message = "Message must be at least 10 characters";

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        // 1. Get data using the 'name' attributes of your inputs
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message"),
            service: formData.get("service"),
        };

        // Run validation
        const formErrors = validateForm(data);
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return; // Stop here if there are errors
        }

        setStatus("sending");


        try {
            // 2. Fetch the URL path, NOT the function
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus("success");
                toastNotification('success', 'Message sent successfully. Please wait; an admin will contact you shortly.')
                e.target.reset(); // Clear the form
                // Reset status after 5 seconds
                setTimeout(() => setStatus(""), 5000);

            } else {
                setStatus("error");
                toastNotification('error', 'Something is wrong. Please try again later.')
            }
        } catch (error) {
            console.error("Submit Error:", error);
            setStatus("error");
        }
    };


    return (
        <section id="contact" className="py-10 bg-[#f8f9fa] dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Side: Contact Info */}
                    <div>
                        <div className="mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
                                Lets <span className="text-blue-600">Connect</span>
                            </h2>

                            <div className="w-25 h-1.5 bg-orange-100 rounded-full"></div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-md">
                            Whether you have a question about web systems, cybersecurity,
                            or want to discuss study opportunities in Japan/USA, Im here to help.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <HiOutlineMail size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Email Me</p>
                                    <p className="text-gray-900 dark:text-white font-medium">kamrulhasanan@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center shadow-sm">
                                    <HiOutlineLocationMarker size={24} className="text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Location</p>
                                    <p className="text-gray-900 dark:text-white font-medium">Los Angeles, CA</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-wrap gap-3 mt-12">
                            {[
                                { icon: <FaLinkedinIn />, link: "https://linkedin.com/in/kamrulhasanp", color: "hover:bg-[#0077B5]" },
                                { icon: <FaGithub />, link: "https://github.com/kamrulhasanp", color: "hover:bg-[#333]" },
                                { icon: <FaYoutube />, link: "https://www.youtube.com/@kamrulhasanp/", color: "hover:bg-[#FF0000]" },
                                { icon: <FaXTwitter />, link: "https://x.com/@kamrul_se", color: "hover:bg-[#000000]" },
                                { icon: <FaFacebookF />, link: "https://www.facebook.com/kamrulhasan.p.se", color: "hover:bg-[#1877F2]" },
                                { icon: <FaInstagram />, link: "https://www.instagram.com/kamrul.se/", color: "hover:bg-[#E4405F]" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.link}
                                    target="_blank" // Always open social links in a new tab
                                    rel="noopener noreferrer" // Security best practice for external links
                                    className={`w-8 h-8 rounded-full bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} hover:text-white transition-all duration-300 hover:-translate-y-1`} // Added a small float effect
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-xl shadow-blue-500/5">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <input
                                        name='name'
                                        type="text"
                                        placeholder="Your Name"
                                        className={`w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-600 dark:text-white outline-none ${errors.name ? 'ring-2 ring-red-500' : ''}`} />

                                    <ErrorMsg msg={errors.name} />
                                </div>
                                <div>
                                    <input
                                        name='email'
                                        type="email"
                                        placeholder="Your Email"
                                        className={`w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-600 dark:text-white outline-none ${errors.email ? 'ring-2 ring-red-500' : ''}`} />

                                    <ErrorMsg msg={errors.email} />
                                </div>
                            </div>
                            <div className="grid grid-cols-1  md:grid-cols-2 gap-5">
                                <div>
                                    <input
                                        name='phone'
                                        type="tel"
                                        placeholder="Your Phone"
                                        className={`w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-600 dark:text-white outline-none ${errors.phone ? 'ring-2 ring-red-500' : ''}`} />
                                    <ErrorMsg msg={errors.phone} />
                                </div>
                                <div>
                                    <select name="service" className={`w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-600 dark:text-white outline-none ${errors.service ? 'ring-2 ring-red-500' : ''}`}>
                                        <option>Select Service</option>
                                        <option>Web Development</option>
                                        <option>Cybersecurity Training</option>
                                        <option>Japan Study Consultancy</option>
                                        <option>USA Study Consultancy</option>
                                        <option>Others</option>
                                    </select>
                                    <ErrorMsg msg={errors.service} />

                                </div>
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    placeholder="How can I help you?"
                                    rows="4"
                                    className={`w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-blue-600 dark:text-white outline-none ${errors.message ? 'ring-2 ring-red-500' : ''}`}
                                ></textarea>

                                <ErrorMsg msg={errors.message} />
                            </div>


                            {/* Feedback messages */}
                            {/* {status === "sending" && <p className="text-blue-600 text-sm">Sending your message...</p>}
                            {status === "success" && <p className="text-green-600 text-sm">Message sent to Google Sheets & Gmail!</p>}
                            {status === "error" && <p className="text-red-600 text-sm">Error! Please try again later.</p>} */}

                            <ButtonWithDesign
                                type="submit" // THIS IS THE KEY CHANGE
                                text={status === "sending" ? 'Sending...' : 'Send Message'}
                                className='w-full py-4 rounded-xl'
                                disabled={status === "sending"}
                            />
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}
