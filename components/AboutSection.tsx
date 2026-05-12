import { Camera } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="border-y border-slate-200 bg-white px-5 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-teal-50 p-6 shadow-sm">
          <div className="grid h-80 place-items-center rounded-[1.5rem] border border-dashed border-slate-300 bg-white text-center">
            <div>
              <Camera className="mx-auto h-10 w-10 text-slate-400" />
              <p className="mt-4 font-black text-slate-950">Add Robert photo here</p>
              <p className="mt-2 text-sm text-slate-500">Use a clean professional photo later</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-sky-600">
            About Robert
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Coaching backed by years of hands-on experience.
          </h2>

          <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
            <p>
              Hi, I’m Robert Rodriguez. I help people move better, feel better,
              and build more confidence in their body — whether that means
              improving mobility, relieving stiffness, getting stronger, losing
              weight, or simply feeling less restricted day to day.
            </p>

            <p>
              I’ve been in the fitness and stretch industry for about six years.
              I started as a personal trainer in a gym, then became a Lead
              Stretch Trainer at StretchLab, where I had the opportunity to work
              with hundreds of clients across all age ranges — from kids as
              young as 8 to adults in their 90s.
            </p>

            <p>
              Over the years, I’ve helped people with tight hips, low back
              stiffness, shoulder restrictions, posture issues, recovery needs,
              and performance goals. I’ve also had the opportunity to work with
              professional athletes and active clients who wanted to take their
              mobility and movement quality to the next level.
            </p>

            <p>
              I hold certifications as a NASM Certified Personal Trainer and
              Corrective Exercise Specialist. Early in my career, I was also
              fortunate to be mentored by a licensed physical therapist, and
              many of the techniques I learned during that time still influence
              the way I coach today.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["NASM CPT", "NASM CES", "6 years experience"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center font-black text-slate-800"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}