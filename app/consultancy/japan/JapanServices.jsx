import { GraduationCap, FileText, Languages, Plane, Award, University } from "lucide-react";
import ButtonWithDesign from "@/components/common/ButtonWithDesign";

const services = [
  {
    title: "University Admission Guidance",
    description:
      "Shortlisting universities, application support, and admission follow-ups.",
    icon: University,
  },
  {
    title: "Student Visa Support",
    description:
      "End-to-end assistance for Japan student visa applications and compliance.",
    icon: FileText,
  },
  {
    title: "Language School Enrollment",
    description:
      "Guidance for Japanese language schools and pathway programs.",
    icon: Languages,
  },
  {
    title: "Document Preparation & Translation",
    description:
      "Review, preparation, and translation of academic and visa documents.",
    icon: FileText,
  },
  {
    title: "Scholarship & Funding Guidance",
    description:
      "Information and support for available scholarships and financial planning.",
    icon: Award,
  },
  {
    title: "Pre-Departure & Settlement Support",
    description:
      "Accommodation guidance, travel preparation, and life in Japan support.",
    icon: Plane,
  },
];

export default function JapanServices() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Japan Study Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Everything you need to start and succeed in your higher education journey in Japan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 mb-4">
                  <Icon className="text-gray-700" size={24} />
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
          <ButtonWithDesign text="Get Free Consultation" />
        </div>

      </div>
    </section>
  );
}
