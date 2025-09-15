import React from "react";
import Image from "next/image";

export default function HeroCarousel() {
	const slides = [
		{ src: "/Dashboard.png", alt: "OpenAudit dashboard" },
		{ src: "/Projects.png", alt: "Projects view" },
		{ src: "/PastAud.png", alt: "Past audits view" },
	];

	return (
		<div className="relative mx-auto flex max-w-[1700px] items-end justify-center">
			{/* Left blurred preview */}
			<Slide
				aria-hidden
				className="pointer-events-none -mr-14 hidden translate-y-6 scale-[1] blur-[1px] sm:block opacity-60 max-w-[1500px]"
				src={slides[1].src}
				alt={slides[1].alt}
			/>

			{/* Center main image */}
			<Slide
				className="z-10 w-[150vw] max-w-[1500px] shadow-sm ring-1 ring-black/5"
				src={slides[0].src}
				alt={slides[0].alt}
				priority
			/>

			{/* Right blurred preview */}
			<Slide
				aria-hidden
				className="pointer-events-none -ml-14 hidden translate-y-6 scale-[1] blur-[1px] sm:block opacity-60 max-w-[1500px]"
				src={slides[2].src}
				alt={slides[2].alt}
			/>
		</div>
	);
}

function Slide({ className = "", src, alt, priority, ...props }: React.ComponentProps<"div"> & { src: string; alt: string; priority?: boolean }) {
	return (
		<div
			className={`relative aspect-[16/9] w-[100vw] max-w-[1900px] overflow-hidden rounded-2xl border bg-card ${className}`}
			{...props}
		>
			<Image
				src={src}
				alt={alt}
				width={1900}
				height={1069}
				priority={priority}
				sizes="(min-width: 1700px) 1500px, (min-width: 768px) 88vw, 95vw"
				className="h-full w-full object-cover"
				// Next.js will optimize to the requested dimensions so all three are consistent
				quality={90}
			/>
		</div>
	);
}

