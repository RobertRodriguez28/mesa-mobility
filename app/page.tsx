"use client";
import Header from"../components/Header";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import DisclaimerSection from "@/components/ DisclaimerSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesSection from "../components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import QuizModal from "@/components/QuizModal";
import HeroSection from "@/components/HeroSection";
import { painPoints, quizQuestions } from "@/data/siteContent";
import CTAButton from "../components/CTAButton";
import AnatomyLineArt from "../components/AnatomyLineArt";
import AssessmentSection from "@/components/AssessmentSection";
import MovementDiagramSection from "@/components/MovementDiagramSection";
import WhoItsForSection from "@/components/WhoItsForSection";
import PostureSection from "@/components/PostureSection";
import DigitalProductsSection from "@/components/DigitalProductsSection";
import AngleSection from "@/components/AngleSection";
import React, {  FormEvent, useMemo, useState } from "react";
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
<AngleSection />
<AssessmentSection />
<MovementDiagramSection />
<ServicesSection
  bookingLink={bookingLink}
  scrollToForm={scrollToForm}
  />
<AboutSection />
<WhoItsForSection />
<PostureSection />
 <DigitalProductsSection />
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