"use client";

import { motion } from "framer-motion";
import SectionEyebrow from "../components/ui/SectionEyebrow";

export default function MovementDiagramSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>Movement diagrams</SectionEyebrow>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Stretching is only one piece.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Better mobility usually comes from combining release work, mobility
            drills, activation, and strength.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {[
            ["Release", "Foam roll or soft tissue prep", "01"],
            ["Mobilize", "Open restricted ranges", "02"],
            ["Activate", "Wake up weak patterns", "03"],
            ["Strengthen", "Lock in better movement", "04"],
          ].map(([title, desc, num], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200"
            >
              <p className="text-5xl font-black text-slate-100">{num}</p>
              <h3 className="mt-6 text-xl font-black text-slate-950">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>

              <div className="mt-6 h-2 rounded-full bg-slate-100">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-teal-400"
                  style={{ width: `${45 + index * 15}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}