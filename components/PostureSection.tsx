"use client";

import { MoveRight } from "lucide-react";
import SectionEyebrow from "../components/ui/SectionEyebrow";

export default function PostureSection() {
  return (
    <section className="border-y border-slate-200 bg-white px-5 py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <SectionEyebrow>Before / after posture visual</SectionEyebrow>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            The goal is not perfect posture. It’s better control.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            The plan helps you understand what is tight, what is weak, and what
            needs better positioning so you can move with more confidence.
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            {[
              ["Before", "Rounded shoulders", "bg-slate-100"],
              ["After", "Better stacked position", "bg-sky-50"],
            ].map(([title, desc, bg], index) => (
              <div
                key={title}
                className={`rounded-3xl ${bg} p-5 text-center`}
              >
                <div className="mx-auto mb-5 h-48 w-28 rounded-full border-2 border-slate-300 bg-white p-3">
                  <div
                    className={`mx-auto h-10 w-10 rounded-full border-2 ${
                      index === 0
                        ? "translate-x-3 border-slate-400"
                        : "border-sky-500"
                    }`}
                  />

                  <div
                    className={`mx-auto mt-3 h-24 w-8 rounded-full border-2 ${
                      index === 0
                        ? "translate-x-2 rotate-6 border-slate-400"
                        : "border-sky-500"
                    }`}
                  />
                </div>

                <h3 className="font-black text-slate-950">{title}</h3>

                <p className="mt-1 text-sm font-medium text-slate-600">
                  {desc}
                </p>
              </div>
            ))}

            <MoveRight className="h-8 w-8 text-sky-500" />
          </div>
        </div>
      </div>
    </section>
  );
}