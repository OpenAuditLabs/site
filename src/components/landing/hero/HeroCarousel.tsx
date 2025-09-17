"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroCarousel() {
	const slides = [
		{ src: "/Dashboard.png", alt: "OpenAudit dashboard" },
		{ src: "/Projects.png", alt: "Projects view" },
		{ src: "/PastAud.png", alt: "Past audits view" },
	];

	const baseWidths =
	  "w-[320px] sm:w-[560px] md:w-[880px] lg:w-[1180px] xl:w-[1320px] 2xl:w-[1400px]";

	// Track the center slide index and auto-rotate
	const [current, setCurrent] = useState(0);
  // Pause rotation on hover
  const [paused, setPaused] = useState(false);

	useEffect(() => {
    if (paused) return;
		const id = setInterval(() => {
			setCurrent((c) => (c + 1) % slides.length);
		}, 4000);
		return () => clearInterval(id);
	}, [slides.length, paused]);

	return (
		<div
        className="relative mx-auto max-w-[300px] overflow-visible"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
			{/* Sizer to reserve layout space (matches scaled center slide height) */}
			<div
				className={`${baseWidths} invisible h-[150px] sm:h-[250px] md:h-[350px] lg:h-[450px] xl:h-[530px] 2xl:h-[600px]`}
			/>

			{/* Animated slides layered absolutely; positions are derived from `current` */}
			{slides.map((s, idx) => {
				// Determine role of this slide relative to `current`
				const isCenter = idx === current;
				const isLeft = idx === (current + slides.length - 1) % slides.length; // previous
				const isRight = idx === (current + 1) % slides.length; // next

				// Base transition styles so transforms/filters/opacity animate smoothly
				const transition =
					"transition-all duration-700 ease-in-out will-change-transform will-change-filter";

				let posClasses = "";
				if (isCenter) {
					posClasses = [
						"z-10 shadow-sm ring-1 ring-black/5 scale-50",
						"left-1/2 -translate-x-1/2 top-0",
					].join(" ");
				} else if (isLeft) {
					posClasses = [
						"opacity-60 z-0 scale-30 blur-[1px] cursor-pointer",
						"hidden sm:block",
						"left-1/2 top-0 translate-y-4 translate-x-[-75%]",
					].join(" ");
				} else if (isRight) {
					posClasses = [
						"opacity-60 z-0 scale-30 blur-[1px] cursor-pointer",
						"hidden sm:block",
						"left-1/2 top-0 translate-y-4 translate-x-[-25%]",
					].join(" ");
				} else {
					// Not visible (shouldn't happen with 3 slides), keep it offscreen
					posClasses = "opacity-0 pointer-events-none left-1/2 -translate-x-1/2 top-0";
				}

				return (
					<Slide
						key={s.src}
						className={[
							baseWidths,
							transition,
							"absolute",
							posClasses,
						].join(" ")}
						src={s.src}
						alt={s.alt}
						priority={isCenter}
						aria-hidden={!isCenter}
						onClick={() => {
							if (!isCenter) setCurrent(idx);
						}}
					/>
				);
			})}

			{/* Controls */}
			<div className="mt-3 flex items-center justify-center gap-3">
				<Button
					variant="outline"
					size="sm"
					aria-label="Previous slide"
					onClick={() => setCurrent((c) => (c + slides.length - 1) % slides.length)}
				>
					Prev
				</Button>
				<Button
					variant="outline"
					size="sm"
					aria-label="Next slide"
					onClick={() => setCurrent((c) => (c + 1) % slides.length)}
				>
					Next
				</Button>
			</div>
		</div>
	);
}

function Slide({ className = "", src, alt, priority, ...props }: React.ComponentProps<"div"> & { src: string; alt: string; priority?: boolean }) {
	return (
		<div
			className={`aspect-[16/9] overflow-hidden rounded-2xl border bg-card ${className}`}
			{...props}
		>
			<Image
				src={src}
				alt={alt}
				width={1400}
				height={788}
				priority={priority}
				sizes="(min-width:1536px) 1400px, (min-width:1280px) 1320px, (min-width:1024px) 1180px, (min-width:768px) 880px, (min-width:640px) 560px, 320px"
				className="h-full w-full object-cover"
				quality={90}
			/>
		</div>
	);
}

