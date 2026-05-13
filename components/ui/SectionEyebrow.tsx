export default function SectionEyebrow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">
      {children}
    </p>
  );
}