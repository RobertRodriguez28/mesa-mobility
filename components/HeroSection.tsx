"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  bookingLink: string;
  setQuizOpen: (value: boolean) => void;
  painPoints: string[];
  AnatomyLineArt: () => React.ReactNode;
  CTAButton: (props: {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    dark?: boolean;
  }) => React.ReactNode;
}

export default function HeroSection({
  bookingLink,
  setQuizOpen,
  painPoints,
  AnatomyLineArt,
  CTAButton,
}: HeroSectionProps) {
  return (
    <section id="top" className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 md:grid-cols-[1.03fr_0.97fr] md:pt-24">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-bold text-sky-700 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-teal-400" />
          Online mobility coaching + limited Mesa assisted stretch
        </div>

        <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
          Stop guessing what your body needs.
          <span className="mt-3 block bg-gradient-to-r from-sky-500 via-blue-600 to-teal-500 bg-clip-text text-transparent">
            Get assessed. Move better.
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
          Mobility coaching for busy adults, desk workers, and active people who want better flexibility, posture, recovery, and movement quality without random routines or influencer fluff.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <CTAButton href={bookingLink}>Book a $29 assessment</CTAButton>
          <CTAButton dark onClick={() => setQuizOpen(true)}>Take the quiz</CTAButton>
        </div>

        <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3 text-center">
          {[
            ["$29", "Assessment"],
            ["Online", "Coaching first"],
            ["Mesa", "Limited local"],
          ].map(([big, small]) => (
            <div key={big} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xl font-black text-slate-950">{big}</p>
              <p className="text-xs font-semibold text-slate-500">{small}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
        <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-sky-200/70 via-white to-teal-100/70 blur-2xl" />
        <div className="relative rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[1.5rem] bg-slate-50 p-5">
              <AnatomyLineArt />
            </div>

            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-sky-600">Clinical-style screen</p>
              <h2 className="text-3xl font-black text-slate-950">Built for real people with real tightness.</h2>
              <p className="mt-4 text-slate-600">A clean system for what to release, stretch, activate, and strengthen.</p>

              <div className="mt-6 grid gap-3">
                {painPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                    <p className="text-sm font-medium text-slate-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}