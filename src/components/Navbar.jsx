import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#certificates", label: "certificates" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "backdrop-blur-md" : ""
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(15,17,21,0.85)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--color-line)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-sm tracking-tight" style={{ color: "var(--color-bone)" }}>
          <span style={{ color: "var(--color-signal)" }}>&lt;</span>
          VS
          <span style={{ color: "var(--color-signal)" }}>/&gt;</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="tag-label hover:opacity-100 transition-opacity"
              style={{ color: "var(--color-fog)", opacity: 0.9 }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 tag-label px-4 py-2 border rounded-full transition-colors"
          style={{ borderColor: "var(--color-signal)", color: "var(--color-signal)" }}
        >
          say hi →
        </a>

        <button
          className="md:hidden tag-label px-3 py-2 border rounded"
          style={{ borderColor: "var(--color-line)", color: "var(--color-bone)" }}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "close" : "menu"}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ borderTop: "1px solid var(--color-line)" }}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="tag-label pt-4"
              style={{ color: "var(--color-fog)" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
}
