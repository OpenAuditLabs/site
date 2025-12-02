"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

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
		const carouselRef = useRef<HTMLDivElement>(null);
		const [autoplayEnabled, setAutoplayEnabled] = useState(true);
		const [reduceMotion, setReduceMotion] = useState(false);

		useEffect(() => {
			const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
			setReduceMotion(mediaQuery.matches);

			const handleChange = () => setReduceMotion(mediaQuery.matches);
			mediaQuery.addEventListener("change", handleChange);
			return () => mediaQuery.removeEventListener("change", handleChange);
		}, []);

		// Auto-rotate carousel every 3 seconds unless paused or autoplay is disabled
		useEffect(() => {
			if (paused || !autoplayEnabled || reduceMotion) return;
			const interval = setInterval(() => {
				setCurrent((prev) => (prev + 1) % slides.length);
			}, 3000);
			return () => clearInterval(interval);
		}, [paused, autoplayEnabled, slides.length, reduceMotion]);



		// helper to focus a slide by index
		const focusSlide = (index: number) => {
			if (!carouselRef.current) return;
			const el = carouselRef.current.querySelector<HTMLElement>(`[data-slide-index="${index}"]`);
			if (el) el.focus();
		};

		// When advancing/retreating slides from a button click or keyboard event
		const goToSlide = (index: number) => {
			// set state first
			setCurrent(index);
			// ensure DOM updated before focusing — use requestAnimationFrame or setTimeout 0
			requestAnimationFrame(() => focusSlide(index));
		};

		const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
			if (e.key === "ArrowLeft") {
				e.preventDefault();
				goToSlide((current - 1 + slides.length) % slides.length);
			} else if (e.key === "ArrowRight") {
				e.preventDefault();
				goToSlide((current + 1) % slides.length);
			}
		};

	return (
		<div
			className="relative mx-auto max-w-[300px] overflow-visible focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
			onKeyDown={handleKeyDown}
			role="region"
			aria-roledescription="carousel"
			aria-live="polite"
			tabIndex={0} // Make the carousel focusable
			ref={carouselRef}
		>
			<h2 className="sr-only">OpenAudit Feature Carousel</h2>

			{/* Carousel controls */}
			<div className="absolute inset-x-0 top-1/2 z-20 flex -translate-y-1/2 justify-between px-4">
				<button
					className="rounded-full bg-black/50 p-2 text-white hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
					aria-label="Previous slide"
					onClick={() => goToSlide((current - 1 + slides.length) % slides.length)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="h-6 w-6"
						aria-hidden="true"
						focusable="false"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 19.5L8.25 12l7.5-7.5"
						/>
					</svg>
				</button>
				<button
					className="rounded-full bg-black/50 p-2 text-white hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
					aria-label="Next slide"
					onClick={() => goToSlide((current + 1) % slides.length)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="h-6 w-6"
						aria-hidden="true"
						focusable="false"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M8.25 4.5l7.5 7.5-7.5 7.5"
						/>
					</svg>
				</button>
			</div>

			{/* Slide indicators and Play/Pause button */}
			<div className="absolute inset-x-0 bottom-4 z-20 flex justify-center space-x-2">
				<div role="group" aria-label="Carousel slide controls" className="flex space-x-2">
					{slides.map((_, idx) => (
						<button
							key={idx}
							className={`h-2 w-2 rounded-full ${idx === current ? "bg-white" : "bg-white/50"} focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black`}
							aria-label={`Go to slide ${idx + 1}`}
							aria-current={idx === current ? "true" : "false"}
							onClick={() => goToSlide(idx)}
						/>
					))}
				</div>
				<button
					className="rounded-full bg-black/50 p-1 text-white hover:bg-black/75 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
					aria-label={autoplayEnabled ? "Pause autoplay" : "Start autoplay"}
					onClick={() => setAutoplayEnabled((prev) => !prev)}
				>
					{autoplayEnabled ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="h-4 w-4"
							aria-hidden="true"
							focusable="false"
						>
							<path
								fillRule="evenodd"
								d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.47 1.45 2.47 2.973v9.349c0 1.523-.973 2.8-2.47 2.973a47.745 47.745 0 01-11.36 0c-1.497-.174-2.47-1.45-2.47-2.973V5.55c0-1.523.973-2.8 2.47-2.973z"
								clipRule="evenodd"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="h-4 w-4"
							aria-hidden="true"
							focusable="false"
						>
							<path
								fillRule="evenodd"
								d="M4.5 5.653c0-1.426 1.529-2.38 2.872-1.667l11.55 6.468c1.295.723 1.295 2.518 0 3.24l-11.55 6.468c-1.343.713-2.872-.24-2.872-1.667V5.653z"
								clipRule="evenodd"
							/>
						</svg>
					)}
				</button>
			</div>

			{/* Animated slides layered absolutely; positions are derived from `current` */}
			{slides.map((s, idx) => {
				// Determine role of this slide relative to `current`
				const isCenter = idx === current;
				const isLeft = idx === (current + slides.length - 1) % slides.length; // previous
				const isRight = idx === (current + 1) % slides.length; // next

				// Base transition styles so transforms/filters/opacity animate smoothly
				const transition =
					reduceMotion ? "transition-all duration-0 ease-in-out will-change-transform will-change-filter" : "transition-all duration-700 ease-in-out will-change-transform will-change-filter";

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
						className={[baseWidths, transition, "absolute", posClasses].join(" ")}
						src={s.src}
						alt={s.alt}
						priority={isCenter}
						aria-hidden={!isCenter}
						tabIndex={isCenter ? 0 : -1}
						data-slide-index={idx}
						role="group"
						aria-label={`Slide ${idx + 1} of ${slides.length}: ${s.alt}`}
						onClick={() => {
							if (!isCenter) goToSlide(idx);
						}}
						onKeyDown={(e) => {
							if (!isCenter && (e.key === "Enter" || e.key === " ")) {
								e.preventDefault();
								goToSlide(idx);
							}
						}}
					/>
				);
			})}
			{/* Sizer to reserve layout space (matches scaled center slide height) - moved below images to reduce gap */}
			<div
				className={`${baseWidths} invisible h-[150px] sm:h-[250px] md:h-[350px] lg:h-[450px] xl:h-[530px] 2xl:h-[600px]`}
			/>
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
				className="w-full h-auto"
				quality={90}
				placeholder="blur"
				blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
			/>
		</div>
	);
}

