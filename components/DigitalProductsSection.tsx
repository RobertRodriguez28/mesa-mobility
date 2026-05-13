"use client";

import { FileText } from "lucide-react";
import SectionEyebrow from "../components/ui/SectionEyebrow";
import { digitalProducts } from "@/data/siteContent";

export default function DigitalProductsSection() {
  return (
    <section
      id="digital"
      className="border-b border-slate-200 bg-slate-50 px-5 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>Low-ticket options</SectionEyebrow>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Not ready for coaching yet?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Start with a simple routine or guide. These are lightweight options
            for people who want a basic starting point before booking coaching.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {digitalProducts.map((product) => (
            <article
              key={product.title}
              className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200"
            >
              <FileText className="mb-5 h-8 w-8 text-sky-600" />

              <h3 className="text-xl font-black text-slate-950">
                {product.title}
              </h3>

              <p className="mt-3 text-3xl font-black text-teal-600">
                {product.price}
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                {product.description}
              </p>

              <a
                href={product.href}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-sky-600"
              >
                {product.href === "#"
                  ? "Stripe link coming soon"
                  : "Buy now"}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}