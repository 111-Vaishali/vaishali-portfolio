import { motion } from "framer-motion";
import SectionTag from "./SectionTag";
import { education, extras } from "../data";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 md:px-10 py-28">
      <SectionTag index="01" label="about" />

      <div className="grid md:grid-cols-5 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3"
        >
          <h2
            className="font-display font-medium leading-tight"
            style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)", color: "var(--color-bone)" }}
          >
            I learn by shipping — not by watching tutorials.
          </h2>
          <p className="mt-6 leading-relaxed" style={{ color: "var(--color-fog)" }}>
            I'm a Computer Science (AI & ML) student who splits my time between two things that
            turn out to rhyme more than people expect: training models to find patterns in pixels
            and language, and building frontends that make those patterns legible to real people.
          </p>
          <p className="mt-4 leading-relaxed" style={{ color: "var(--color-fog)" }}>
            Most of what I know, I learned under a deadline — across 10+ hackathons, an
            open-source contribution cycle with GSSoC, and a habit of finishing what I start,
            even the 2am builds. Right now I'm going deeper into computer vision and NLP, while
            keeping my frontend instincts sharp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:col-span-2"
        >
          <div className="glow-card bracket-frame p-6">
            <p className="tag-label mb-3">education.log</p>
            <p className="font-display text-lg" style={{ color: "var(--color-bone)" }}>
              {education.degree}
            </p>
            <p className="mt-1 text-sm" style={{ color: "var(--color-fog)" }}>
              {education.school}
            </p>
            <p className="mt-1 text-sm" style={{ color: "var(--color-teal)" }}>
              {education.period} · {education.note}
            </p>

            <div className="mt-6 pt-6" style={{ borderTop: "1px solid var(--color-line)" }}>
              <p className="tag-label mb-3">notes</p>
              <ul className="space-y-2">
                {extras.map((e) => (
                  <li
                    key={e}
                    className="text-sm leading-relaxed flex gap-2"
                    style={{ color: "var(--color-fog)" }}
                  >
                    <span style={{ color: "var(--color-signal)" }}>·</span>
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
