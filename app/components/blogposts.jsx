
import Image from 'next/image';
import React from 'react'

export default function BlogPosts() {

	const posts = [
    {
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80",
      alt: "Workspace",
      tag: "Strategy",
      title: "Luxury positioning playbook",
      desc: "Build premium narratives that resonate with investors.",
      bg: "from-[#f2ecff] to-[#d9ccff]",
    },
    {
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
      alt: "Teamwork",
      tag: "Culture",
      title: "Designing calm founder rituals",
      desc: "Daily routines to keep your team aligned.",
      bg: "from-[#f7f2ff] to-[#e3d8ff]",
    },
    {
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
      alt: "Analytics",
      tag: "Analytics",
      title: "Measuring premium engagement",
      desc: "Signals to monitor in high-end funnels.",
      bg: "from-[#efe9ff] to-[#dcd4ff]",
    },
    {
      img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
      alt: "Creative",
      tag: "Brand",
      title: "Signature visual narratives",
      desc: "Crafting visual systems with luxury cues.",
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
