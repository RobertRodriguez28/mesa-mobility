"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Video,
  Sparkles,
  Star,
  Menu,
  X,
  ClipboardCheck,
  FileText,
  ShieldCheck,
  Activity,
  BarChart3,
  Camera,
  ScanLine,
  MoveRight,
  UserCheck,
  CircleGauge,
} from "lucide-react";

export default function MesaMobilityLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const bookingLink = "https://calendly.com/robert-28-qbaj/new-meeting";
  const formspreeLink = "https://formspree.io/f/mdabyalg";

  const services = [
    {
      icon: <ClipboardCheck className="h-6 w-6" />,
      eyebrow: "Best first step",
      title: "Mobility Assessment Call",
      price: "$29",
      description:
        "A focused Zoom assessment where we review tight areas, posture, movement patterns, training history, goals, and what type of plan makes sense for you.",
      bullets: ["30–45 min Zoom call", "Movement strategy", "Credited toward coaching"],
      button: "Book assessment",
      href: bookingLink,
    },
    {
      icon: <Video className="h-6 w-6" />,
      eyebrow: "Main coaching offer",
      title: "Custom Mobility Coaching",
      price: "Custom plan",
      description:
        "Personalized mobility, corrective exercise, activation, stretching, and functional movement coaching based on your assessment.",
      bullets: ["Weekly check-ins", "Exercise videos", "Progressions & adjustments"],
      button: "Apply for coaching",
      href: "#contact",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      eyebrow: "Limited Mesa spots",
      title: "In-Person Assisted Stretch",
      price: "Starting at $70",
      description:
        "Premium local assisted stretch sessions for select Mesa-area clients. Mobile table available depending on location and schedule.",
      bullets: ["Mesa area", "Mobile option", "Limited availability"],
      button: "Ask about local sessions",
      href: "#contact",
    },
  ];

  const painPoints = [
    "Tight hips that never seem to loosen up",
    "Lower back stiffness from sitting or training",
    "Shoulders rounded forward from desk work",
    "IT band discomfort tied to weak glutes and poor mechanics",
    "No clue what to stretch, foam roll, or strengthen first",
  ];

  const whoItsFor = [
    "Desk workers who feel stiff after sitting all day",
    "Lifters who feel tight before squats, hinges, or overhead work",
    "Active adults who want better mobility without random YouTube routines",
    "People dealing with recurring hip, back, shoulder, or posture limitations",
    "Beginners who want simple guidance without hardcore fitness culture",
    "Anyone who wants stretching, activation, and corrective exercise in one plan",
  ];

  const testimonials = [
    {
      name: "Leslie M.",
      label: "Desk worker",
      quote:
        "The routine was simple enough to actually follow, and my back and shoulders felt less locked up after the first week.",
    },
    {
      name: "David R.",
      label: "Recreational athlete",
      quote:
        "I liked that it wasn't just random stretching. We worked on hips, glutes, warmups, and how I moved during training.",
    },
    {
      name: "Amanda S.",
      label: "Beginner client",
      quote:
        "I felt comfortable because everything was explained clearly. It felt more like coaching than a generic workout plan.",
    },
  ];

  const digitalProducts = [
    {
      title: "Desk Worker Mobility Reset",
      price: "$19",
      description: "Simple daily mobility for tight hips, rounded shoulders, and low back stiffness.",
    },
    {
      title: "Tight Hips Starter Routine",
      price: "$19",
      description: "A beginner-friendly routine for hip flexors, glutes, hamstrings, and hip rotation.",
    },
    {
      title: "Foam Roll + Stretch Guide",
      price: "$9",
      description: "A quick guide for when to foam roll, what to target, and how to pair it with stretching.",
    },
  ];

  function AnatomyLineArt() {
    return (
      <svg viewBox="0 0 420 520" className="h-full w-full">
        <defs>
          <linearGradient id="bodyLine" x1="0" x2="1">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>
        <circle cx="210" cy="70" r="34" fill="none" stroke="url(#bodyLine)" strokeWidth="4" />
        <path d="M210 104 C208 138 202 168 190 200 C178 232 178 268 194 302" fill="none" stroke="url(#bodyLine)" strokeWidth="4" strokeLinecap="round" />
        <path d="M210 104 C214 140 224 166 240 198 C256 232 256 266 236 302" fill="none" stroke="url(#bodyLine)" strokeWidth="4" strokeLinecap="round" />
        <path d="M166 145 C198 126 228 126 260 145" fill="none" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
        <path d="M162 176 C128 202 106 232 90 272" fill="none" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
        <path d="M258 176 C294 202 318 232 332 272" fill="none" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
        <path d="M194 302 C176 352 160 396 142 470" fill="none" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
        <path d="M236 302 C258 354 276 396 294 470" fill="none" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
        <path d="M170 214 C204 230 236 230 270 214" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
        <path d="M178 252 C206 266 232 266 260 252" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
        <circle cx="162" cy="176" r="8" fill="#e0f2fe" stroke="#0ea5e9" />
        <circle cx="258" cy="176" r="8" fill="#e0f2fe" stroke="#0ea5e9" />
        <circle cx="194" cy="302" r="8" fill="#ccfbf1" stroke="#14b8a6" />
        <circle cx="236" cy="302" r="8" fill="#ccfbf1" stroke="#14b8a6" />
      </svg>
    );
  }

  function MobilityScore() {
    return (
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-600">Mobility score</p>
            <h3 className="mt-2 text-2xl font-black text-slate-950">Assessment snapshot</h3>
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

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f7fb] text-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_34%),radial-gradient(circle_at_80%_15%,rgba(20,184,166,0.14),transparent_30%),linear-gradient(180deg,#f8fafc,#eef4fa)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-teal-400 text-white shadow-lg shadow-sky-200">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-black tracking-tight text-slate-950">Mesa Mobility</p>
              <p className="text-xs text-slate-500">Assessment • Recovery • Movement</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a href="#services" className="hover:text-sky-600">Services</a>
            <a href="#assessment" className="hover:text-sky-600">Assessment</a>
            <a href="#results" className="hover:text-sky-600">Results</a>
            <a href="#contact" className="hover:text-sky-600">Start</a>
          </div>

          <a
            href={bookingLink}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-black text-white transition hover:scale-105 hover:bg-sky-600 md:inline-flex"
          >
            Book assessment
          </a>

          <button
            className="rounded-xl border border-slate-200 bg-white p-2 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
            <div className="grid gap-4 text-sm font-semibold text-slate-600">
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#assessment" onClick={() => setMobileMenuOpen(false)}>Assessment</a>
              <a href="#results" onClick={() => setMobileMenuOpen(false)}>Results</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Start</a>
            </div>
          </div>
        )}
      </header>

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
            <a
              href={bookingLink}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-teal-400 px-7 py-4 font-black text-white shadow-xl shadow-sky-200 transition hover:scale-[1.03]"
            >
              Book a $29 assessment
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#assessment"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 font-bold text-slate-950 shadow-sm transition hover:border-sky-200 hover:text-sky-700"
            >
              See assessment style
            </a>
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
                <p className="mt-4 text-slate-600">
                  A clean system for what to release, stretch, activate, and strengthen.
                </p>

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

      <section className="border-y border-slate-200 bg-white px-5 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">The angle</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            This is not bodybuilding coaching. This is how to feel better in your body.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            If your hips feel jammed, your back feels stiff, your shoulders are rounded, or you have no idea what mobility drills actually matter, this gives you a system.
          </p>
        </div>
      </section>

      <section id="assessment" className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">Assessment dashboard</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              A cleaner way to understand your movement.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The assessment looks at posture, hip mobility, shoulder position, core control, and activation patterns so the plan matches your actual body.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                [ScanLine, "Screen", "Review posture, movement limits, tight areas, and training history."],
                [BarChart3, "Score", "Identify which areas are holding back your mobility and performance."],
                [Activity, "Plan", "Build a simple stretch, activation, and corrective exercise path."],
              ].map(([Icon, title, desc]: any) => (
                <motion.div
                  key={title}
                  whileHover={{ y: -3 }}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky-50 text-sky-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-950">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <MobilityScore />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-600">Movement diagrams</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Stretching is only one piece.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Better mobility usually comes from combining release work, mobility drills, activation, and strength.
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
                className="relative rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-5xl font-black text-slate-100">{num}</p>
                <h3 className="mt-6 text-xl font-black text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
                <div className="mt-6 h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-teal-400" style={{ width: `${45 + index * 15}%` }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">Services</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Start simple. Upgrade if you need coaching.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Begin with a low-cost assessment, then choose whether you want a custom coaching plan, a digital routine, or limited local assisted stretch.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200"
            >
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                {service.icon}
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600">{service.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-black text-slate-950">{service.title}</h3>
              <p className="mt-3 text-3xl font-black text-sky-600">{service.price}</p>
              <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
              <div className="mt-7 grid gap-3">
                {service.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-teal-500" />
                    {bullet}
                  </div>
                ))}
              </div>
              <a
                href={service.href}
                target={service.href.startsWith("http") ? "_blank" : undefined}
                rel={service.href.startsWith("http") ? "noreferrer" : undefined}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-sky-600"
              >
                {service.button}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="for-you" className="border-y border-slate-200 bg-white px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">Who this is for</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              You don’t need to be an athlete. You just need a plan that makes sense.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Most people do not need a complicated fitness program. They need better movement basics, smarter mobility, and a few corrective exercises that actually match their body.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {whoItsFor.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-medium text-slate-700">
                <CheckCircle2 className="mb-3 h-5 w-5 text-teal-500" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-600">Before / after posture visual</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              The goal is not perfect posture. It’s better control.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The plan helps you understand what is tight, what is weak, and what needs better positioning so you can move with more confidence.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
              {[
                ["Before", "Rounded shoulders", "bg-slate-100"],
                ["After", "Better stacked position", "bg-sky-50"],
              ].map(([title, desc, bg], index) => (
                <div key={title} className={`rounded-3xl ${bg} p-5 text-center`}>
                  <div className="mx-auto mb-5 h-48 w-28 rounded-full border-2 border-slate-300 bg-white p-3">
                    <div className={`mx-auto h-10 w-10 rounded-full border-2 ${index === 0 ? "translate-x-3 border-slate-400" : "border-sky-500"}`} />
                    <div className={`mx-auto mt-3 h-24 w-8 rounded-full border-2 ${index === 0 ? "translate-x-2 rotate-6 border-slate-400" : "border-sky-500"}`} />
                  </div>
                  <h3 className="font-black text-slate-950">{title}</h3>
                  <p className="mt-1 text-sm font-medium text-slate-600">{desc}</p>
                </div>
              ))}
              <MoveRight className="h-8 w-8 text-sky-500" />
            </div>
          </div>
        </div>
      </section>

      <section id="digital" className="border-y border-slate-200 bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-600">Low-ticket options</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Not ready for coaching yet?</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Start with a simple routine or guide. These are lightweight options for people who want a basic starting point before booking coaching.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {digitalProducts.map((product) => (
              <article key={product.title} className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm">
                <FileText className="mb-5 h-8 w-8 text-sky-600" />
                <h3 className="text-xl font-black text-slate-950">{product.title}</h3>
                <p className="mt-3 text-3xl font-black text-teal-600">{product.price}</p>
                <p className="mt-3 leading-7 text-slate-600">{product.description}</p>
                <button className="mt-6 w-full rounded-full border border-slate-200 bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-sky-600">
                  Coming soon
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="mx-auto max-w-7xl px-5 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">Client-style proof</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">What clients should feel.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Better movement, less stiffness, more confidence, and a routine that finally makes sense.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article key={testimonial.name} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-6 flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-sky-100 to-teal-100 text-sky-700">
                  <UserCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-black text-slate-950">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.label}</p>
                </div>
              </div>
              <div className="mb-5 flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
              <p className="leading-7 text-slate-700">“{testimonial.quote}”</p>
              <p className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                <Camera className="h-4 w-4" />
                Add real client photo later
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">Coached by Robert</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950">
                Functional mobility without the fitness influencer act.
              </h2>
            </div>
            <div className="space-y-4 leading-8 text-slate-600">
              <p>
                This is built for real people who want to move better, feel less stiff, and understand what their body actually needs. The focus is mobility, activation, corrective exercise, stretching, foam rolling, and practical movement coaching.
              </p>
              <p className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                Not medical care. If you have pain, injury, numbness, or medical concerns, consult a licensed healthcare professional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-5 pb-24">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-gradient-to-br from-sky-50 via-white to-teal-50 p-8 md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">Start here</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950">Tell me what feels tight.</h2>
              <p className="mt-5 leading-7 text-slate-600">
                Fill this out and I’ll help point you toward the best starting option: assessment, custom coaching, digital routine, or limited Mesa-area assisted stretch.
              </p>
              <div className="mt-8 grid gap-3 text-sm font-semibold text-slate-700">
                <p className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-teal-500" />No gym required for online coaching</p>
                <p className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-teal-500" />Good for beginners and active people</p>
                <p className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-teal-500" />Mesa in-person spots are limited</p>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <form action={formspreeLink} method="POST" className="grid gap-4">
                <input type="hidden" name="_subject" value="New Mesa Mobility Lead" />

                <input name="name" className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:bg-white" placeholder="Name" required />

                <input name="email" className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:bg-white" placeholder="Email" type="email" required />

                <select name="interest" className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-950 outline-none transition focus:border-sky-400 focus:bg-white" required defaultValue="">
                  <option value="" disabled>What are you interested in?</option>
                  <option value="$29 Mobility Assessment">$29 Mobility Assessment</option>
                  <option value="Custom mobility coaching">Custom mobility coaching</option>
                  <option value="Digital stretch/mobility routine">Digital stretch/mobility routine</option>
                  <option value="Mobile assisted stretch near Mesa">Mobile assisted stretch near Mesa</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>

                <textarea name="message" className="min-h-32 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:bg-white" placeholder="What feels tight? What are your goals? Any injuries or limitations I should know about?" required />

                <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-teal-400 px-7 py-4 font-black text-white shadow-xl shadow-sky-100 transition hover:scale-[1.02]">
                  Request recommendation
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </button>
              </form>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                By submitting this form, you are requesting a follow-up about Mesa Mobility services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-10 text-center text-sm text-slate-500">
        <p>© 2026 Mesa Mobility. Online mobility coaching and limited mobile assisted stretch near Mesa, Arizona.</p>
        <p className="mt-2">Not medical care. For pain, injury, or medical concerns, consult a licensed healthcare professional.</p>
      </footer>
    </main>
  );
}