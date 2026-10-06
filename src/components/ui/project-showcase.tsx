"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  year: string;
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Pipeline Automation",
    description: "Automated outbound cadence delivering 14 qualified calls monthly.",
    year: "2024",
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Executive Integration",
    description: "Embedded EA workflows for a Series B founder team.",
    year: "2024",
    link: "#",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "CRM Architecture",
    description: "End-to-end data structuring and list research ops.",
    year: "2023",
    link: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
];

export function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;
    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} className="relative w-full max-w-3xl mx-auto py-8">
      <div
        className="pointer-events-none absolute top-0 left-0 z-50 overflow-hidden rounded-xl shadow-2xl border border-border/50"
        style={{
          transform: `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 100}px, 0)`,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8,
          transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="relative w-[320px] h-[200px] bg-[#111111] rounded-xl overflow-hidden">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="absolute inset-0 w-full h-full transition-all duration-500 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                transform: hoveredIndex === index ? "scale(1)" : "scale(1.1)",
                filter: hoveredIndex === index ? "none" : "blur(10px)",
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
      </div>

      <div className="space-y-0">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            className="group block"
            onMouseEnter={() => {
              setHoveredIndex(index);
              setIsVisible(true);
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
              setIsVisible(false);
            }}
          >
            <div className="relative py-6 border-t border-border/40 transition-all duration-300 ease-out">
              <div
                className={`absolute inset-0 -mx-6 px-6 bg-white/5 rounded-lg transition-all duration-300 ease-out ${
                  hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-2">
                    <h3 className="text-white font-serif font-semibold text-xl tracking-tight">
                      <span className="relative">
                        {project.title}
                        <span
                          className={`absolute left-0 -bottom-1 h-px bg-white transition-all duration-300 ease-out ${
                            hoveredIndex === index ? "w-full" : "w-0"
                          }`}
                        />
                      </span>
                    </h3>
                    <ArrowUpRight
                      className={`w-5 h-5 text-white transition-all duration-300 ease-out ${
                        hoveredIndex === index
                          ? "opacity-100 translate-x-0 translate-y-0"
                          : "opacity-0 -translate-x-2 translate-y-2"
                      }`}
                    />
                  </div>
                  <p
                    className={`text-sm mt-2 leading-relaxed transition-all duration-300 ease-out ${
                      hoveredIndex === index ? "text-white/80" : "text-white/40"
                    }`}
                  >
                    {project.description}
                  </p>
                </div>
                <span
                  className={`text-xs font-mono tabular-nums mt-1 transition-all duration-300 ease-out ${
                    hoveredIndex === index ? "text-white" : "text-white/30"
                  }`}
                >
                  {project.year}
                </span>
              </div>
            </div>
          </a>
        ))}
        <div className="border-t border-border/40" />
      </div>
    </div>
  );
}

export default ProjectShowcase;
