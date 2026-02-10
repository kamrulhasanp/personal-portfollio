import { Star } from "lucide-react";
import ButtonWithDesign from "@/components/common/ButtonWithDesign";

const testimonials = [
  {
    name: "Rafiul Islam",
    location: "Bangladesh",
    service: "University Admission + Visa Support",
    text: "They guided me step-by-step with documents and the application process. I got admitted and the visa steps were smooth and clear.",
    rating: 5,
  },
  {
    name: "Nusrat Jahan",
    location: "Dhaka",
    service: "Language School Enrollment",
    text: "I was confused about requirements, but they gave me a checklist and helped me complete everything on time. Highly recommended.",
    rating: 5,
  },
  {
    name: "Sabbir Ahmed",
    location: "Chittagong",
    service: "Document Review + SOP Guidance",
    text: "My SOP improved a lot after their feedback. The process was transparent and they replied quickly whenever I had questions.",
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

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Real feedback from students we supported in their journey to study in Japan.
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
            *Testimonials are from real clients. Results may vary depending on eligibility and documentation.
          </p>
          <ButtonWithDesign text="Talk to Us" />
        </div>

      </div>
    </section>
  );
}
