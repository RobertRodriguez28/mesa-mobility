import { ArrowRight } from "lucide-react";

export default function CTAButton({
  children,
  onClick,
  href,
  dark = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  dark?: boolean;
}) {
  const classes = dark
    ? "group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-xl hover:shadow-sky-100"
    : "group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-teal-400 px-6 py-3 text-sm font-black text-white shadow-xl shadow-sky-100 transition hover:-translate-y-0.5 hover:scale-[1.02]";

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className={classes}
      >
        {children}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </button>
  );
}