import React from "react";
import Button from "./button";

export default function WhyChooseUs() {
	return (
		<section id="why" className="section">
			<div className="max-w-[1400px] mx-auto px-6">
				<div className="text-left mb-10">
					<h2 className="text-3xl">Why choose us</h2>
				</div>
				<div className="grid lg:grid-cols-[1.5fr_1fr] gap-4 items-stretch">
					<div className="relative overflow-hidden border border-black/10 rounded-[18px] p-10 flex flex-col justify-between min-h-[380px]">
						<img
							src="/bentobg.svg"
							alt="Decorative background pattern"
							className="absolute inset-0 w-full h-full object-cover -z-10 opacity-90"
							loading="lazy"
						/>
						<div className="space-y-6">
							<p className="text-xs uppercase text-black/60">Why Inspo.</p>
							<h2 className="text-3xl lg:text-4xl leading-tight">
								Luxury-grade learning built for founders who demand clarity.
							</h2>
						</div>
						<div className="flex items-end justify-between">
							<Button variant="black">Explore Courses</Button>
							<div className="hidden md:flex h-32 w-32 rounded-[18px] bg-black/5 border border-black/10 items-center justify-center text-4xl">
								◈
							</div>
						</div>
					</div>
					<div className="grid grid-rows-[1.1fr_0.9fr] gap-4">
						<div className="bg-[#ffc567] rounded-[18px] p-8 flex flex-col justify-between min-h-[190px]">
							<div>
								<p className="text-xs uppercase text-NALCK">Luxury metrics</p>
							</div>
							<div className="flex items-end justify-between">
								<h3 className="text-2xl">97% course satisfaction.</h3>
								<div className="h-20 w-20 rounded-[18px] bg-gradient-to-br from-[#e7ddff] via-[#f6f1ff] to-white"></div>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-4">
							<div className="bg-[#d9f8b0] rounded-[18px] p-6 flex flex-col justify-between min-h-[190px]">
								<div className="flex items-center justify-between">
									<p className="text-xs uppercase text-ink">
										About
									</p>
									<span className="text-lg">↗</span>
								</div>
								<h4 className="text-xl">Founder story</h4>
							</div>
							<div className="bg-[#ffae8e] rounded-[18px] p-6 flex flex-col justify-between min-h-[190px]">
								<div className="flex items-center justify-between">
									<p className="text-xs uppercase text-[#1a1a1f]">
										Support
									</p>
									<span className="text-lg">↗</span>
								</div>
								<h4 className="text-xl">Get guidance</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
