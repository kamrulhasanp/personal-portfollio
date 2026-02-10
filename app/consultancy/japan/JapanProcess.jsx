import { PhoneCall, ListChecks, FileSearch, Send, Stamp, Plane } from "lucide-react";
import ButtonWithDesign from "@/components/common/ButtonWithDesign";

const steps = [
  {
    title: "Free Consultation",
    description: "We understand your goals, background, and timeline to plan the right path.",
    icon: PhoneCall,
  },
  {
    title: "University & Program Shortlist",
    description: "We shortlist suitable universities/language schools based on budget and requirements.",
    icon: ListChecks,
  },
  {
    title: "Document Review & Preparation",
    description: "We review and prepare documents (SOP, CV, transcripts) and fix missing items.",
    icon: FileSearch,
  },
  {
    title: "Application Submission",
    description: "We assist with forms, deadlines, and submission to maximize acceptance chances.",
    icon: Send,
  },
  {
    title: "Admission + COE/Visa Support",
    description: "We guide you through admission steps and Japan visa/COE requirements.",
    icon: Stamp,
  },
  {
    title: "Pre-Departure & Settlement",
    description: "We help with accommodation, travel checklist, and settling in Japan.",
    icon: Plane,
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
                className="rounded-xl border border-gray-100 p-6 hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                    <Icon size={22} className="text-gray-700" />
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
