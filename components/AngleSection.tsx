import SectionEyebrow from "./ui/SectionEyebrow";

export default function AngleSection() {
  return (
    <section className="border-y border-slate-200 bg-white px-5 py-16">
      <div className="mx-auto max-w-5xl text-center">
        <SectionEyebrow>The angle</SectionEyebrow>

        <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
          This is not bodybuilding coaching. This is how to feel better in your body.
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          If your hips feel jammed, your back feels stiff, your shoulders are rounded,
          or you have no idea what mobility drills actually matter, this gives you a system.
        </p>
      </div>
    </section>
  );
}