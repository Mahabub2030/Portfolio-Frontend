"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "../../../lib/utils";
import { AnimatedBeam } from "../../ui/animated-beam";

// ✅ Reusable circle component for visual beam connections
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex items-center justify-center rounded-full border border-gray-700 bg-gradient-to-br from-white/80 to-white/90 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] shadow-gray-200",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function Educations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex flex-col items-center justify-center w-full py-10 bg-[#020617] text-white overflow-hidden"
      ref={containerRef}
    >
      {/* Section Title */}
      <h1 className="text-3xl font-bold mb-8 text-center">Education</h1>

      {/* Education Cards */}
      <div className=" gap-8 max-w-4xl w-full px-6 py-6">
        {/* 🎓 B.Sc. in CSE */}
        <div className="p-6 bg-[#0f172a] rounded-2xl shadow-lg border border-gray-700 hover:scale-[1.02] transition-transform duration-300">
          <h2 className="text-xl font-semibold text-gray-100">
            🎓 B.Sc. in Computer Science & Program (CSE)
          </h2>
          <p className="text-gray-400 mt-1">Dhaka, Bangladesh | 2016 – 2020</p>
          <p className="text-gray-300 mt-3">
            Focused on software development, algorithms, and data management
            systems with hands-on projects and research.
          </p>
        </div>

        {/* 💻 Frontend Developer Course */}
        <div className="p-6 mt-10 bg-[#0f172a] rounded-2xl shadow-lg border border-gray-700 hover:scale-[1.02] transition-transform duration-300">
          <h2 className="text-xl font-semibold text-gray-100">
            💻 Frontend Developer
          </h2>
          <p className="text-gray-400 mt-1">Programming Hero (Batch-10)</p>
          <p className="text-gray-300 mt-3">
            Learned modern frontend technologies including React, Tailwind CSS,
            JavaScript ES6+, and responsive web design.
          </p>
        </div>
      </div>

      {/* ✅ Current Learning Note */}
      <div className="mt-8 text-center max-w-2xl px-6">
        <p className="text-gray-300 text-lg">
          🚀 Currently driving toward{" "}
          <span className="text-blue-400 font-semibold">
            Full Stack Developer
          </span>{" "}
          at SECO — building{" "}
          <span className="text-emerald-400 font-semibold">
            friendly & scalable
          </span>{" "}
          web solutions.
        </p>
      </div>

      {/* 🎨 Animated Beams (Optional Visual Effect) */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}
