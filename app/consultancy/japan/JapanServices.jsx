import { ClipboardCheck, UserSearch, BookOpen, FileText, Stamp, Mail, Plane, Award, University, Upload } from "lucide-react";
import ButtonWithDesign from "@/components/common/ButtonWithDesign";

const services = [
  {
    title: "University & Research Lab Matching",
    description:
      "Personalized shortlisting of Japanese government and public universities, aligned with your academic background and research interests, including suitable labs and supervisors.",
    icon: University,
  },
  {
    title: "Research Proposal & SOP Development",
    description:
      "Structured guidance to refine your research proposal and Statement of Purpose for Masters and PhD programs, ensuring clarity, academic focus, and alignment with your target lab.",
    icon: BookOpen,
  },
  {
    title: "Professor Communication Strategy",
    description:
      "Support in drafting professional emails to potential supervisors, presenting your academic profile effectively, and initiating meaningful research discussions.",
    icon: Mail,
  },
  {
    title: "Academic Document Review & Preparation",
    description:
      "Careful review and organization of transcripts, certificates, CV, recommendation letters, and supporting documents to meet university application standards.",
    icon: ClipboardCheck,
  },

  {
    title: "Scholarship & Funding Guidance",
    description:
      "Guidance on available funding pathways, including scholarship options and financial planning for Masters and PhD study at public universities in Japan.",
    icon: Award,
  },
  {
    title: "Application Submission Support",
    description:
      "tep-by-step assistance with online applications, required forms, deadlines, and document submission to ensure a complete and well-prepared application.",
    icon: Upload,
  },
  {
    title: "COE & Student Visa Guidance",
    description:
      "Clear guidance on Certificate of Eligibility (COE) requirements, financial documentation, and student visa procedures after receiving admission.",
    icon: Stamp,
  },
  {
    title: "Pre-Departure & Academic Preparation",
    description:
      "Practical support before departure, including accommodation guidance, travel preparation, and orientation for academic life in Japan.",
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
                className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-2xl hover:border-blue-400 hover:-translate-y-2 transition-all"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 mb-4">
                  <Icon className="text-green-700" size={24} />
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
