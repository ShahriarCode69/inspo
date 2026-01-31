import React from "react";
import Button from "./button";

const STEPS = [
	{
		number: "1",
		title: "Choose a track",
		description:
			"Pick a path that matches what you’re building—design, product, growth, or data—so every lesson stays relevant.",
	},
	{
		number: "2",
		title: "Learn by doing",
		description:
			"Short, focused lessons paired with practical exercises, templates, and real projects you can apply immediately.",
	},
	{
		number: "3",
		title: "Leave with proof",
		description:
			"Finish with a polished output—something you can publish, add to your portfolio, or use in your business.",
	},
];

export default function HowItWorks() {
	return (
		<section className="py-16">
			<div className="section mx-auto max-w-[1400px] px-6">
				<div className="space-y-22">
					<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
						<div className="max-w-xl space-y-3">
							<p className="text-sm font-semibold uppercase tracking-wide text-accent">
								HOW IT WORKS
							</p>
							<h2 className="text-4xl lg:text-6xl font-semibold text-ink">
								Pick a goal. <span className="serif-text">Ship it.</span>
							</h2>
							<p className="text-sm leading-relaxed text-ink/70">
								No rabbit holes. Just a clean sequence that takes you from “I
								should learn this” to “It’s done.”
							</p>
						</div>
						<Button href="/signup">Get Started</Button>
					</div>

					<div className="grid gap-8 justify-items-center md:grid-cols-3">
						{STEPS.map((step) => (
							<div key={step.number} className="relative">
								<span className="pointer-events-none absolute -top-4 -left-8 select-none text-8xl font-black leading-none text-black/4 md:-top-10 md:text-[150px]">
									{step.number.padStart(2)}
								</span>
								<div className="relative z-10 space-y-2 pt-6">
									<h4 className="text-xl font-semibold text-ink">
										{step.title}
									</h4>
									<p className="text-sm max-w-[25ch] leading-relaxed text-ink/70">
										{step.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
