import React from "react";

export default function Research() {
	return (
		<section className="max-w-4xl mx-auto py-12 px-6">
			<div
				className="rounded-lg p-6 shadow-md"
				style={{
					background: "var(--card)",
					color: "var(--card-foreground)",
					border: "1px solid var(--border)",
				}}
			>
				<h2
					className="text-2xl font-semibold mb-2"
					style={{ color: "var(--primary)" }}
				>
					Research
				</h2>
				<p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
					This is an initial placeholder for the Research section. Content will be
					added here later.
				</p>
			</div>
		</section>
	);
}

