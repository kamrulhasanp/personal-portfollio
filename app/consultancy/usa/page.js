
import React from 'react'
import USAHero from './USAHero'
import USAServices from './USAServices'
import USAProcess from './USAProcess'
import USATestimonials from './USATestimonials'
import USAFAQ from './USAFAQ'

export const metadata = {
    title: "USA Study Consultancy | University Admission & F-1 Visa Support",
    description:
        "Expert USA study consultancy services with university shortlisting, application support, I-20/SEVIS guidance, and F-1 visa interview preparation.",
};
export default function page() {
    return (
        <div>
            <USAHero />
            <USAServices />
            <USAProcess />
            {/* <USATestimonials /> */}
            <USAFAQ />
        </div>

    )
}
