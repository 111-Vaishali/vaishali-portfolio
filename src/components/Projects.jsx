import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionTag from "./SectionTag";
import { projects } from "../data";

function GithubMark({ size = 14, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.82 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.42.36.78 1.07.78 2.15 0 1.56-.01 2.81-.01 3.19 0 .3.21.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 md:px-10 py-28">
      <SectionTag index="03" label="projects" />

      {/* mobile: one list in order. desktop: two columns (row-wise reading order kept) so the taller image card doesn't leave a gap */}
      <div className="flex flex-col gap-6 md:hidden">{projects.map(renderCard)}</div>
      <div className="hidden md:grid md:grid-cols-2 gap-6 items-start">
        {[0, 1].map((col) => (
          <div key={col} className="flex flex-col gap-6">
            {projects.filter((_, i) => i % 2 === col).map((p) => renderCard(p))}
          </div>
        ))}
      </div>
    </section>
  );

  function renderCard(p, idx) {
    return (
          <motion.a
            key={p.id}
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: ((idx ?? 0) % 2) * 0.1 }}
            className="glow-card bracket-frame group block p-6 relative overflow-hidden"
          >
            {p.image && (
              <div
                className="-mx-6 -mt-6 mb-5 aspect-video overflow-hidden"
                style={{ borderBottom: "1px solid var(--color-line)" }}
              >
                <img
                  src={p.image}
                  alt={p.imageAlt || p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: "center" }}
                />
              </div>
            )}
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-display text-xl" style={{ color: "var(--color-bone)" }}>
                    {p.title}
                  </h3>
                  <span
                    className="font-mono text-[0.65rem] px-2 py-0.5 rounded"
                    style={{ color: "var(--color-ink)", backgroundColor: "var(--color-signal)" }}
                  >
                    {p.tag} · {p.confidence}
                  </span>
                </div>
                <p className="text-sm mt-1" style={{ color: "var(--color-teal)" }}>
                  {p.subtitle}
                </p>
              </div>
              <ArrowUpRight
                className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                size={20}
                style={{ color: "var(--color-fog)" }}
              />
            </div>

            <p className="text-sm leading-relaxed" style={{ color: "var(--color-fog)" }}>
              {p.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2 py-1 rounded"
                  style={{ color: "var(--color-fog)", border: "1px solid var(--color-line)" }}
                >
                  {s}
                </span>
              ))}
            </div>

            <div
              className="mt-5 pt-4 flex items-center gap-2 tag-label"
              style={{ borderTop: "1px solid var(--color-line)", color: "var(--color-fog)" }}
            >
              <GithubMark size={14} />
              view source
            </div>
          </motion.a>
    );
  }
}
