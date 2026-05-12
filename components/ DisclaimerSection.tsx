import { AlertTriangle, ShieldCheck } from "lucide-react";

export default function DisclaimerSection() {
  const disclaimerItems = [
    "I do not diagnose injuries, medical conditions, arthritis, disc issues, nerve symptoms, or chronic pain conditions.",
    "Mobility, stretching, and corrective exercise may help improve movement quality and reduce stiffness, but they are not a guaranteed cure.",
    "If you have sharp pain, numbness, tingling, swelling, recent trauma, unexplained symptoms, or a diagnosed condition, consult a licensed healthcare professional first.",
    "If something feels outside my scope, I will recommend you speak with a physician, physical therapist, chiropractor, or other qualified provider.",
  ];

  return (
    <section id="disclaimer" className="border-y border-slate-200 bg-white px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-amber-600 shadow-sm">
                <AlertTriangle className="h-6 w-6" />
              </div>

              <h2 className="mt-5 text-3xl font-black text-slate-950">
                What this is — and what it is not.
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                Mesa Mobility is movement coaching, stretching, mobility, and
                corrective exercise support. It is not medical care.
              </p>
            </div>

            <div className="grid gap-4">
              {disclaimerItems.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl bg-white p-4 text-sm font-semibold leading-6 text-slate-700 shadow-sm"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}