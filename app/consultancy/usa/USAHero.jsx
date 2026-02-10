import Image from "next/image";
import ButtonWithDesign from "@/components/common/ButtonWithDesign";

export default function USAHero() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">

                {/* Left Content */}
                <div>
                    <p className="text-sm text-blue-600 font-medium mb-2">
                        🇺🇸 Study in the USA
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                        Study in the USA with Expert Admission & F-1 Visa Guidance
                    </h1>

                    <p className="mt-5 text-gray-600 text-lg">
                        We help students shortlist US universities, prepare strong applications,
                        and confidently navigate the F-1 visa interview process.
                    </p>

                    <div className="mt-8">
                        <ButtonWithDesign text="Get Free Consultation" />
                    </div>

                    <div className="mt-6 text-sm text-gray-500 space-y-2">
                        <p>✔ F-1 visa interview preparation</p>
                        <p>✔ I-20 & SEVIS guidance</p>
                        <p>✔ Honest & transparent support</p>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative w-full h-[350px] md:h-[420px]">
                    <Image
                        src="/images/study_in_usa.png"
                        alt="Study in the USA consultancy and F-1 visa support"
                        fill
                        className="object-cover rounded-xl"
                        priority
                    />
                </div>

            </div>
        </section>
    );
}
