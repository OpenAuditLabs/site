"use client";

import React from "react";
import Image from "next/image";

export default function HeroCarousel() {
	const slides = [
		{ src: "/Dashboard.png", alt: "OpenAudit dashboard" },
		{ src: "/Projects.png", alt: "Projects view" },
		{ src: "/PastAud.png", alt: "Past audits view" },
	];

	const baseWidths =
		"w-[320px] sm:w-[560px] md:w-[880px] lg:w-[1180px] xl:w-[1320px] 2xl:w-[1400px]";

	const [index, setIndex] = React.useState(0);
	const [paused, setPaused] = React.useState(false);

	React.useEffect(() => {
		// Respect reduced motion
		const m = typeof window !== "undefined" && window.matchMedia
			? window.matchMedia("(prefers-reduced-motion: reduce)")
			: undefined;
		if (m && m.matches) return;

		const id = window.setInterval(() => {
			if (!paused) setIndex((i) => (i + 1) % slides.length);
		}, 5000);
		return () => window.clearInterval(id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [paused, slides.length]);

	const left = slides[(index + slides.length - 1) % slides.length];
	const center = slides[index % slides.length];
	const right = slides[(index + 1) % slides.length];

	return (
		<div
			className="relative mx-auto mt-30 flex max-w-[1700px] items-end justify-center overflow-visible"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
			role="region"
			aria-roledescription="carousel"
			aria-label="Product previews"
		>
			{/* Left preview (90% scale, slightly behind) */}
			<Slide
				aria-hidden
				className={`${baseWidths} pointer-events-none -mr-10 hidden translate-y-4 scale-[0.9] blur-[1px] sm:block opacity-60 z-0 transition-[transform,opacity,filter] duration-700 ease-out will-change-transform`}
				src={left.src}
				alt={left.alt}
			/>

			{/* Center main image (100%) */}
			<Slide
				className={`${baseWidths} z-10 shadow-sm ring-1 ring-black/5 scale-150 transition-transform duration-700 ease-out will-change-transform`}
				src={center.src}
				alt={center.alt}
				priority
			/>

			{/* Right preview (90% scale, slightly behind) */}
			<Slide
				aria-hidden
				className={`${baseWidths} pointer-events-none -ml-10 hidden translate-y-4 scale-[0.9] blur-[1px] sm:block opacity-60 z-0 transition-[transform,opacity,filter] duration-700 ease-out will-change-transform`}
				src={right.src}
				alt={right.alt}
			/>
		</div>
	);
}

function Slide({ className = "", src, alt, priority, ...props }: React.ComponentProps<"div"> & { src: string; alt: string; priority?: boolean }) {
	return (
		<div
			className={`relative aspect-[16/9] overflow-hidden rounded-2xl border bg-card ${className}`}
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

