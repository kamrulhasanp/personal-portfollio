
import React from 'react'
import USAHero from './USAHero'
import USAServices from './USAServices'
import USAProcess from './USAProcess'
import USATestimonials from './USATestimonials'
import USAFAQ from './USAFAQ'

export const metadata = {
    title: "Study in USA Consultancy | F-1 Visa Guidance",
    description:
        "USA study consultancy for university admission, I-20/SEVIS support, and F-1 visa interview preparation.",
};
export default function page() {
    return (
        <div>
            <USAHero />
            <USAServices />
            <USAProcess />
            <USATestimonials />
            <USAFAQ />
        </div>

    )
}
