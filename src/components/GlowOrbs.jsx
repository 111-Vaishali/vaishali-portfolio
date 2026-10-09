// Soft, slowly-drifting blurred gradient orbs behind the content — adds warmth
// and movement without the flat grid look. Pure CSS animation, cheap to render.
export default function GlowOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }} aria-hidden="true">
      <div
        className="glow-orb"
        style={{
          width: 480,
          height: 480,
          top: "-8%",
          left: "-6%",
          background: "var(--color-signal)",
          animation: "drift-a 22s ease-in-out infinite",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 420,
          height: 420,
          top: "10%",
          right: "-8%",
          background: "var(--color-teal)",
          animation: "drift-b 26s ease-in-out infinite",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 400,
          height: 400,
          bottom: "-4%",
          left: "30%",
          background: "var(--color-violet)",
          animation: "drift-c 30s ease-in-out infinite",
        }}
      />
    </div>
  );
}
