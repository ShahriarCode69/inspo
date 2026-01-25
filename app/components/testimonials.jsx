import React from 'react'
import Image from 'next/image'

const TESTIMONIALS = [
	{
		text: "The UI/UX course helped me build two clean case studies and finally understand grids, spacing, and design systems.",
		name: "Arielle Young",
		role: "Designer, Lumina",
		image: "/review1.png",
	},
	{
		text: "I built and deployed my first full website during the course—HTML/CSS finally felt simple.",
		name: "Jules Ortega",
		role: "Frontend-Dev, Halcyon",
		image: "/review2.png",
	},
	{
		text: "I finished a playable prototype for the first time. The course made game loops and movement logic click.",
		name: "Camille Roe",
		role: "Game Dev, Violette",
		image: "/review3.png",
	},
	{
		text: "My edits look cleaner now—better pacing, better cuts, and way better audio.",
		name: "Noah Sato",
		role: "Video Editor, Atlas",
		image: "/review4.png",
	},
	{
		text: "The course made concepts like overfitting and validation actually click—my models improved immediately.",
		name: "Sienna Park",
		role: "ML Engineer, Northlight",
		image: "/review5.png",
	},
	{
		text: "I can now write a complete analysis report with conclusions, not just graphs.",
		name: "Leo Marin",
		role: "Data Analyst, Dataloo",
		image: "/review1.png",
	},
];

export default function Testimonials() {
	return (
		<section
			id="testimonials"
			className="max-w-[1400px] section mx-auto px-6 pb-20 overflow-x-hidden"
		>
			<div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-center">
				<div className="text-center lg:text-left space-y-4">
					<p className="text-sm font-semibold uppercase tracking-wide text-accent">
						Success stories
					</p>
					<h2 className="text-4xl lg:text-6xl leading-15">
						Loved by founders <span className='serif-text'>worldwide.</span>
					</h2>
				</div>
				<div className="relative overflow-hidden testimonial-fade">
					<div className="testimonial-track">
						{[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
							<div
								key={`${testimonial.name}-${index}`}
								className="bg-white rounded-2xl p-6 min-w-[320px] border border-accent/10"
							>
								<p className="text-sm">{testimonial.text}</p>
								<div className="mt-4 flex items-center gap-3">
									<Image
										src={testimonial.image}
										alt={`${testimonial.name} avatar`}
										width={40}
										height={40}
										className="w-10 h-10 rounded-full object-cover"
										priority={index < TESTIMONIALS.length}
									/>
									<div>
										<p className="text-sm font-medium">{testimonial.name}</p>
										<p className="text-xs text-gray-500">{testimonial.role}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
