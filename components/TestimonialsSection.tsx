import { Camera, Star, UserCheck } from "lucide-react";

export default function TestimonialsSection() {
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

  return (
    <section id="results" className="mx-auto max-w-7xl px-5 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">
          Client-style proof
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
          What clients should feel.
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Better movement, less stiffness, more confidence, and a routine that
          finally makes sense.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200"
          >
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
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
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
  );
}