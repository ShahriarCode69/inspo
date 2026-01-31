import React from "react";
import Button from "./button";
import Image from "next/image";

export default function WhyChooseUs() {
	return (
		<section id="why" className="section">
			<div className="max-w-[1400px] mx-auto px-6">
				<div className="text-left mb-10">
					<h2 className="text-4xl lg:text-6xl leading-tight">Why choose us</h2>
				</div>
				<div className="grid lg:grid-cols-[1.5fr_1fr] gap-4 items-stretch">
					<div className="relative overflow-hidden border border-black/10 rounded-[18px] p-10 flex flex-col justify-between min-h-[380px]">
						<img
							src="/bentobg.png"
							alt="Decorative background pattern"
							className="absolute inset-0 w-full h-full object-cover -z-10 opacity-90"
							loading="lazy"
						/>
						<div className="space-y-6">
							<p className="text-xs uppercase text-black/60">Why Inspo.</p>
							<h2 className="text-3xl lg:text-5xl max-w-xl leading-tight">
								Designed for people who hate fluff.
							</h2>
						</div>
						<div className="flex items-end justify-between">
							<Button variant="black" href="/courses">Explore Courses</Button>
							<div className="hidden md:flex h-32 w-45 rounded-[18px] items-center justify-center text-4xl">
								<img src="/bentoicon1.png" alt="" />
							</div>
						</div>
					</div>
					<div className="grid grid-rows-[1.1fr_0.9fr] gap-4">
						<div className="bg-black rounded-[18px] p-8 flex flex-col justify-between min-h-[190px]">
							<div>
								<p className="text-xs uppercase text-white">Success metrics</p>
							</div>
							<div className="flex items-end justify-between">
								<h3 className="text-2xl text-white">
									97% course satisfaction.
								</h3>
								<Image src="/bentoicon2.png" alt="image" width={100} height={48}/>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-4">
							<div className="bg-black rounded-[18px] p-6 flex flex-col justify-between min-h-[190px]">
								<div className="flex items-center justify-between">
									<p className="text-xs text-white uppercase">Founder story</p>
									<span className="text-lg text-white">↗</span>
								</div>
								<h4 className="text-xl text-white">Why we built Inspo</h4>
							</div>
							<div className="bg-gradient-to-br from-[#E3EF26] from-[0%] via-[#076653] via-[78%] to-[#0C342C] to-[100%] rounded-[18px] p-6 flex flex-col justify-between min-h-[190px]">
								<div className="flex items-center justify-between">
									<p className="text-xs uppercase text-black">Support</p>
									<span className="text-lg">↗</span>
								</div>
								<h4 className="text-xl text-white">Get guidance</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
