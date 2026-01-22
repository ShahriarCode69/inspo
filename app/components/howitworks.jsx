import React from "react";
import Button from "./button";

const STEPS = [
	{
		number: "1",
		title: "Project Discovery Call",
		description:
			"Party we years to order allow asked of. We so opinion friends me .",
	},
	{
		number: "2",
		title: "Project Discovery Call",
		description:
			"His defective nor convinced residence own. Connection has pu",
	},
	{
		number: "3",
		title: "Project Discovery Call",
		description:
			"They age and draw mrs like. Improving end distrusts may instantly.",
	},
];

export default function HowItWorks() {
	return (
		<section className="py-16">
			<div className="section mx-auto max-w-[1400px] px-6">
				<div className="space-y-22">
					<div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
						<div className="max-w-xl space-y-3">
							<p className="text-xs font-semibold uppercase tracking-wide text-accent">
								Work process
							</p>
							<h2 className="text-3xl font-semibold text-ink">
								Simple steps, clear outcomes
							</h2>
							<p className="text-sm leading-relaxed text-ink/70">
								Yet bed any for travelling assistance indulgence unpleasing. Not
								thoughts all exercise blessing. Indulgence way everything joy.
							</p>
						</div>
						<Button>Get Started</Button>
					</div>

					<div className="grid gap-8 justify-items-center md:grid-cols-3">
						{STEPS.map((step) => (
							<div key={step.number} className="relative">
								<span className="pointer-events-none absolute -top-4 -left-8 select-none text-7xl font-black leading-none text-black/10 md:-top-10 md:text-9xl">
									{step.number.padStart(2,)}
								</span>
								<div className="relative z-10 space-y-2 pt-6">
									<h4 className="text-base font-semibold text-ink">
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
