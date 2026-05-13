"use client";

import { motion } from "framer-motion";
import { UserCheck } from "lucide-react";
import SectionEyebrow from "../components/ui/SectionEyebrow";

const whoItsFor = [
  "Desk workers with tight hips and rounded shoulders",
  "Active adults wanting better recovery and movement",
  "Lifters with mobility restrictions affecting performance",
  "People returning to exercise after inactivity",
  "Golfers, runners, and combat sport athletes",
  "Anyone tired of random stretching routines",
];

export default function WhoItsForSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionEyebrow>Who this is for</SectionEyebrow>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Built for normal people who feel stiff, tight, and beat up.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            You do not need to be athletic or flexible already. Most clients
            simply want to move better, recover faster, and stop feeling locked
            up all day.
          </p>
        </div>

        <div className="grid gap-4">
          {whoItsFor.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky-50 text-sky-600">
                <UserCheck className="h-5 w-5" />
              </div>

              <p className="font-semibold leading-7 text-slate-700">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}