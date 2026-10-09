import { profile } from "../data";

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-10 py-8"
      style={{ borderTop: "1px solid var(--color-line)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="tag-label" style={{ color: "var(--color-fog)" }}>
          © {new Date().getFullYear()} {profile.name} · built with React + Tailwind + Framer Motion
        </p>
        <p className="tag-label" style={{ color: "var(--color-fog)" }}>
          {profile.location}
        </p>
      </div>
    </footer>
  );
}
