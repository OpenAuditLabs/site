import React from "react";

export default function HeroCarousel() {
	return (
		<div className="relative mx-auto flex max-w-[1400px] items-end justify-center">
			{/* Left blurred preview */}
			<Placeholder
				aria-hidden
				className="-mr-8 hidden translate-y-6 scale-[0.96] blur-[2px] sm:block opacity-60 max-w-[900px]"
			/>

			{/* Center main image */}
			<Placeholder className="z-10 w-full max-w-[1280px] shadow-xl ring-1 ring-black/5" />

			{/* Right blurred preview */}
			<Placeholder
				aria-hidden
				className="-ml-8 hidden translate-y-6 scale-[0.96] blur-[2px] sm:block opacity-60 max-w-[900px]"
			/>
		</div>
	);
}

function Placeholder({ className = "", ...props }: React.ComponentProps<"div">) {
	return (
		<div
			role="img"
			aria-label="Hero slide placeholder"
		className={`relative aspect-[16/9] w-[88vw] max-w-[1280px] overflow-hidden rounded-2xl border bg-card ${className}`}
			{...props}
		>
			{/* window header bar */}
			<div className="bg-muted/60 border-b px-4 py-2 text-left text-xs font-medium">
				Dashboard preview
			</div>
			{/* image stand-in */}
			<div className="grid h-full place-items-center bg-gradient-to-b from-muted/50 to-background">
				<div className="text-muted-foreground text-sm">Placeholder</div>
			</div>
		</div>
	);
}

