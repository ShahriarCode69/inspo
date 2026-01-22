import React from "react";

const VALUES = [
	{
		title: "Crafted learning",
		body:
			"Every program is art-directed, with studio-grade visuals and a narrative that keeps momentum high.",
	},
	{
		title: "Elite mentors",
		body:
			"We partner with founders and creators who have scaled category-defining brands.",
	},
	{
		title: "Designed for action",
		body:
			"Each lesson ships with templates, scorecards, and a rollout plan for your next launch.",
	},
];

const HIGHLIGHTS = [
	{
		label: "Global learners",
		value: "120k+",
		detail: "Designers, strategists, and builders across 38 countries.",
	},
	{
		label: "Courses curated",
		value: "54",
		detail: "Focused pathways from idea to scale in under 8 weeks.",
	},
	{
		label: "Mentor hours",
		value: "900+",
		detail: "Live sessions and feedback labs every quarter.",
	},
];

export default function About() {
	return (
		<div className="pt-32 pb-20">
			<section className="max-w-6xl mx-auto px-6">
				<div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
					<div className="space-y-6">
						<p className="text-sm uppercase tracking-[0.3em] text-ink/60">
							About Inspo by Leuco
						</p>
						<h1 className="text-4xl lg:text-6xl leading-tight">
							We design learning experiences that feel like a luxury studio
							<span className="serif-text">—and move like a launch plan.</span>
						</h1>
						<p className="text-lg text-ink/70">
							Inspo by Leuco is a curated platform for founders, creatives, and
							strategists who want to turn ideas into premium digital products. We
							combine cinematic storytelling with hands-on guidance so every module
							feels actionable and unforgettable.
						</p>
						<div className="flex flex-wrap gap-4 text-sm text-ink/60">
							<span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2">
								<span className="w-2 h-2 rounded-full bg-accent" />
								Live cohort drops each month
							</span>
							<span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2">
								<span className="w-2 h-2 rounded-full bg-accent" />
								Studio-grade templates
							</span>
						</div>
					</div>

					<div className="glass rounded-3xl p-8 space-y-6">
						<h2 className="text-2xl">What makes us different</h2>
						<p className="text-sm text-ink/70">
							We blend curriculum design with brand storytelling so you walk away
							with a plan, a polished offer, and the confidence to launch quickly.
						</p>
						<div className="space-y-4">
							{VALUES.map((value) => (
								<div
									key={value.title}
									className="rounded-2xl bg-white/70 border border-white/70 p-4"
								>
									<h3 className="text-base font-semibold">{value.title}</h3>
									<p className="text-sm text-ink/60 mt-2">{value.body}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="max-w-6xl mx-auto px-6 mt-16">
				<div className="grid gap-6 lg:grid-cols-3">
					{HIGHLIGHTS.map((item) => (
						<div
							key={item.label}
							className="bg-white rounded-3xl p-6 border border-slate-200/60 hover-lift"
						>
							<p className="text-sm uppercase tracking-[0.24em] text-ink/50">
								{item.label}
							</p>
							<h3 className="text-3xl mt-3">{item.value}</h3>
							<p className="text-sm text-ink/60 mt-2">{item.detail}</p>
						</div>
					))}
				</div>
			</section>

			<section className="max-w-6xl mx-auto px-6 mt-16">
				<div className="rounded-[32px] bg-gradient-to-br from-[#0a0a14] via-[#11101b] to-[#1f1a2f] text-white p-10 lg:p-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
					<div className="space-y-4">
						<p className="text-sm uppercase tracking-[0.3em] text-white/60">
							The Studio
						</p>
						<h2 className="text-3xl lg:text-4xl">
							A creative partner for your next premium launch.
						</h2>
						<p className="text-sm text-white/70">
							We work with you beyond the coursework: refine your offer, shape your
							story, and deliver a launch plan that feels effortless.
						</p>
					</div>
					<div className="space-y-3 text-sm text-white/70">
						<div className="glass rounded-2xl p-4">Personalized launch timelines</div>
						<div className="glass rounded-2xl p-4">Founder-only feedback sessions</div>
						<div className="glass rounded-2xl p-4">Partner referrals + introductions</div>
					</div>
				</div>
			</section>
		</div>
	);
}
