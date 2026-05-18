export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-10 text-center text-sm text-slate-500">
      <div className="mx-auto max-w-5xl">
        <p className="font-semibold text-slate-700">
          Modern Kinetics
        </p>

        <p className="mt-2">
          Online mobility coaching and limited local assisted stretch near Mesa,
          Arizona.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
          <a
            href="#services"
            className="transition hover:text-sky-600"
          >
            Services
          </a>

          <a
            href="#about"
            className="transition hover:text-sky-600"
          >
            About
          </a>

          <a
            href="#contact"
            className="transition hover:text-sky-600"
          >
            Contact
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-sky-600"
          >
            Instagram
          </a>
        </div>

        <div className="mt-6 border-t border-slate-200 pt-6 text-xs leading-6 text-slate-400">
          <p>
            Modern Kinetics provides educational mobility coaching, stretching,
            and movement guidance only.
          </p>

          <p className="mt-2">
            This is not physical therapy, chiropractic care, or medical
            treatment. For injuries, pain, or medical concerns, consult a
            licensed healthcare professional.
          </p>

          <p className="mt-4">
            © 2026 Modern Kinetics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}