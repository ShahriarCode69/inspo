import React from 'react'
import Image from 'next/image';


export default function FeaturedStories() {

	const cards = [
		{
			img: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1000&q=80",
			alt: "Luxury launch",
			tag: "Growth",
			title: "Designing premium launch rituals",
			desc: "A calm, high-conversion approach for founders.",
		},
		{
			img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1000&q=80",
			alt: "Studio",
			tag: "Design",
			title: "Building a luxury product system",
			desc: "Frameworks for polished, cohesive experiences.",
		},
		{
			img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80",
			alt: "Leadership",
			tag: "Leadership",
			title: "The calm founder operating model",
			desc: "How high-end teams build clarity at scale.",
		},
	];

	return (
		<section className="mx-auto max-w-[1400px] px-6 pb-12 section">
			<div className="flex items-center justify-between mb-6">
				<h2 className="font-[var(--font-heading)] max-w-[12rem] md:max-w-lg tracking-[-0.02em] text-3xl">
					Featured stories
				</h2>
				<button
					type="button"
					className="rounded-full border border-accent/30 px-4 py-2 text-sm font-medium text-accent hover:bg-accent/5"
				>
					View archive
				</button>
			</div>

			<div className="grid lg:grid-cols-3 gap-6">
				{cards.map((c) => (
					<article
						key={c.title}
						className="rounded-3xl p-6 space-y-4 bg-white/75 border border-black/10"
					>
						<div className="h-54 rounded-2xl overflow-hidden bg-gradient-to-br from-[#efe9ff] to-[#e1d6ff] relative">
							<Image
								src={c.img}
								alt={c.alt}
								fill
								className="object-cover"
								sizes="(max-width: 1024px) 100vw, 33vw"
								priority={false}
							/>
						</div>

						<p className="text-xs uppercase text-accent">
							{c.tag}
						</p>
						<h3 className="font-[var(--font-heading)] tracking-[-0.02em] text-xl">
							{c.title}
						</h3>
						<p className="text-sm text-gray-500">{c.desc}</p>
					</article>
				))}
			</div>
		</section>
	);
}
