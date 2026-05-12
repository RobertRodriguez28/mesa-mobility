import { ArrowRight, CheckCircle2, ClipboardCheck, MapPin, Video } from "lucide-react";
import { motion } from "framer-motion";

interface ServicesSectionProps {
  bookingLink: string;
  scrollToForm: (formType: string) => void;
}

export default function ServicesSection({
  bookingLink,
  scrollToForm,
}: ServicesSectionProps) {
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

  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">
          Services
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
          Start simple. Upgrade if you need coaching.
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Begin with a low-cost assessment, then choose whether you want a
          custom coaching plan, a digital routine, or limited local assisted
          stretch.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200"
            >
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
                <Icon className="h-6 w-6" />
              </div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600">
                {service.eyebrow}
              </p>

              <h3 className="mt-3 text-2xl font-black text-slate-950">
                {service.title}
              </h3>

              <p className="mt-3 text-3xl font-black text-sky-600">
                {service.price}
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>

              <div className="mt-7 grid gap-3">
                {service.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                  >
                    <CheckCircle2 className="h-5 w-5 text-teal-500" />
                    {bullet}
                  </div>
                ))}
              </div>

              {service.href.startsWith("#") ? (
                <button
                  onClick={() => scrollToForm(service.title)}
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-sky-600"
                >
                  {service.button}
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <a
                  href={service.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-sky-600"
                >
                  {service.button}
                  <ArrowRight className="h-4 w-4" />
                </a>
              )}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}