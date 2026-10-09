export default function SectionTag({ index, label }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="tag-label">[{index}]</span>
      <span className="tag-label uppercase">{label}</span>
      <span className="h-px flex-1 bg-line" style={{ backgroundColor: "var(--color-line)" }} />
    </div>
  );
}
