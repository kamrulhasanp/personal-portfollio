import ButtonWithDesign from "@/components/common/ButtonWithDesign";

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
    q: "How long does the whole process take?",
    a: "It depends on your intake and documentation readiness. Typically, shortlisting + application takes a few weeks, and COE/visa processing can take additional weeks. We’ll give you a timeline after the first call.",
  },
  {
    q: "Do you help with both university and language school?",
    a: "Yes. We can guide you for Japanese language schools, pathway programs, and university admissions based on your goals and background.",
  },
  {
    q: "Do you guarantee admission or visa approval?",
    a: "No one can honestly guarantee approval because final decisions are made by the university and immigration. We focus on correct documentation, eligibility, and a clear application to maximize your chances.",
  },
  {
    q: "Can I study in Japan without knowing Japanese?",
    a: "Yes, depending on the program. Many students start with a language school or choose English-taught programs. We’ll suggest the best option for your profile.",
  },
  {
    q: "What is COE (Certificate of Eligibility)?",
    a: "COE is a document issued in Japan that supports your visa application. Many student visa applications require COE before you apply at the embassy.",
  },
  {
    q: "How do I start?",
    a: "Start by contacting us for a free consultation. We’ll review your profile, suggest options, and share a document checklist.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Quick answers to common questions about studying in Japan and our consultancy support.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, idx) => (
            <details
              key={idx}
              className="group border border-gray-200 rounded-xl p-5"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="font-semibold text-gray-800">
                  {item.q}
                </span>
                <span className="ml-4 text-gray-500 group-open:rotate-45 transition">
                  +
                </span>
              </summary>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <ButtonWithDesign text="Still have questions? Contact Us" />
        </div>
      </div>
    </section>
  );
}
