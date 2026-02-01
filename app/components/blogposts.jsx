
import Image from 'next/image';
import React from 'react'

export default function BlogPosts() {

	const posts = [
    {
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80",
      alt: "Curriculum planning",
      tag: "Course Design",
      title: "Build a curriculum that sells itself",
      desc: "Turn outcomes into modules, lessons, and projects.",
      bg: "from-[#f2ecff] to-[#d9ccff]",
    },
    {
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
      alt: "Launch planning",
      tag: "Launch",
      title: "A 14-day launch checklist",
      desc: "Emails, landing pages, and live sessions in one flow.",
      bg: "from-[#f7f2ff] to-[#e3d8ff]",
    },
    {
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
      alt: "Pricing analysis",
      tag: "Pricing",
      title: "Price your course with confidence",
      desc: "Simple frameworks for tiering, scholarships, and upsells.",
      bg: "from-[#efe9ff] to-[#dcd4ff]",
    },
    {
      img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
      alt: "Onboarding",
      tag: "Retention",
      title: "Reduce refunds with better onboarding",
      desc: "Set expectations and deliver quick wins in week one.",
      bg: "from-[#f3ecff] to-[#e5ddff]",
    },
  ];


	return (
		<section className="mx-auto max-w-[1400px] px-6 pb-16">
			<div className="grid md:grid-cols-2 gap-6">
				{posts.map((p) => (
					<article
						key={p.title}
						className="rounded-3xl p-6 bg-white/75 border border-black/10 flex flex-col lg:flex-row gap-6"
					>
						<div
							className={`h-40 lg:h-44 lg:w-56 rounded-2xl overflow-hidden bg-gradient-to-br ${p.bg} relative shrink-0`}
						>
							<Image
								src={p.img}
								alt={p.alt}
								fill
								className="object-cover"
								sizes="(max-width: 1024px) 100vw, 240px"
							/>
						</div>

						<div className="space-y-2">
							<p className="text-xs uppercase text-accent">
								{p.tag}
							</p>
							<h3 className="font-[var(--font-heading)] tracking-[-0.02em] text-xl">
								{p.title}
							</h3>
							<p className="text-sm text-gray-500">{p.desc}</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
