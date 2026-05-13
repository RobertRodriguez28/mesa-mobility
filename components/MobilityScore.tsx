import { CircleGauge } from "lucide-react";

export default function MobilityScore() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-600">
            Mobility score
          </p>

          <h3 className="mt-2 text-2xl font-black text-slate-950">
            Assessment snapshot
          </h3>
        </div>

        <CircleGauge className="h-8 w-8 text-sky-500" />
      </div>

      <div className="grid gap-5 sm:grid-cols-[150px_1fr] sm:items-center">
        <div className="relative grid h-36 w-36 place-items-center rounded-full bg-[conic-gradient(#0ea5e9_0deg,#14b8a6_248deg,#e2e8f0_248deg,#e2e8f0_360deg)]">
          <div className="grid h-28 w-28 place-items-center rounded-full bg-white">
            <div className="text-center">
              <p className="text-4xl font-black text-slate-950">69</p>
              <p className="text-xs font-bold text-slate-500">baseline</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {[
            ["Hip mobility", "72%"],
            ["Shoulder position", "64%"],
            ["Core control", "68%"],
            ["Glute activation", "58%"],
          ].map(([label, value]) => (
            <div key={label}>
              <div className="mb-1 flex justify-between text-sm font-bold text-slate-700">
                <span>{label}</span>
                <span>{value}</span>
              </div>

              <div className="h-2 rounded-full bg-slate-100">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-teal-400"
                  style={{ width: value }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}