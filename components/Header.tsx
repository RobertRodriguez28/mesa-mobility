"use client";
import Image from "next/image";
import logo from "../images/logo.png";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
  bookingLink: string;
}

export default function Header({
  mobileMenuOpen,
  setMobileMenuOpen,
  bookingLink,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full shadow-lg ring-2 ring-sky-400/30">
  <Image
    src={logo}
    alt="Modern Kinetics Logo"
    fill
    className="object-cover"
  />
</div>

          <div>
            <p className="text-lg font-black tracking-tight text-slate-950">
              Modern Kinetics
            </p>

            <p className="text-xs text-slate-500">
             Mobility • Recovery • Performance
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">
          <a href="#services" className="hover:text-sky-600">
            Services
          </a>

          <a href="#assessment" className="hover:text-sky-600">
            Assessment
          </a>

          <a href="#about" className="hover:text-sky-600">
            About
          </a>

          <a href="#results" className="hover:text-sky-600">
            Results
          </a>

          <a href="#contact" className="hover:text-sky-600">
            Start
          </a>
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
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
          <div className="grid gap-4 text-sm font-semibold text-slate-600">
            {["services", "assessment", "about", "results", "contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}