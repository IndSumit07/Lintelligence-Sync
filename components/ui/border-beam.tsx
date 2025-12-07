"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BorderBeamProps {
    className?: string;
    size?: number;
    duration?: number;
    borderWidth?: number;
    anchor?: number;
    colorFrom?: string;
    colorTo?: string;
    delay?: number;
}

export function BorderBeam({
    className,
    size = 500,
    duration = 15,
    anchor = 90,
    borderWidth = 2,
    colorFrom = "#ffaa40",
    colorTo = "#9c40ff",
    delay = 0,
    radius = 9999, // default to pill/circle
}: BorderBeamProps & { radius?: number }) {
    return (
        <div
            style={
                {
                    "--size": size,
                    "--duration": duration,
                    "--anchor": anchor,
                    "--border-width": borderWidth,
                    "--color-from": colorFrom,
                    "--color-to": colorTo,
                    "--delay": delay,
                    "--radius": radius,
                } as React.CSSProperties
            }
            className={cn(
                "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
                "[mask-clip:padding-box,border-box]! mask-intersect! [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
                className
            )}
        >
            <div
                className="absolute w-[calc(var(--size)*1px)] h-full"
                style={{
                    // Combined animation: Path movement (border-beam) + Pulsing Size (beam-pulse)
                    animation: "border-beam calc(var(--duration)*1s) infinite linear, beam-pulse 3s ease-in-out infinite",
                    animationDelay: "calc(var(--delay)*1s)",
                    background: "linear-gradient(to right, transparent 0%, var(--color-from) 10%, var(--color-to) 90%, transparent 100%)",
                    offsetAnchor: "50% 50%",
                    offsetPath: "inset(0 round 9999px)",
                    transformOrigin: "center", // Pulse from center
                }}
            />
        </div>
    );
}
