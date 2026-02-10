import { Star } from "lucide-react";
import ButtonWithDesign from "@/components/common/ButtonWithDesign";

const testimonials = [
  {
    name: "Student A",
    location: "Bangladesh",
    service: "University Admission + I-20 Support",
    text: "They helped me shortlist universities and prepare my application properly. The I-20 process was clear and organized.",
    rating: 5,
  },
  {
    name: "Student B",
    location: "Dhaka",
    service: "F-1 Visa Interview Preparation",
    text: "The mock interview sessions boosted my confidence a lot. I understood how to answer questions clearly and honestly.",
    rating: 5,
  },
  {
    name: "Student C",
    location: "Chittagong",
    service: "SOP & Document Review",
    text: "My SOP and documents improved significantly after their feedback. Communication was fast and the checklist was very helpful.",
    rating: 5,
  },
];

function Stars({ rating = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

export default function USATestimonials() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Students Say
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Feedback from students we supported for USA admissions and the F-1 visa process.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <Stars rating={t.rating} />
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                “{t.text}”
              </p>

              <div className="mt-6 border-t pt-4">
                <p className="font-semibold text-gray-800">{t.name}</p>
                <p className="text-xs text-gray-500">{t.location}</p>
                <p className="mt-2 text-xs text-gray-600">
                  <span className="font-medium">Service:</span> {t.service}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust note + CTA */}
        <div className="mt-10 text-center">
          <p className="text-xs text-gray-500 mb-6">
            *Use real client feedback only. Results vary depending on eligibility and documentation.
          </p>
          <ButtonWithDesign text="Get Free Profile Evaluation" />
        </div>

      </div>
    </section>
  );
}
