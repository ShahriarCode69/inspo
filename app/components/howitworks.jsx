import React from "react";
import Button from "./button";

const STEPS = [
	{
		number: "1",
		title: "Project Discovery Call",
		description:
			"Party we years to order allow asked of. We so opinion friends me message as delight.",
	},
	{
		number: "2",
		title: "Project Discovery Call",
		description:
			"His defective nor convinced residence own. Connection has put impossible own apartments boisterous.",
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
		<section className="overflow-x-hidden py-16">
			<div className="max-w-[1400px] mx-auto px-6">
				<div className="bg-white rounded-2xl shadow-lg px-8 py-12 md:px-12 md:py-14">
					<div className="space-y-10">
						<div className="max-w-2xl space-y-4">
							<p className="text-xs font-semibold uppercase tracking-wide text-accent">
								Stockie operation across the world
							</p>
							<h2 className="text-3xl font-bold text-ink">
								We have best team and best process
							</h2>
							<p className="text-sm text-ink/70 leading-relaxed">
								Yet bed any for travelling assistance indulgence unpleasing. Not
								thoughts all exercise blessing. Indulgence way everything joy.
							</p>
							<Button>Get Started</Button>
						</div>

						<div className="relative">
							<div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-gray-100" />
							<svg
								width="1400"
								height="130"
								viewBox="0 0 1400 130"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0.273926 128.994C18.1073 121.994 40.8739 100.194 81.2739 96.9939C131.774 92.9939 147.774 101.994 195.774 75.9939C243.774 49.9939 282.274 40.4939 340.274 40.4939C398.274 40.4939 443.274 12.4939 453.774 0.493866"
									stroke="#0C342C"
									stroke-width="1.5"
								/>
							</svg>

							<div className="relative mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
								{STEPS.map((step) => (
									<div key={step.number} className="relative">
										<div className="flex items-center gap-3">
											<div className="h-4 w-4 rounded-full bg-white border border-accent shadow" />
											<span className="text-5xl font-bold text-gray-200 leading-none">
												{step.number}
											</span>
										</div>
										<div className="mt-4">
											<h4 className="text-base font-semibold text-ink">
												{step.title}
											</h4>
											<p className="mt-2 text-sm text-ink/70 leading-relaxed">
												{step.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
