import { motion } from "framer-motion";
import SectionTag from "./SectionTag";
import { certificates } from "../data";

export default function Certificates() {
  return (
    <section id="certificates" className="max-w-6xl mx-auto px-6 md:px-10 py-28">
      <SectionTag index="05" label="certificates" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, idx) => (
          <motion.a
            key={cert.title}
            href={cert.image}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="glow-card block overflow-hidden group"
          >
            <div className="relative h-40 overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, var(--color-paper) 100%)",
                }}
              />
            </div>

            <div className="p-5">
              <h3 className="font-display text-base leading-snug" style={{ color: "var(--color-bone)" }}>
                {cert.title}
              </h3>
              <p className="tag-label mt-1.5" style={{ color: "var(--color-teal)" }}>
                {cert.issuer} · {cert.date}
              </p>
              <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--color-fog)" }}>
                {cert.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
