'use client'
import ButtonWithDesign from "@/components/common/ButtonWithDesign";
import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    q: "Do you guarantee admission or USA F-1 visa approval?",
    a: "No one can honestly guarantee approval because decisions are made by universities and the embassy. We focus on eligibility, accurate documentation, and strong preparation to maximize your chances.",
  },
  {
    q: "Do you help with F-1 visa interview preparation?",
    a: "Yes. We provide guidance on common questions, mock interview practice, and how to present your academic and financial plan clearly and confidently.",
  },
  {
    q: "What is an I-20 and why is it important?",
    a: "The I-20 is a document issued by a US school after admission. You need it to pay the SEVIS fee and apply for the F-1 visa interview.",
  },
  {
    q: "What is SEVIS and when do I pay the SEVIS fee?",
    a: "SEVIS is a US student tracking system. After you receive your I-20, you pay the SEVIS fee before attending your visa interview.",
  },
  {
    q: "How long does the USA application and visa process take?",
    a: "Timelines vary by intake, university response time, and your document readiness. After the first evaluation, we share a clear timeline based on your target intake.",
  },
  {
    q: "Do you help with scholarships or funding guidance?",
    a: "Yes. We guide you on scholarship opportunities and how to prepare financial documentation. Funding availability depends on your profile and the program.",
  },
  {
    q: "Can I apply without IELTS/TOEFL?",
    a: "Some universities accept alternatives like Duolingo or waive tests based on prior education. Requirements vary by university, and we help you choose realistic options.",
  },
  {
    q: "How do I start?",
    a: "Start with a free profile evaluation. We’ll shortlist options and share a document checklist so you can move forward confidently.",
  },
];

export default function USAFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="bg-white py-20">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Quick answers about USA admissions, I-20, SEVIS, and the F-1 visa process.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-stretch">
        <div className="relative w-full h-full min-h-[400px]">
          <Image
            src="/images/faqs.png"
            alt="Study in Japan consultancy for international students"
            fill
            className="object-contain rounded-xl"
            priority
          />
        </div>

        {/* FAQ */}
        <div>
          <div className="space-y-4">
            {faqs.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-xl"
                >
                  {/* Whole row clickable */}
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-gray-800">
                      {item.q}
                    </span>

                    <span
                      className={`text-gray-500 transition-transform ${isOpen ? "rotate-45" : ""
                        }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <div className="px-5 pb-5">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <ButtonWithDesign text="Get Free Profile Evaluation" />
          </div>
        </div>Í

      </div>
    </section>
  );
}
