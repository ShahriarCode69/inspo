import React from 'react'
import Button from './button';

export default function BlogHero() {
	return (
		<section className="mx-auto max-w-[1400px] pb-12">
			<div className="rounded-[36px] p-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
				<div>
					<p className="text-xs uppercase text-accent mb-3">
						Course Studio Journal
					</p>

					<h1 className="font-[var(--font-heading)] mb-4 tracking-[-0.02em] text-4xl lg:text-5xl">
						Guides, playbooks, and stories for course creators.
					</h1>

					<p className="text-gray-600 mt-3 mb-16">
						Practical advice on course design, launches, marketing, and student
						success.
					</p>

					<div className="mt-6 flex flex-wrap gap-3">
						<Button variant='black'>Browse articles</Button>
						<Button variant="ghost">Get weekly tips</Button>
					</div>
				</div>

				<div className="h-84 rounded-3xl bg-gradient-to-br from-[#e9ddff] via-[#f6f1ff] to-white flex items-center justify-center text-6xl">
					LEARN
				</div>
			</div>
		</section>
	);
}

