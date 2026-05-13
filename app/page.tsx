"use client";
import Header from"../components/Header";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import DisclaimerSection from "../components/ DisclaimerSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import QuizModal from "@/components/QuizModal";
import HeroSection from "@/components/HeroSection";
import { painPoints, whoItsFor, digitalProducts, quizQuestions } from "@/data/siteContent";
import CTAButton from "./components/CTAButton";
import SectionEyebrow from "./components/ui/SectionEyebrow";
import AnatomyLineArt from "./components/AnatomyLineArt";
import MobilityScore from "./components/MobilityScore";
import React, { ElementType, FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Camera,
  CheckCircle2,
  CircleGauge,
  ClipboardCheck,
  FileText,
  HeartPulse,
  MapPin,
  Menu,
  MoveRight,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Star,
  UserCheck,
  Video,
  X,
} from "lucide-react";

export default function MesaMobilityLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [activeFormType, setActiveFormType] = useState("General mobility inquiry");

  const bookingLink = "https://calendly.com/robert-28-qbaj/new-meeting";
  const formspreeLink = "https://formspree.io/f/mdabyalg";

  // Replace these later with real Stripe payment links.
  const stripeAssessmentLink = "#";
  const stripeDeskWorkerGuideLink = "#";
  const stripeHipRoutineLink = "#";
  const stripeFoamRollGuideLink = "#";

  const recommendedPath = useMemo(() => {
    const mainGoal = quizAnswers.goal;
    const intensity = quizAnswers.intensity;

    if (mainGoal === "local") return "Ask about local assisted stretch";
    if (mainGoal === "custom") return "Apply for custom mobility coaching";
    if (intensity === "high") return "Book a $29 mobility assessment";
    return "Start with a digital routine or assessment";
  }, [quizAnswers]);

  const services = [
    {
      icon: ClipboardCheck,
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
      icon: Video,
      eyebrow: "Main coaching offer",
      title: "Custom Mobility Coaching",
      price: "Custom plan",
      description:
        "Personalized mobility, corrective exercise, activation, stretching, and functional movement coaching based on your assessment.",
      bullets: ["Weekly check-ins", "Exercise videos", "Progressions & adjustments"],
      button: "Apply for coaching",
      href: "#coaching-application",
    },
    {
      icon: MapPin,
      eyebrow: "Limited Mesa spots",
      title: "In-Person Assisted Stretch",
      price: "From $70",
      description:
        "Premium local assisted stretch sessions for select Mesa-area clients. Mobile table available depending on location and schedule.",
      bullets: ["Mesa area", "Mobile option", "Limited availability"],
      button: "Ask about local sessions",
      href: "#local-stretch",
    },
  ];

  

  function updateQuizAnswer(key: string, value: string) {
    setQuizAnswers((prev) => ({ ...prev, [key]: value }));

    if (quizStep < quizQuestions.length - 1) {
      setQuizStep((prev) => prev + 1);
    }
  }

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(formspreeLink, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  }

  function scrollToForm(formType: string) {
    setActiveFormType(formType);
    setFormStatus("idle");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  // function AnatomyLineArt() {
  //   return (
  //     <svg viewBox="0 0 420 520" className="h-full w-full">
  //       <defs>
  //         <linearGradient id="bodyLine" x1="0" x2="1">
  //           <stop offset="0%" stopColor="#0ea5e9" />
  //           <stop offset="100%" stopColor="#14b8a6" />
  //         </linearGradient>
  //       </defs>
  //       <circle cx="210" cy="70" r="34" fill="none" stroke="url(#bodyLine)" strokeWidth="4" />
  //       <path d="M210 104 C208 138 202 168 190 200 C178 232 178 268 194 302" fill="none" stroke="url(#bodyLine)" strokeWidth="4" strokeLinecap="round" />
  //       <path d="M210 104 C214 140 224 166 240 198 C256 232 256 266 236 302" fill="none" stroke="url(#bodyLine)" strokeWidth="4" strokeLinecap="round" />
  //       <path d="M166 145 C198 126 228 126 260 145" fill="none" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
  //       <path d="M162 176 C128 202 106 232 90 272" fill="none" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
  //       <path d="M258 176 C294 202 318 232 332 272" fill="none" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
  //       <path d="M194 302 C176 352 160 396 142 470" fill="none" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
  //       <path d="M236 302 C258 354 276 396 294 470" fill="none" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
  //       <circle cx="162" cy="176" r="8" fill="#e0f2fe" stroke="#0ea5e9" />
  //       <circle cx="258" cy="176" r="8" fill="#e0f2fe" stroke="#0ea5e9" />
  //       <circle cx="194" cy="302" r="8" fill="#ccfbf1" stroke="#14b8a6" />
  //       <circle cx="236" cy="302" r="8" fill="#ccfbf1" stroke="#14b8a6" />
  //     </svg>
  //   );
  // }

  // function MobilityScore() {
  //   return (
  //     <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
  //       <div className="mb-5 flex items-center justify-between">
  //         <div>
  //           <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-600">Mobility score</p>
  //           <h3 className="mt-2 text-2xl font-black text-slate-950">Assessment snapshot</h3>
  //         </div>
  //         <CircleGauge className="h-8 w-8 text-sky-500" />
  //       </div>

  //       <div className="grid gap-5 sm:grid-cols-[150px_1fr] sm:items-center">
  //         <div className="relative grid h-36 w-36 place-items-center rounded-full bg-[conic-gradient(#0ea5e9_0deg,#14b8a6_248deg,#e2e8f0_248deg,#e2e8f0_360deg)]">
  //           <div className="grid h-28 w-28 place-items-center rounded-full bg-white">
  //             <div className="text-center">
  //               <p className="text-4xl font-black text-slate-950">69</p>
  //               <p className="text-xs font-bold text-slate-500">baseline</p>
  //             </div>
  //           </div>
  //         </div>

  //         <div className="grid gap-4">
  //           {[
  //             ["Hip mobility", "72%"],
  //             ["Shoulder position", "64%"],
  //             ["Core control", "68%"],
  //             ["Glute activation", "58%"],
  //           ].map(([label, value]) => (
  //             <div key={label}>
  //               <div className="mb-1 flex justify-between text-sm font-bold text-slate-700">
  //                 <span>{label}</span>
  //                 <span>{value}</span>
  //               </div>
  //               <div className="h-2 rounded-full bg-slate-100">
  //                 <div className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-teal-400" style={{ width: value }} />
  //               </div>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // function CTAButton({
  //   children,
  //   onClick,
  //   href,
  //   dark = false,
  // }: {
  //   children: React.ReactNode;
  //   onClick?: () => void;
  //   href?: string;
  //   dark?: boolean;
  // }) {
  //   const classes = dark
  //     ? "group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-xl hover:shadow-sky-100"
  //     : "group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-teal-400 px-6 py-3 text-sm font-black text-white shadow-xl shadow-sky-100 transition hover:-translate-y-0.5 hover:scale-[1.02]";

  //   if (href) {
  //     return (
  //       <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className={classes}>
  //         {children}
  //         <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
  //       </a>
  //     );
  //   }

  //   return (
  //     <button onClick={onClick} className={classes}>
  //       {children}
  //       <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
  //     </button>
  //   );
  // }

  // function SectionEyebrow({ children }: { children: React.ReactNode }) {
  //   return <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">{children}</p>;
  // }

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
      <motion.div whileHover={{ y: -3 }} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-xl hover:shadow-slate-200">
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

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f7fb] text-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_34%),radial-gradient(circle_at_80%_15%,rgba(20,184,166,0.14),transparent_30%),linear-gradient(180deg,#f8fafc,#eef4fa)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />
<QuizModal
  quizOpen={quizOpen}
  setQuizOpen={setQuizOpen}
  quizStep={quizStep}
  setQuizStep={setQuizStep}
  quizQuestions={quizQuestions}
  quizAnswers={quizAnswers}
  setQuizAnswers={setQuizAnswers}
  updateQuizAnswer={updateQuizAnswer}
  recommendedPath={recommendedPath}
  bookingLink={bookingLink}
  scrollToForm={scrollToForm}
/>
      

      <Header
  mobileMenuOpen={mobileMenuOpen}
  setMobileMenuOpen={setMobileMenuOpen}
  bookingLink={bookingLink}
/>

     <HeroSection
  bookingLink={bookingLink}
  setQuizOpen={setQuizOpen}
  painPoints={painPoints}
  AnatomyLineArt={AnatomyLineArt}
  CTAButton={CTAButton}
/>

      <section className="border-y border-slate-200 bg-white px-5 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <SectionEyebrow>The angle</SectionEyebrow>
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
            <SectionEyebrow>Assessment dashboard</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              A cleaner way to understand your movement.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The assessment looks at posture, hip mobility, shoulder position, core control, and activation patterns so the plan matches your actual body.
            </p>

            <div className="mt-8 grid gap-4">
              <IconCard Icon={ScanLine} title="Screen" desc="Review posture, movement limits, tight areas, and training history." />
              <IconCard Icon={BarChart3} title="Score" desc="Identify which areas are holding back your mobility and performance." />
              <IconCard Icon={Activity} title="Plan" desc="Build a simple stretch, activation, and corrective exercise path." />
            </div>
          </div>

          <MobilityScore />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Movement diagrams</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Stretching is only one piece.</h2>
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
              <motion.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="relative rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200">
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
<ServicesSection
  bookingLink={bookingLink}
  scrollToForm={scrollToForm}
  
/>
<AboutSection />
      <section id="for-you" className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionEyebrow>Who this is for</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              You don’t need to be an athlete. You just need a plan that makes sense.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Most people do not need a complicated fitness program. They need better movement basics, smarter mobility, and a few corrective exercises that actually match their body.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {whoItsFor.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 font-medium text-slate-700 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200">
                <CheckCircle2 className="mb-3 h-5 w-5 text-teal-500" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionEyebrow>Before / after posture visual</SectionEyebrow>
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

      <section id="digital" className="border-b border-slate-200 bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Low-ticket options</SectionEyebrow>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Not ready for coaching yet?</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Start with a simple routine or guide. These are lightweight options for people who want a basic starting point before booking coaching.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {digitalProducts.map((product) => (
              <article key={product.title} className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200">
                <FileText className="mb-5 h-8 w-8 text-sky-600" />
                <h3 className="text-xl font-black text-slate-950">{product.title}</h3>
                <p className="mt-3 text-3xl font-black text-teal-600">{product.price}</p>
                <p className="mt-3 leading-7 text-slate-600">{product.description}</p>
                <a href={product.href} className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-sky-600">
                  {product.href === "#" ? "Stripe link coming soon" : "Buy now"}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
<TestimonialsSection />
<DisclaimerSection />
<ContactSection
  bookingLink={bookingLink}
  formStatus={formStatus}
  activeFormType={activeFormType}
  quizAnswers={quizAnswers}
  handleFormSubmit={handleFormSubmit}
  setFormStatus={setFormStatus}
/>
<Footer />
      
    </main>
  );
}