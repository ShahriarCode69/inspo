import React from "react";

const PRINCIPLES = [
	{
		title: "Human-first use",
		body:
			"Our content is built for founders and teams. You agree to use the platform respectfully and avoid scraping or misuse.",
	},
	{
		title: "Personal license",
		body:
			"Your purchase grants a single-seat license. Sharing accounts, reselling, or redistributing assets is prohibited.",
	},
	{
		title: "Fair play",
		body:
			"We protect creators and learners. Any abuse, harassment, or infringement may lead to account termination.",
	},
];

const HIGHLIGHTS = [
	{
		label: "Effective",
		value: "Mar 1, 2025",
		detail: "We update these terms as the studio evolves.",
	},
	{
		label: "Support",
		value: "24/7",
		detail: "Priority responses for active members.",
	},
	{
		label: "Refund window",
		value: "7 days",
		detail: "Full refund if a course isn’t the right fit.",
	},
];

const TERMS = [
	{
		title: "1. Acceptance of terms",
		body:
			"By accessing Inspo by Leuco, you agree to these Terms & Conditions and our Privacy Policy. If you do not agree, please discontinue use.",
	},
	{
		title: "2. Account access",
		body:
			"You are responsible for safeguarding your login credentials and all activity that occurs under your account.",
	},
	{
		title: "3. Intellectual property",
		body:
			"All courses, templates, and assets are owned by Inspo by Leuco or its licensors. You receive a limited, non-transferable license for personal use.",
	},
	{
		title: "4. Payments & refunds",
		body:
			"Payments are processed at checkout. Eligible refunds are available within seven days of purchase, unless stated otherwise on the course page.",
	},
	{
		title: "5. Community standards",
		body:
			"Be constructive and professional. We may remove content or suspend accounts that violate these standards.",
	},
	{
		title: "6. Updates",
		body:
			"We may revise these terms from time to time. Continued use of the platform indicates acceptance of the updated terms.",
	},
];

export default function Terms() {
	return (
		<div className="pt-32 pb-20">
			<section className="max-w-6xl mx-auto px-6">
				<div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
					<div className="space-y-6">
						<p className="text-sm uppercase tracking-[0.3em] text-ink/60">
							Terms & Conditions
						</p>
						<h1 className="text-4xl lg:text-6xl leading-tight">
							A modern learning studio with clear, creator-friendly terms.
							<span className="serif-text"> Know where you stand.</span>
						</h1>
						<p className="text-lg text-ink/70">
							These terms help protect the creators who build Inspo by Leuco and the
							founders who learn here. We keep them short, readable, and transparent.
						</p>
						<div className="flex flex-wrap gap-3 text-sm text-ink/60">
							<span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2">
								<span className="w-2 h-2 rounded-full bg-accent" />
								Studio-grade privacy
							</span>
							<span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2">
								<span className="w-2 h-2 rounded-full bg-accent" />
								Clear licensing
							</span>
						</div>
					</div>

					<div className="glass rounded-3xl p-8 space-y-6">
						<h2 className="text-2xl">Our principles</h2>
						<div className="space-y-4">
							{PRINCIPLES.map((item) => (
								<div
									key={item.title}
									className="rounded-2xl bg-white/70 border border-white/70 p-4"
								>
									<h3 className="text-base font-semibold">{item.title}</h3>
									<p className="text-sm text-ink/60 mt-2">{item.body}</p>
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
				<div className="rounded-[32px] bg-gradient-to-br from-[#0b1b16] via-[#0f2a22] to-[#0b1b16] text-white p-10 lg:p-14">
					<div className="flex items-center justify-between flex-wrap gap-4">
						<div>
							<p className="text-sm uppercase tracking-[0.3em] text-white/60">
								Terms snapshot
							</p>
							<h2 className="text-3xl lg:text-4xl mt-3">
								Quick scan before you dive deep.
							</h2>
						</div>
						<div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm">
							Updated quarterly
							<span className="w-2 h-2 rounded-full bg-accentSoft" />
						</div>
					</div>
					<div className="mt-8 grid gap-4 md:grid-cols-2">
						{TERMS.slice(0, 4).map((term) => (
							<div key={term.title} className="glass rounded-2xl p-4">
								<h3 className="text-base font-semibold">{term.title}</h3>
								<p className="text-sm text-white/70 mt-2">{term.body}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="max-w-6xl mx-auto px-6 mt-16">
				<div className="grid gap-6 lg:grid-cols-2">
					{TERMS.slice(4).map((term) => (
						<div
							key={term.title}
							className="bg-white rounded-3xl p-6 border border-slate-200/60"
						>
							<h3 className="text-lg font-semibold">{term.title}</h3>
							<p className="text-sm text-ink/60 mt-2">{term.body}</p>
						</div>
					))}
				</div>
			</section>

			<section className="max-w-6xl mx-auto px-6 mt-16">
				<div className="rounded-[32px] border border-slate-200/80 bg-white p-10 lg:p-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-center">
					<div>
						<h2 className="text-3xl lg:text-4xl">
							Questions about these terms?
						</h2>
						<p className="text-sm text-ink/60 mt-3">
							Reach out to our studio team and we will guide you through anything
							unclear.
						</p>
					</div>
					<div className="glass rounded-2xl p-6 text-sm text-ink/60">
						<p className="text-xs uppercase tracking-[0.3em] text-ink/50">
							Contact
						</p>
						<p className="text-lg text-ink mt-3">hello@inspobyLeuco.com</p>
						<p className="mt-2">Average response time: 3 hours.</p>
					</div>
				</div>
			</section>
		</div>
	);
}
