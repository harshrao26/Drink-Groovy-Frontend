"use client";;
import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import { cn } from "@/lib/utils";

export function MagicCard({
  children,
  className = "",
  gradientSize = 200,
  gradientColor = "#262626"
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    (<div
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();

        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
      className={cn(
        "group relative flex size-full overflow-hidden rounded-sm bg-neutral-100 dark:bg-neutral-900 border text-black dark:text-white",
        className
      )}>
      <div className="relative z-10">{children}</div>
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-sm opacity-5 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
						radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
					`,
        }} />
    </div>)
  );
}
