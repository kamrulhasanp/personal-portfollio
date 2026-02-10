import React from 'react'
import JapanHero from './JapanHero'
import JapanServices from './JapanServices'
import JapanProcess from './JapanProcess'
import Testimonials from './Testimonials'
import FAQ from './FAQ'

export const metadata = {
    title: "Japan Study Consultancy | Student Visa Support & Admission Guidance",
    description: "Expert Japan study consultancy offering university selection, professor communication support, document preparation, student visa guidance, and pre-departure assistance for international students.",

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
