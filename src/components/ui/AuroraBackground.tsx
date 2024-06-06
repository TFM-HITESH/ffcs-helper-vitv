"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-full w-full items-center justify-center bg-zinc-100 dark:bg-zinc-900 text-slate-950 transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
            [--gradient-primary:repeating-linear-gradient(100deg,rgba(75,0,130,1)_0%,rgba(0,0,255,1)_7%,rgba(0,0,0,1)_10%,rgba(0,0,0,1)_12%,rgba(75,0,130,1)_16%)]
            [--gradient-secondary:repeating-linear-gradient(100deg,rgba(75,0,130,1)_0%,rgba(0,0,255,1)_7%,rgba(0,0,0,1)_10%,rgba(0,0,0,1)_12%,rgba(75,0,130,1)_16%)]
            [--aurora:repeating-linear-gradient(100deg,rgba(75,0,130,1)_10%,rgba(0,0,255,1)_15%,rgba(0,0,0,1)_20%,rgba(75,0,130,1)_25%,rgba(0,0,255,1)_30%)]
            [background-image:var(--gradient-primary),var(--aurora)]
            dark:[background-image:var(--gradient-secondary),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--gradient-primary),var(--aurora)] 
            after:dark:[background-image:var(--gradient-secondary),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
