import React from 'react'
import JapanHero from './JapanHero'
import JapanServices from './JapanServices'
import JapanProcess from './JapanProcess'
import Testimonials from './Testimonials'
import FAQ from './FAQ'

export const metadata = {
    title: "Japan Study Consultancy | Hello From Japan",
    description:
        "Japan consultancy services for higher study: admission guidance, student visa support, documents, and pre-departure help.",
};

export default function page() {
    return (
        <>
            <JapanHero />
            <JapanServices />
            <JapanProcess />
            <Testimonials />
            <FAQ />

        </>

    )
}
