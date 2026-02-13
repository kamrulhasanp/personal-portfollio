import {
  UserCheck,
  GraduationCap,
  FileText,
  Stamp,
  MessageSquare,
  Plane
} from "lucide-react";
import ButtonWithDesign from "@/components/common/ButtonWithDesign";

const steps = [
  {
    title: "Free Profile Evaluation",
    description:
      "We assess your academic background, test scores, budget, and goals to suggest realistic options.",
    icon: UserCheck,
  },
  {
    title: "University & Program Selection",
    description:
      "Shortlisting US universities and programs aligned with your profile and career plans.",
    icon: GraduationCap,
  },
  {
    title: "Application, SOP & LOR Preparation",
    description:
      "Step-by-step guidance for applications, SOP writing, and recommendation letters.",
    icon: FileText,
  },
  {
    title: "I-20 & SEVIS Guidance",
    description:
      "Support with I-20 issuance, SEVIS fee guidance, and required financial documents.",
    icon: Stamp,
  },
  {
    title: "F-1 Visa Interview Preparation",
    description:
      "Mock interviews, common questions, and confidence-building interview strategies.",
    icon: MessageSquare,
  },
  {
    title: "Pre-Departure & Arrival Support",
    description:
      "Travel checklist, accommodation guidance, and preparation for arrival in the USA.",
    icon: Plane,
  },
];

export default function USAProcess() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our USA Study Process
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A transparent and structured process to guide you from evaluation to arrival in the USA.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="border border-gray-100 rounded-xl p-6 hover:shadow-2xl hover:border-blue-400 hover:-translate-y-2 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100">
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
          <ButtonWithDesign text="Start with Free Profile Evaluation" />
        </div>

      </div>
    </section>
  );
}
