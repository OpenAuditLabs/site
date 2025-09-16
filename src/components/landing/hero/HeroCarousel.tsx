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

	return (
		<div className="relative mx-auto mt-30 flex max-w-[1700px] items-end justify-center overflow-visible">
			{/* Left preview (90% scale, slightly behind) */}
			<Slide
				aria-hidden
				className={`${baseWidths} pointer-events-none -mr-10 hidden translate-y-4 scale-[0.9] blur-[1px] sm:block opacity-60 z-0`}
				src={slides[1].src}
				alt={slides[1].alt}
			/>

			{/* Center main image (100%) */}
			<Slide
				className={`${baseWidths} z-10 shadow-sm ring-1 ring-black/5 scale-150`}
				src={slides[0].src}
				alt={slides[0].alt}
				priority
			/>

			{/* Right preview (90% scale, slightly behind) */}
			<Slide
				aria-hidden
				className={`${baseWidths} pointer-events-none -ml-10 hidden translate-y-4 scale-[0.9] blur-[1px] sm:block opacity-60 z-0`}
				src={slides[2].src}
				alt={slides[2].alt}
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

