import React from 'react'
import Button from './button';

export default function CTA() {
	return (
		<section className="max-w-6xl section mx-auto px-6 pb-24">
			<div className="relative overflow-hidden rounded-2xl min-h-[320px] flex items-center justify-center text-center">
				<img
					src="/ctabg.jpg"
					alt="Studio backdrop"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-black/30"></div>
				<div className="relative z-10 px-6 py-16 space-y-6">
					<h2 className="text-3xl lg:text-5xl text-white">
						Join the luxury learning movement.
					</h2>
					<Button>
						Become a Member
					</Button>
				</div>
			</div>
		</section>
	);
}
