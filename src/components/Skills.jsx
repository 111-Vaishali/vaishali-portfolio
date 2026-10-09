import { motion } from "framer-motion";
import SectionTag from "./SectionTag";
import { skillGroups } from "../skillLevels";

function Bar({ level, delay }) {
  return (
    <div className="skill-bar-track mt-1.5">
      <motion.div
        className="skill-bar-fill"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 md:px-10 py-28">
      <SectionTag index="02" label="skills detected" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.group}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="glow-card p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display text-lg" style={{ color: "var(--color-bone)" }}>
                {group.group}
              </h3>
              <span className="tag-label" style={{ color: "var(--color-teal)" }}>
                {group.tag}
              </span>
            </div>
            <div className="space-y-4">
              {group.items.map((item, i) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span style={{ color: "var(--color-bone)" }}>{item.name}</span>
                    <span className="font-mono text-xs" style={{ color: "var(--color-signal)" }}>
                      {item.level}%
                    </span>
                  </div>
                  <Bar level={item.level} delay={0.1 + i * 0.06} />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
