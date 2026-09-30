"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  metric?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Oxpier didn't just fill a role—they restructured how our executive function actually works. My calendar has been protected ever since.",
    author: "James K.",
    role: "Founder & CEO",
    company: "Series B SaaS, New York",
    metric: "120h reclaimed monthly",
  },
  {
    quote:
      "Our outbound was broken. Oxpier rebuilt the entire sequence architecture in three weeks. We went from 2 calls a month to 14 qualified meetings.",
    author: "Sarah M.",
    role: "Head of Growth",
    company: "B2B Logistics, Toronto",
    metric: "14 qualified calls/month",
  },
  {
    quote:
      "The CRM was a graveyard. Now it's the single source of truth for our entire go-to-market. Execution without any drift—exactly what they promised.",
    author: "Daniel O.",
    role: "Co-Founder",
    company: "FinTech Startup, London",
    metric: "100% pipeline visibility",
  },
  {
    quote:
      "I hired Oxpier expecting a freelancer. I got a full operational team embedded inside my company. Night and day difference.",
    author: "Aisha R.",
    role: "Founder",
    company: "E-commerce Brand, Lagos",
    metric: "3 operators embedded",
  },
];

const AUTOPLAY_INTERVAL = 5500;

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (next: number, dir: 1 | -1) => {
      setDirection(dir);
      setIndex((next + TESTIMONIALS.length) % TESTIMONIALS.length);
    },
    []
  );

  const next = useCallback(() => goTo(index + 1, 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, -1), [goTo, index]);

  // Auto-play
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(id);
  }, [paused, next]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  const current = TESTIMONIALS[index];

  return (
    <section
      id="testimonials"
      className="section-light border-y border-[#E5E5E5] py-24 md:py-32 px-4 relative"
      aria-labelledby="testimonials-heading"
    >
      {/* light grid texture */}
      <div className="pointer-events-none absolute inset-0 light-grid" />
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-sans font-bold uppercase tracking-[0.22em] text-[#3E5871] mb-3">
            Client Results
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-serif font-semibold text-[#0F1113]"
          >
            From the operators&apos; clients.
          </h2>
        </div>

        {/* Carousel */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
        >
          {/* Card */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-[#E5E5E5] rounded-2xl p-10 md:p-14 relative shadow-[0_4px_24px_rgba(0,0,0,0.07)]"
                aria-live="polite"
                aria-atomic="true"
              >
                {/* Steel blue top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-transparent via-[#3E5871]/40 to-transparent" />

                <Quote className="w-8 h-8 text-[#3E5871] mb-6 opacity-80" />

                <blockquote className="text-xl md:text-2xl font-serif font-medium text-[#0F1113] leading-snug mb-8 italic">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-sans font-semibold text-[#0F1113] text-sm">
                      {current.author}
                    </p>
                    <p className="font-sans text-xs text-[#6B6B6B] mt-0.5">
                      {current.role} · {current.company}
                    </p>
                  </div>
                  {current.metric && (
                    <div className="shrink-0 px-4 py-2 rounded-lg bg-[#3E5871]/10 border border-[#3E5871]/30 text-center">
                      <p className="text-xs font-bold uppercase tracking-widest text-[#3E5871]">
                        Result
                      </p>
                      <p className="text-sm font-semibold text-[#0F1113] mt-0.5">
                        {current.metric}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial slides">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => goTo(i, i > index ? 1 : -1)}
                  className={`rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-6 h-1.5 bg-[#3E5871]"
                      : "w-1.5 h-1.5 bg-[#3A3E44] hover:bg-[#5B7C9C]"
                  }`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex items-center gap-3">
              <button
                aria-label="Previous testimonial"
                onClick={prev}
                className="w-10 h-10 rounded-full border border-[#2A2D31] bg-[#16191C] text-[#A7AAAD] hover:text-white hover:border-[#3E5871] transition-all flex items-center justify-center"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                aria-label="Next testimonial"
                onClick={next}
                className="w-10 h-10 rounded-full border border-[#2A2D31] bg-[#16191C] text-[#A7AAAD] hover:text-white hover:border-[#3E5871] transition-all flex items-center justify-center"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
