import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TopicCard({
  title,
  description,
  articleCount,
  href,
  icon: Icon,
  featured = false,
}) {
  return (
    <article
      className={`cyber-card cyber-card-hover flex h-full flex-col p-6 text-center ${
        featured ? "border-cyan-400/80" : ""
      }`}
    >
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600/20">
        <Icon className="text-cyan-400" size={28} />
      </div>

      <h3 className="mt-5 text-lg font-semibold">{title}</h3>

      <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
        {description}
      </p>

      <span className="mx-auto mt-5 rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
        {articleCount} articles
      </span>

      <Link
        href={href}
        className="mt-5 inline-flex items-center justify-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300"
      >
        Explore
        <ArrowRight size={16} />
      </Link>
    </article>
  );
}