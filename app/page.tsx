"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Video,
  Dumbbell,
  Sparkles,
  Star,
  Menu,
  X,
  ClipboardCheck,
  FileText,
  ShieldCheck,
} from "lucide-react";

export default function MesaMobilityLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const bookingLink = "https://calendly.com/YOUR-CALENDLY-LINK/30min";

  const services = [
    {
      icon: <ClipboardCheck className="h-6 w-6" />,
      eyebrow: "Best first step",
      title: "Mobility Assessment Call",
      price: "$29",
      description:
        "A focused Zoom assessment where we talk through your tight areas, training history, posture, goals, and what kind of plan makes sense for you.",
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

  const painPoints = [
    "Tight hips that never seem to loosen up",
    "Lower back stiffness from sitting or training",
    "Shoulders rounded forward from desk work",
    "IT band discomfort tied to weak glutes and poor mechanics",
    "No clue what to stretch, foam roll, or strengthen first",
    "Wanting to move better without needing a full gym setup",
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

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.35),transparent_34%),radial-gradient(circle_at_80%_15%,rgba(168,85,247,0.32),transparent_32%),radial-gradient(circle_at_45%_90%,rgba(34,197,94,0.2),transparent_34%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-emerald-300 text-black shadow-lg shadow-cyan-500/20">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-black tracking-tight">Mesa Mobility</p>
              <p className="text-xs text-slate-400">Stretch • Recovery • Movement</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#for-you" className="hover:text-white">Who it’s for</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#contact" className="hover:text-white">Start</a>
          </div>

          <a
            href={bookingLink}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-black text-black transition hover:scale-105 hover:bg-cyan-200 md:inline-flex"
          >
            Book assessment
          </a>

          <button
            className="rounded-xl border border-white/10 p-2 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-[#050816] px-5 py-4 md:hidden">
            <div className="grid gap-4 text-sm text-slate-300">
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#for-you" onClick={() => setMobileMenuOpen(false)}>Who it’s for</a>
              <a href="#how" onClick={() => setMobileMenuOpen(false)}>How it works</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Start</a>
            </div>
          </div>
        )}
      </header>

      <section id="top" className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 md:grid-cols-[1.05fr_0.95fr] md:pb-28 md:pt-24">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
            Online mobility coaching + limited Mesa assisted stretch
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Stop feeling stiff, tight, and stuck in your body.
            <span className="mt-3 block bg-gradient-to-r from-cyan-200 via-fuchsia-300 to-emerald-300 bg-clip-text text-transparent">
              Move like you actually train.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Mobility coaching for busy adults, desk workers, and active people who want better flexibility, posture, recovery, and movement quality without random routines or influencer fluff.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={bookingLink}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300 px-7 py-4 font-black text-black shadow-2xl shadow-cyan-500/20 transition hover:scale-[1.03]"
            >
              Book a $29 assessment
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition hover:bg-white/10"
            >
              See options
            </a>
          </div>

          <p className="mt-4 text-sm text-slate-400">
            Assessment fee can be credited toward coaching if you enroll.
          </p>

          <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3 text-center">
            {[
              ["$29", "Assessment"],
              ["Online", "Coaching first"],
              ["Mesa", "Limited local"],
            ].map(([big, small]) => (
              <div key={big} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <p className="text-xl font-black text-white">{big}</p>
                <p className="text-xs text-slate-400">{small}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-emerald-400/20 blur-2xl" />
          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#070b1f]/90 p-6">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">Mobility Reset</p>
              <h2 className="text-3xl font-black">Built for real people with real tightness.</h2>
              <p className="mt-4 text-slate-300">
                No random stretching. No influencer nonsense. Just a clear plan for what to release, stretch, activate, and strengthen.
              </p>

              <div className="mt-7 grid gap-3">
                {painPoints.slice(0, 5).map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                    <p className="text-sm text-slate-200">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.035] px-5 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-fuchsia-200">The angle</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            This is not bodybuilding coaching. This is how to feel better in your body.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            If your hips feel jammed, your back feels stiff, your shoulders are rounded, or you have no idea what mobility drills actually matter, this gives you a system. Stretch what needs length, activate what is asleep, and strengthen the patterns that keep you moving better.
          </p>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">Services</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Start simple. Upgrade if you need coaching.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
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
              className="group flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/[0.065] p-7 transition duration-300 hover:-translate-y-2 hover:bg-white/[0.095]"
            >
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-emerald-300/20 text-cyan-200 ring-1 ring-white/10">
                {service.icon}
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-200">{service.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-black">{service.title}</h3>
              <p className="mt-3 text-3xl font-black text-cyan-200">{service.price}</p>
              <p className="mt-4 leading-7 text-slate-300">{service.description}</p>
              <div className="mt-7 grid gap-3">
                {service.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                    {bullet}
                  </div>
                ))}
              </div>
              <a
                href={service.href}
                target={service.href.startsWith("http") ? "_blank" : undefined}
                rel={service.href.startsWith("http") ? "noreferrer" : undefined}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-black transition hover:bg-white hover:text-black"
              >
                {service.button}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="for-you" className="border-y border-white/10 bg-white/[0.035] px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-fuchsia-200">Who this is for</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">You don’t need to be an athlete. You just need a plan that makes sense.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Most people do not need a complicated fitness program. They need better movement basics, smarter mobility, and a few corrective exercises that actually match their body.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {whoItsFor.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-slate-200">
                <CheckCircle2 className="mb-3 h-5 w-5 text-emerald-300" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="digital" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-200">Low-ticket options</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Not ready for coaching yet?</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Start with a simple routine or guide. These are lightweight options for people who want a basic starting point before booking coaching.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {digitalProducts.map((product) => (
            <article key={product.title} className="rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-6">
              <FileText className="mb-5 h-8 w-8 text-cyan-200" />
              <h3 className="text-xl font-black">{product.title}</h3>
              <p className="mt-3 text-3xl font-black text-emerald-200">{product.price}</p>
              <p className="mt-3 leading-7 text-slate-300">{product.description}</p>
              <button className="mt-6 w-full rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-black text-white transition hover:bg-white hover:text-black">
                Coming soon
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="bg-gradient-to-b from-transparent via-cyan-950/20 to-transparent px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-200">How it works</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Simple process. Clear next steps.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                You do not need a perfect setup. Most clients can start from home with a mat, a foam roller, a band, and a little space.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                ["01", "Book a $29 assessment", "We talk through your goals, tight areas, training background, habits, and what you have access to."],
                ["02", "Run a movement screen", "We look at simple patterns like posture, hip movement, shoulder mobility, core control, and basic stability."],
                ["03", "Get your recommendation", "You’ll leave with a clearer idea of what to stretch, activate, strengthen, and prioritize."],
                ["04", "Choose your next step", "Move into custom coaching, grab a simple routine, or ask about limited Mesa-area assisted stretch."],
              ].map(([num, title, desc]) => (
                <div key={num} className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5 sm:grid-cols-[70px_1fr]">
                  <div className="text-3xl font-black text-cyan-200">{num}</div>
                  <div>
                    <h3 className="text-xl font-black">{title}</h3>
                    <p className="mt-2 text-slate-300">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-fuchsia-200">Proof style</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">What clients should feel.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Better movement, less stiffness, more confidence, and a routine that finally makes sense.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-7">
              <div className="mb-5 flex gap-1 text-yellow-300">
                {[...Array(5)].map((_, index) => <Star key={index} className="h-5 w-5 fill-current" />)}
              </div>
              <p className="leading-7 text-slate-200">“{testimonial.quote}”</p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="font-black">{testimonial.name}</p>
                <p className="text-sm text-slate-400">{testimonial.label}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.04] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">Coached by Robert</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight">Functional mobility without the fitness influencer act.</h2>
            </div>
            <div className="space-y-4 leading-8 text-slate-300">
              <p>
                This is built for real people who want to move better, feel less stiff, and understand what their body actually needs. The focus is mobility, activation, corrective exercise, stretching, foam rolling, and practical movement coaching.
              </p>
              <p className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-slate-300">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                Not medical care. If you have pain, injury, numbness, or medical concerns, consult a licensed healthcare professional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-5 pb-24">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-gradient-to-br from-cyan-300/15 via-purple-400/15 to-emerald-300/15 p-8 md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-200">Start here</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight">Tell me what feels tight.</h2>
              <p className="mt-5 leading-7 text-slate-300">
                Fill this out and I’ll help point you toward the best starting option: assessment, custom coaching, digital routine, or limited Mesa-area assisted stretch.
              </p>
              <div className="mt-8 grid gap-3 text-sm text-slate-200">
                <p className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-300" />No gym required for online coaching</p>
                <p className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-300" />Good for beginners and active people</p>
                <p className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-emerald-300" />Mesa in-person spots are limited</p>
              </div>
            </div>

            <div className="p-8 md:p-10">
              {submitted ? (
                <div className="rounded-3xl border border-emerald-300/30 bg-emerald-300/10 p-7">
                  <h3 className="text-2xl font-black text-emerald-200">Request received.</h3>
                  <p className="mt-3 text-slate-300">This demo form is working visually. When we make the app live, we’ll connect it to email, a database, or a booking system.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <input className="rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300" placeholder="Name" required />
                  <input className="rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300" placeholder="Email" type="email" required />
                  <select className="rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4 text-white outline-none transition focus:border-cyan-300" required>
                    <option className="bg-slate-950">What are you interested in?</option>
                    <option className="bg-slate-950">$29 Mobility Assessment</option>
                    <option className="bg-slate-950">Custom mobility coaching</option>
                    <option className="bg-slate-950">Digital stretch/mobility routine</option>
                    <option className="bg-slate-950">Mobile assisted stretch near Mesa</option>
                    <option className="bg-slate-950">Not sure yet</option>
                  </select>
                  <textarea className="min-h-32 rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300" placeholder="What feels tight? What are your goals? Any injuries or limitations I should know about?" required />
                  <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300 px-7 py-4 font-black text-black transition hover:scale-[1.02]">
                    Request recommendation
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-slate-400">
        <p>© 2026 Mesa Mobility. Online mobility coaching and limited mobile assisted stretch near Mesa, Arizona.</p>
        <p className="mt-2">Not medical care. For pain, injury, or medical concerns, consult a licensed healthcare professional.</p>
      </footer>
    </main>
  );
}
