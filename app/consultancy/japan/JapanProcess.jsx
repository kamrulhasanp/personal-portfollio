import { PhoneCall, ListChecks, FileSearch, Send, Stamp, Plane } from "lucide-react";
import ButtonWithDesign from "@/components/common/ButtonWithDesign";

const steps = [
  {
    title: "Free Consultation",
    description: "We understand your goals, background, and timeline to plan the right path.",
    icon: PhoneCall,
  },
  {
    title: "Document Review & Preparation",
    description: "We review and prepare documents (SOP, CV, transcripts) and fix missing items.",
    icon: FileSearch,
  },
  {
    title: "Professor & Application Support",
    description: "We help you select the right professor, prepare research documents, and complete the university application process.",
    icon: ListChecks,
  },

  {
    title: "Interview & Admission Result",
    description: "We guide you through interview preparation and support you until you receive the offer letter from the university.",
    icon: Send,
  },
  {
    title: "CoE, Visa &amp; Arrival in Japan",
    description: "We assist with the Certificate of Eligibility (CoE), visa application, and final preparation to fly and start your studies in Japan.",
    icon: Stamp,
  },
];

export default function JapanProcess() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Process
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A simple, transparent step-by-step process to help you study in Japan confidently.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="rounded-xl border border-gray-100 p-6 hover:shadow-2xl hover:border-blue-400 hover:-translate-y-2 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                    <Icon size={22} className="text-green-700" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 font-medium">
                      Step {idx + 1}
                    </p>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <ButtonWithDesign text="Start with a Free Consultation" />
        </div>

      </div>
    </section>
  );
}
