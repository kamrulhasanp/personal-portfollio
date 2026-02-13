'use client'
import ButtonWithDesign from "@/components/common/ButtonWithDesign";
import Image from "next/image";
import { useState } from "react";


const faqs = [
  {
    q: "Who can apply to study in Japan?",
    a: "Students who meet academic requirements and can provide the necessary documents and financial proof can apply. We’ll review your profile and suggest suitable programs.",
  },
  {
    q: "What documents are required for Japan student visa and admission?",
    a: "Common documents include passport, academic certificates/transcripts, bank solvency proof, SOP, photos, and application forms. Exact requirements vary by institution and visa category.",
  },
  {
    q: "What is your visa success rate?",
    a: "We have a 100% visa success record for students who complete the process with us and follow our guidance properly.",
  },
  {
    q: "Is tution fee waiver available at japanese government universities?",
    a: "Yes. After arriving in Japan, students can apply for a tuition fee waiver. The waiver ranges from 50% to 100%, and most of our students receive a 100% tuition fee waiver.",
  },
  {
    q: "How much total budget is required from Bangladesh?",
    a: "The estimated total initial budget is 7-8 lakh BDT, which covers application, documentation, and initial settlement expenses.",
  },
  {
    q: "What is the average monthly living cost in Japan?",
    a: "The average monthly living cost is approximately 50,000-60,000 JPY, including accommodation, food, and daily expenses.",
  },
  {
    q: "Can I study in Japan without knowing Japanese?",
    a: "Yes, you can. But we suggest learning at least N5 level Japanese to help you communicate in Japan.",
  },
  {
    q: "What is COE (Certificate of Eligibility)?",
    a: "COE is a document issued in Japan that supports your visa application. Student visa applications require COE before you apply at the embassy.",
  },
  {
    q: "How do I start?",
    a: "Start by contacting us for a free consultation. We’ll review your profile, suggest options, and share a document checklist.",
  },
];

export default function FAQ() {
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
          Quick answers to common questions about studying in Japan and our consultancy support.
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

        <div>

          {/* FAQ Items */}
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
            <ButtonWithDesign text="Still have questions? Contact Us" />
          </div>
        </div>
      </div>
    </section>
  );
}
