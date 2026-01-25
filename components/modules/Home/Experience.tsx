"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "../../../lib/utils";
import { AnimatedBeam } from "../../ui/animated-beam";

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

export function Experience() {
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
      className="relative flex flex-col items-center justify-center w-full py-10 bg-[#435663] text-white overflow-hidden"
      ref={containerRef}
    >
      <h1 className="text-3xl font-bold mb-8 text-center">Experience</h1>

      <div className="flex flex-col items-center gap-6 text-center max-w-3xl px-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-100">
            🏢 Nabatat Contracting Company
          </h2>
          <p className="text-gray-400">
            Dammam, Saudi Arabia &nbsp;|&nbsp; Feb 2021 – 2026
          </p>
          <p className="text-gray-300 font-medium">Position: Data Analyst</p>
        </div>

        <ul className="text-gray-400 text-left list-disc list-inside space-y-1">
          <li>
            Coordinate with clients for monthly submission comments and
            reporting.
          </li>
          <li>
            Support HR operations by managing and validating employee data.
          </li>
          <li>
            Control and analyze project-related data using online web systems.
          </li>
          <li>
            Maintain, track, and organize offline data records efficiently.
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-6 text-center max-w-3xl px-6">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-100">
            🏢 Safari Co. Company
          </h2>
          <p className="text-gray-400">
            King Fahad International Airport, Dammam &nbsp;|&nbsp; 2026 –
            Present
          </p>
          <p className="text-gray-300 font-medium">Position: Project Admin</p>
        </div>

        <ul className="text-gray-400 text-left list-disc list-inside space-y-1">
          <li>
            Coordinate with clients and internal teams for project updates and
            reporting.
          </li>
          <li>
            Support project operations by managing and validating project data.
          </li>
          <li>
            Control and analyze project-related data using online and offline
            systems.
          </li>
          <li>Maintain, track, and organize project records efficiently.</li>
        </ul>
      </div>

      {/* Optional animated lines between circles (can be removed if not used) */}
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
