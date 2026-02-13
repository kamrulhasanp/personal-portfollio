import {
  GraduationCap,
  FileText,
  Stamp,
  MessageSquare,
  DollarSign,
  Plane
} from "lucide-react";
import ButtonWithDesign from "@/components/common/ButtonWithDesign";

const services = [
  {
    title: "University & Program Shortlisting",
    description:
      "Personalized shortlisting of US universities based on profile, budget, and career goals.",
    icon: GraduationCap,
  },
  {
    title: "Application, SOP & LOR Guidance",
    description:
      "Complete guidance for applications, Statement of Purpose, and recommendation letters.",
    icon: FileText,
  },
  {
    title: "I-20 & SEVIS Assistance",
    description:
      "Support with I-20 processing, SEVIS fee guidance, and documentation clarity.",
    icon: Stamp,
  },
  {
    title: "F-1 Visa Interview Preparation",
    description:
      "Mock interviews, common questions, and confidence-building strategies.",
    icon: MessageSquare,
  },
  {
    title: "Scholarship & Funding Guidance",
    description:
      "Guidance on scholarships, assistantships, and financial documentation.",
    icon: DollarSign,
  },
  {
    title: "Pre-Departure & Arrival Support",
    description:
      "Travel checklist, accommodation guidance, and arrival preparation.",
    icon: Plane,
  },
];

export default function USAServices() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our USA Study Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            End-to-end guidance to help you study in the USA with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-2xl hover:border-blue-400 hover:-translate-y-2 transition-all"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 mb-4">
                  <Icon size={22} className="text-green-700" />
                </div>

                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <ButtonWithDesign text="Get Free Profile Evaluation" />
        </div>

      </div>
    </section>
  );
}
