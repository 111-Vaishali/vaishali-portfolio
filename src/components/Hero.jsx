import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-24 overflow-hidden"
    >
      <div className="absolute inset-0 noise-overlay pointer-events-none z-[1]" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="tag-label mb-6 flex items-center gap-2"
        >
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ backgroundColor: "var(--color-teal)" }}
          />
          system.status → available for internships · {profile.location}
        </motion.div>

        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="font-display font-medium leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.6rem, 8vw, 6.2rem)", color: "var(--color-bone)" }}
          >
            Vaishali
            <br />
            <span className="gradient-text">Sunepwar</span>
          </motion.h1>

          {/* corner brackets framing the name, like a detection box drawing itself */}
          <motion.span
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 hidden sm:block"
            style={{ borderColor: "var(--color-signal)" }}
          />
          <motion.span
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 hidden sm:block"
            style={{ borderColor: "var(--color-signal)" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <span
            className="font-mono text-xs md:text-sm px-3 py-1.5 rounded border"
            style={{
              borderColor: "var(--color-signal)",
              color: "var(--color-signal)",
              backgroundColor: "var(--color-signal-dim)",
            }}
          >
            role: "{profile.roles[roleIndex]}"
          </span>
          <span className="tag-label" style={{ color: "var(--color-fog)" }}>
            confidence: 0.9{9 - (roleIndex % 3)} · updated live
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 max-w-xl text-base md:text-lg"
          style={{ color: "var(--color-fog)" }}
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full font-medium text-sm transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "var(--color-signal)", color: "var(--color-ink)" }}
          >
            View projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full font-medium text-sm border transition-transform hover:-translate-y-0.5"
            style={{ borderColor: "var(--color-line)", color: "var(--color-bone)" }}
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 tag-label z-10"
        style={{ color: "var(--color-fog)" }}
      >
        scroll ↓
      </motion.div>
    </section>
  );
}
