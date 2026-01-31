import React from "react";
import Image from "next/image";
import Button from "./button";
import Stats from "./stats";

export default function Hero() {
	return (
		<section className="relative h-full w-full overflow-hidden">
			{/* Background Image */}
			<Image
				src="/herobg.svg"
				alt="Hero background"
				fill
				priority
				className="object-cover -z-10"
			/>

			{/* Content */}
			<div className="max-w-[1400px] mx-auto h-auto py-46 px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
				{/* Left */}
				<div className="space-y-8">
					<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass font-semibold text-sm uppercase">
						<span className="w-2 h-2 rounded-full bg-accent" />
						PREMIUM SKILL STUDIO
					</div>

					<h1 className="text-4xl lg:text-6xl leading-tight">
						Build your future with curated{" "}
						<span className="serif-text">digital mastery.</span>
					</h1>

					<p className="text-lg text-ink/70 max-w-xl">
						A curated marketplace of modern skills—taught by people who actually
						ship. Short lessons. Real projects. Outcomes you can show.
					</p>

					<div className="flex flex-wrap items-center gap-4">
						<Button href='/courses'>Explore Courses</Button>
					</div>

					<div className="flex items-center gap-6 text-sm text-ink/60">
						<div className="flex items-center gap-2">
							<span className="text-accent">★</span>
							4.9/5 Premium ratings
						</div>
						<div className="flex items-center gap-2">
							<span className="text-accent">●</span>
							120k+ learners
						</div>
					</div>
				</div>

				{/* Right */}
				<div className="relative">
					<div className="bg-white rounded-xl p-6 grid gap-6">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-xs uppercase tracking-[0.3em] text-ink">
									Featured
								</p>
								<h3 className="text-2xl">Ultimate Figma Fundamentals</h3>
							</div>
						</div>

						<div className="h-48 rounded-3xl bg-white flex items-center justify-center text-6xl">
							<img
								src="/featuredcourse.png"
								alt=""
								className="rounded-3xl w-full h-full object-cover"
							/>
						</div>

						<div className="flex items-center justify-between text-sm">
							<span className="">6 modules • 18 lessons</span>
							<span className="text-ink font-medium">View details</span>
						</div>
					</div>

					<div className="absolute hidden md:block -top-6 right-6 bg-[#f3fbff]/50 border-2 border-white/40 backdrop-blur-sm rounded-xl p-4 w-44 floating-delay">
						<p className="text-xs uppercase tracking-[0.3em] text-ink">
							Mentors
						</p>
						<div className="flex -space-x-2 mt-2">
							<img
								src="/avatar1.jpg"
								className="w-8 h-8 object-cover rounded-full bg-accent/40"
							/>
							<img
								src="/avatar2.jpg"
								className="w-8 h-8 rounded-full bg-accent/60"
							/>
							<img
								src="/avatar3.jpg"
								className="w-8 h-8 rounded-full bg-accent/80"
							/>
						</div>
					</div>
				</div>
			</div>
			<Stats />
		</section>
	);
}
