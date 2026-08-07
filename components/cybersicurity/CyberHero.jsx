import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Globe2,
  GraduationCap,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Student Friendly",
    description: "Learn at your own pace",
    icon: GraduationCap,
  },
  {
    title: "Practical Knowledge",
    description: "Real-world examples",
    icon: ShieldCheck,
  },
  {
    title: "Regularly Updated",
    description: "Fresh content and news",
    icon: RefreshCw,
  },
  {
    title: "Global Perspective",
    description: "For a safer digital world",
    icon: Globe2,
  },
];

export default function CyberHero() {
  return (
    <section className="relative overflow-hidden border-b border-cyan-400/10">
      <div className="cyber-container py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              <ShieldCheck size={17} />
              Cybersecurity Learning Hub
            </div>

            <h1 className="max-w-xl text-4xl font-bold leading-tight md:text-6xl">
              Learn. Secure.{" "}
              <span className="cyber-gradient-text">Stay Ahead.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
              Discover cybersecurity concepts, practical defensive techniques,
              security tools, and the latest cybersecurity news explained in
              simple language.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#topics"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                <BookOpen size={19} />
                Start Learning
                <ArrowRight size={18} />
              </Link>

              <Link
                href="#latest-news"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-slate-900/40 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Latest News
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-8 rounded-full bg-cyan-400/20 blur-3xl" />

            <Image
              src="/images/cybersecurity/hero-security.webp"
              alt="Cybersecurity shield protecting connected devices"
              width={700}
              height={550}
              priority
              className="relative h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="mt-14 grid gap-5 border-t border-cyan-400/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="flex items-center gap-4">
              <Icon className="shrink-0 text-cyan-400" size={30} />

              <div>
                <h2 className="font-semibold">{title}</h2>
                <p className="text-sm text-slate-400">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}