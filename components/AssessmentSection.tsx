import { Activity, BarChart3, ScanLine } from "lucide-react";
import { motion } from "framer-motion";
import SectionEyebrow from "../components/ui/SectionEyebrow";
import MobilityScore from "./MobilityScore";
import type { ElementType } from "react";

function IconCard({
  Icon,
  title,
  desc,
}: {
  Icon: ElementType;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-xl hover:shadow-slate-200"
    >
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky-50 text-sky-600">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <h3 className="font-black text-slate-950">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function AssessmentSection() {
  return (
    <section id="assessment" className="mx-auto max-w-7xl px-5 py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionEyebrow>Assessment dashboard</SectionEyebrow>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            A cleaner way to understand your movement.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            The assessment looks at posture, hip mobility, shoulder position,
            core control, and activation patterns so the plan matches your
            actual body.
          </p>

          <div className="mt-8 grid gap-4">
            <IconCard
              Icon={ScanLine}
              title="Screen"
              desc="Review posture, movement limits, tight areas, and training history."
            />
            <IconCard
              Icon={BarChart3}
              title="Score"
              desc="Identify which areas are holding back your mobility and performance."
            />
            <IconCard
              Icon={Activity}
              title="Plan"
              desc="Build a simple stretch, activation, and corrective exercise path."
            />
          </div>
        </div>

        <MobilityScore />
      </div>
    </section>
  );
}