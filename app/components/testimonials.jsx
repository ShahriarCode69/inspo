import React from 'react'
import Image from 'next/image'

const TESTIMONIALS = [
	{
		text:
			'Æ’?oTormentos feels like a private atelier. Every lesson is cinematic and actionable.Æ’??',
		name: 'Arielle Young',
		role: 'Founder, Lumina',
		image: '/review1.png',
	},
	{
		text:
			'Æ’?oThe templates alone paid for the membership. It feels premium and calm.Æ’??',
		name: 'Jules Ortega',
		role: 'Product Lead, Halcyon',
		image: '/review2.png',
	},
	{
		text: 'Æ’?oLuxury clarity in every module. The visuals are stunning.Æ’??',
		name: 'Camille Roe',
		role: 'Design Lead, Violette',
		image: '/review3.png',
	},
	{
		text:
			'Æ’?oI shipped a premium product in weeks. The guidance is crisp.Æ’??',
		name: 'Noah Sato',
		role: 'Founder, Atlas',
		image: '/review4.png',
	},
	{
		text:
			'Æ’?oThe storytelling frameworks helped us raise with confidence.Æ’??',
		name: 'Sienna Park',
		role: 'CEO, Northlight',
		image: '/review5.png',
	},
	{
		text: 'Æ’?oMinimal, elegant, and highly practical. A founderÆ’?Ts dream.Æ’??',
		name: 'Leo Marin',
		role: 'Product Strategist',
		image: '/review1.png',
	},
]

export default function Testimonials() {
	return (
		<section
			id="testimonials"
			className="max-w-[1400px] section mx-auto px-6 pb-20 overflow-x-hidden"
		>
			<div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-center">
				<div className="text-center lg:text-left space-y-4">
					<p className="text-xs font-semibold uppercase tracking-wide text-accent">
						Success stories
					</p>
					<h2 className="text-4xl leading-tight">
						Loved by founders worldwide.
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
	)
}
