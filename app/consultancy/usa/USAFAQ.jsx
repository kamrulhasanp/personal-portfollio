import ButtonWithDesign from "@/components/common/ButtonWithDesign";

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
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Quick answers about USA admissions, I-20, SEVIS, and the F-1 visa process.
          </p>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, idx) => (
            <details
              key={idx}
              open={idx === 0}
              className="group border border-gray-200 rounded-xl p-5"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="font-semibold text-gray-800">{item.q}</span>
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
          <ButtonWithDesign text="Get Free Profile Evaluation" />
        </div>

      </div>
    </section>
  );
}
