import { ArrowRight, CheckCircle2, HeartPulse } from "lucide-react";
import type { FormEvent } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface ContactSectionProps {
  bookingLink: string;
  formStatus: FormStatus;
  activeFormType: string;
  quizAnswers: Record<string, string>;
  handleFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
  setFormStatus: (status: FormStatus) => void;
}

export default function ContactSection({
  bookingLink,
  formStatus,
  activeFormType,
  quizAnswers,
  handleFormSubmit,
  setFormStatus,
}: ContactSectionProps) {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-24">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200">
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-gradient-to-br from-sky-50 via-white to-teal-50 p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">
              Start here
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950">
              {activeFormType === "Custom Mobility Coaching"
                ? "Apply for custom coaching."
                : activeFormType === "In-Person Assisted Stretch"
                  ? "Ask about local assisted stretch."
                  : "Tell me what feels tight."}
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              {activeFormType === "Custom Mobility Coaching"
                ? "This form is for people ready to explore ongoing coaching. Tell me your goals, what feels restricted, and what type of support you want."
                : activeFormType === "In-Person Assisted Stretch"
                  ? "This form is for local Mesa-area assisted stretch inquiries. Share your location, availability, and what areas feel tight."
                  : "Fill this out and I’ll help point you toward the best starting option: assessment, custom coaching, digital routine, or limited Mesa-area assisted stretch."}
            </p>

            <div className="mt-8 grid gap-3 text-sm font-semibold text-slate-700">
              <p className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-teal-500" />
                No gym required for online coaching
              </p>

              <p className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-teal-500" />
                Good for beginners and active people
              </p>

              <p className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-teal-500" />
                Mesa in-person spots are limited
              </p>
            </div>
          </div>

          <div className="p-8 md:p-10">
            {formStatus === "success" ? (
              <div className="rounded-3xl border border-teal-200 bg-teal-50 p-7">
                <HeartPulse className="h-9 w-9 text-teal-500" />

                <h3 className="mt-4 text-2xl font-black text-slate-950">
                  Request received.
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Thanks — your form went through. I’ll review your details and
                  follow up with the best next step.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={bookingLink}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-teal-400 px-6 py-3 text-sm font-black text-white shadow-xl shadow-sky-100 transition hover:-translate-y-0.5 hover:scale-[1.02]"
                  >
                    Book assessment now
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>

                  <button
                    onClick={() => setFormStatus("idle")}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-xl hover:shadow-sky-100"
                  >
                    Send another form
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="grid gap-4">
                <input type="hidden" name="_subject" value="New Mesa Mobility Lead" />
                <input type="hidden" name="inquiry_type" value={activeFormType} />
                <input type="hidden" name="quiz_goal" value={quizAnswers.goal || ""} />
                <input type="hidden" name="quiz_area" value={quizAnswers.area || ""} />
                <input
                  type="hidden"
                  name="quiz_intensity"
                  value={quizAnswers.intensity || ""}
                />

                <input
                  name="name"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:bg-white"
                  placeholder="Name"
                  required
                />

                <input
                  name="email"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:bg-white"
                  placeholder="Email"
                  type="email"
                  required
                />

                <select
                  name="interest"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-950 outline-none transition focus:border-sky-400 focus:bg-white"
                  required
                  defaultValue={activeFormType}
                >
                  <option value="General mobility inquiry">
                    General mobility inquiry
                  </option>
                  <option value="Mobility Assessment Call">
                    $29 Mobility Assessment
                  </option>
                  <option value="Custom Mobility Coaching">
                    Custom mobility coaching
                  </option>
                  <option value="Digital routine">
                    Digital stretch/mobility routine
                  </option>
                  <option value="In-Person Assisted Stretch">
                    Mobile assisted stretch near Mesa
                  </option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>

                <textarea
                  name="message"
                  className="min-h-32 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:bg-white"
                  placeholder="What feels tight? What are your goals? Any injuries, limitations, or important context I should know about?"
                  required
                />

                <button
                  disabled={formStatus === "submitting"}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-teal-400 px-7 py-4 font-black text-white shadow-xl shadow-sky-100 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {formStatus === "submitting"
                    ? "Sending..."
                    : "Request recommendation"}
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </button>

                {formStatus === "error" && (
                  <p className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
                    Something went wrong. Try again, or use the assessment
                    booking link.
                  </p>
                )}
              </form>
            )}

            <p className="mt-4 text-xs leading-5 text-slate-500">
              By submitting this form, you are requesting a follow-up about Mesa
              Mobility services. This does not create a medical provider
              relationship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}