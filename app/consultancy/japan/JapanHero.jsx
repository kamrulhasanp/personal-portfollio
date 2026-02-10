import ButtonWithDesign from "@/components/common/ButtonWithDesign";
import Image from "next/image";

export default function JapanHero() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">

                {/* Left Content */}
                <div>
                    <p className="text-sm text-red-600 font-medium mb-2">
                        🎓 Study in Japan
                    </p>
                    <h1 className="text-4xl text-gray-700 md:text-5xl font-bold leading-tight">
                        Japan Consultancy Services for Higher Study
                    </h1>

                    <p className="mt-5 text-gray-600 text-lg">
                        We guide students through Japan’s visa process, university applications,
                        and documentation with trusted local support.
                    </p>

                    <div className="mt-8">
                        <ButtonWithDesign text="Get Free Consultation" />
                    </div>

                    <div className="mt-6 text-sm text-gray-500 space-y-1">
                        <p>✔ Transparent process</p>
                        <p>✔ Trusted Japan consultants</p>
                        <p>✔ End-to-end support</p>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative w-full h-[350px] md:h-[420px]">
                    <Image
                        src="/images/study_in_japan.png"
                        alt="Study in Japan consultancy for international students"
                        fill
                        className="object-cover rounded-xl"
                        priority
                    />
                </div>

            </div>
        </section>
    );
}
