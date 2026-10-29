"use client";

import Image from "next/image";
import Link from "next/link";
import {
  LuShieldCheck,
  LuEye,
  LuBuilding2,
  LuArrowRight,
} from "react-icons/lu";
import type { IconType } from "react-icons";
import ScrollReveal from "../shared/ScrollReveal";
import { getWelcomeData } from "@/data";

const iconMap: Record<string, IconType> = {
  "shield-check": LuShieldCheck,
  eye: LuEye,
  building: LuBuilding2,
};

export default function HomeWelcomeSection() {
  const data = getWelcomeData();
  const { director, overview, pillarsSection, skillsBand } = data;

  return (
    <section className="relative overflow-x-clip bg-mist py-12 sm:py-14 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/50 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro strip */}
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brass/30 bg-brass/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-brass">
              <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
              {data.badge}
            </span>
            <h2 className="font-display mt-4 max-w-4xl text-balance text-2xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {data.title}
              <span className="mt-2 block text-xl font-semibold text-signal sm:text-2xl">
                {data.subtitle}
              </span>
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-brass/70" />
          </div>
        </ScrollReveal>

        {/* Founder + overview — asymmetric editorial with equal height on large screens */}
        <div className="mt-10 grid min-w-0 items-stretch gap-8 sm:mt-14 sm:gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
          <ScrollReveal direction="up" className="h-full min-w-0">
            <div className="relative mx-auto flex h-full w-full min-w-0 max-w-md flex-col lg:mx-0 lg:max-w-none">
              <div className="rounded-3xl border border-brass/30 bg-brass/5 p-1.5 sm:p-2.5">
              <div className="relative flex min-h-[260px] flex-1 overflow-hidden rounded-2xl bg-ink shadow-2xl sm:min-h-[420px] lg:min-h-full">
                <Image
                  src={director.image}
                  alt={director.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                />

                {/* Subtle top badge */}
                <div className="absolute left-3 top-3 z-10 max-w-[calc(100%-1.5rem)] truncate rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brass backdrop-blur-md sm:left-5 sm:top-5 sm:text-[11px]">
                  {director.badge}
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/85 to-transparent p-4 pt-20 sm:p-8 sm:pt-24">
                  <span className="inline-block max-w-full rounded-md bg-brass/25 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-brass sm:text-[11px] sm:tracking-[0.2em]">
                    {director.role}
                  </span>
                  <p className="font-display mt-2 text-xl font-bold leading-tight text-white sm:text-3xl">
                    {director.name}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-white/80 sm:text-sm">
                    {director.experience}
                  </p>
                </div>
              </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" className="h-full min-w-0">
            <div className="relative flex h-full min-w-0 flex-col justify-between rounded-2xl border border-line/60 bg-white p-4 shadow-xl sm:p-8 lg:p-10">
              <div>
                {/* Badge & Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line/60 pb-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-brass">
                      {overview.category}
                    </span>
                    <h3 className="font-display mt-1 text-xl font-extrabold leading-tight text-ink sm:text-3xl">
                      {overview.titleNormal}
                      <span className="text-signal"> {overview.titleHighlight}</span>
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-brass/40 bg-brass/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brass">
                    <span className="h-2 w-2 rounded-full bg-signal animate-pulse" />
                    {overview.tag}
                  </span>
                </div>

                {/* Subtitle */}
                <p className="mt-4 text-sm font-medium text-muted sm:text-base">
                  {overview.subtitle}
                </p>

                {/* Modern Feature Cards */}
                <div className="mt-6 space-y-3.5">
                  {overview.features.map((feat) => {
                    const Icon = iconMap[feat.icon] || LuShieldCheck;
                    return (
                      <div
                        key={feat.title}
                        className="group flex min-w-0 items-start gap-3 rounded-xl border border-line/70 bg-mist/50 p-3 transition-all duration-300 hover:border-brass/60 hover:bg-white hover:shadow-md sm:gap-3.5 sm:p-4"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink text-brass shadow-sm transition-colors group-hover:bg-signal group-hover:text-white">
                          <Icon size={20} />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-sm font-bold leading-snug text-ink sm:text-[15px]">
                            {feat.title}
                          </h4>
                          <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">
                            {feat.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Pillars — 3 column */}
        <div className="mt-20 md:mt-24">
          <ScrollReveal direction="up" className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-brass">
              {pillarsSection.badge}
            </span>
            <h3 className="font-display mt-2 text-3xl font-extrabold text-ink sm:text-4xl">
              {pillarsSection.title}
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted sm:text-base">
              {pillarsSection.subtitle}
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillarsSection.pillars.map((item, i) => {
              const Icon = iconMap[item.icon] || LuShieldCheck;
              return (
                <ScrollReveal
                  key={item.title}
                  direction="up"
                  index={i}
                  staggerChildren={0.1}
                  className="group relative flex flex-col justify-between rounded-xl border border-line/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brass/50 hover:shadow-xl sm:p-8"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-ink text-brass shadow-md transition-colors group-hover:bg-signal group-hover:text-white">
                        <Icon size={24} />
                      </span>
                      <span className="font-display text-3xl font-extrabold text-mist-deep/90 transition-colors group-hover:text-brass/40">
                        0{i + 1}
                      </span>
                    </div>
                    <h4 className="font-display mt-6 text-xl font-bold text-ink">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* Skills Academy — full-bleed band */}
      <ScrollReveal direction="up">
        <div className="relative mt-20 overflow-hidden bg-field-mesh md:mt-24">
          <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between md:py-16 lg:px-8">
            <div className="max-w-2xl">
              <span className="inline-block rounded bg-brass/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-brass">
                {skillsBand.badge}
              </span>
              <h3 className="font-display mt-3 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                {skillsBand.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                {skillsBand.description}
              </p>
            </div>
            <Link
              href={skillsBand.buttonHref}
              className="btn-fill-tl inline-flex shrink-0 items-center gap-3 rounded-md bg-signal px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg [--btn-fill:#c4a35a] md:self-center"
            >
              {skillsBand.buttonText}
              <LuArrowRight size={18} />
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
