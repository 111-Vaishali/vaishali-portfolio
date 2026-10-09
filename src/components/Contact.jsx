import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import SectionTag from "./SectionTag";
import { profile } from "../data";

function GithubMark({ size = 15, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.82 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.42.36.78 1.07.78 2.15 0 1.56-.01 2.81-.01 3.19 0 .3.21.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinMark({ size = 15, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 md:px-10 py-28">
      <SectionTag index="06" label="contact" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="glow-card bracket-frame p-10 md:p-14 text-center"
      >
        <h2
          className="font-display font-medium leading-tight"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "var(--color-bone)" }}
        >
          Let's build something
          <br />
          worth shipping.
        </h2>
        <p className="mt-4 max-w-md mx-auto" style={{ color: "var(--color-fog)" }}>
          Open to AI/ML and software development internships. Reach out — I reply fast.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "var(--color-signal)", color: "var(--color-ink)" }}
          >
            <Mail size={16} />
            {profile.email}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 tag-label transition-colors hover:opacity-80"
            style={{ color: "var(--color-fog)" }}
          >
            <GithubMark size={15} /> github
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 tag-label transition-colors hover:opacity-80"
            style={{ color: "var(--color-fog)" }}
          >
            <LinkedinMark size={15} /> linkedin
          </a>
        </div>
      </motion.div>
    </section>
  );
}
