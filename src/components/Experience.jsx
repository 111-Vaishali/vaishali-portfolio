import { motion } from "framer-motion";
import SectionTag from "./SectionTag";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 md:px-10 py-28">
      <SectionTag index="04" label="experience log" />

      <div className="relative pl-8" style={{ borderLeft: "1px solid var(--color-line)" }}>
        {experience.map((e, idx) => (
          <motion.div
            key={e.role + e.period}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative mb-12 last:mb-0"
          >
            <span
              className="absolute -left-[calc(2rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: "var(--color-signal)" }}
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-lg" style={{ color: "var(--color-bone)" }}>
                {e.role}
              </h3>
              <span className="text-sm" style={{ color: "var(--color-teal)" }}>
                {e.org}
              </span>
              <span className="tag-label ml-auto" style={{ color: "var(--color-fog)" }}>
                {e.period}
              </span>
            </div>
            <p className="tag-label mt-1 mb-3" style={{ color: "var(--color-fog)" }}>
              {e.tag}
            </p>
            <ul className="space-y-1.5">
              {e.points.map((pt) => (
                <li
                  key={pt}
                  className="text-sm leading-relaxed flex gap-2"
                  style={{ color: "var(--color-fog)" }}
                >
                  <span style={{ color: "var(--color-signal)" }}>·</span>
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
