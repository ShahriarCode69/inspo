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
					<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass text-sm uppercase">
						<span className="w-2 h-2 rounded-full bg-accent" />
						Luxury learning studio
					</div>

					<h1 className="text-4xl lg:text-6xl leading-tight">
						Build your future with curated{" "}
						<span className="serif-text">digital mastery.</span>
					</h1>

					<p className="text-lg text-ink/70 max-w-xl">
						Inspo by Leuco is a premium course marketplace for founders and
						creators. Learn, launch, and scale with design-forward experiences
						and elite instructors.
					</p>

					<div className="flex flex-wrap items-center gap-4">
						<Button>Explore Courses</Button>
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
								<h3 className="text-2xl">The Luxury Product Stack</h3>
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

					<div className="absolute -top-6 right-6 bg-[#f3fbff]/50 border-2 border-white/40 backdrop-blur-sm rounded-xl p-4 w-44 floating-delay">
						<p className="text-xs uppercase tracking-[0.3em] text-ink">
							Mentors
						</p>
						<div className="flex -space-x-2 mt-2">
							<img
								src="https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/566272928_1465357018648361_8222998112345260632_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=irwyhnQF_-cQ7kNvwHTC8_F&_nc_oc=AdknGOseE7zKTBw1Jqq_EuxZE5TiVQr2YD3vnfD3is8KqJWzITwOJkP0yUUH3nugfGE&_nc_zt=23&_nc_ht=scontent.fdac80-1.fna&_nc_gid=gt6FY04g1_YccXB4OR2FcA&oh=00_AfqCVsJQtjjO721At1N49zYbRX5vBJvBxcJmFj1NZZRSKQ&oe=69751AE8"
								className="w-8 h-8 rounded-full bg-accent/40"
							/>
							<img
								src="https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/566272928_1465357018648361_8222998112345260632_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=irwyhnQF_-cQ7kNvwHTC8_F&_nc_oc=AdknGOseE7zKTBw1Jqq_EuxZE5TiVQr2YD3vnfD3is8KqJWzITwOJkP0yUUH3nugfGE&_nc_zt=23&_nc_ht=scontent.fdac80-1.fna&_nc_gid=gt6FY04g1_YccXB4OR2FcA&oh=00_AfqCVsJQtjjO721At1N49zYbRX5vBJvBxcJmFj1NZZRSKQ&oe=69751AE8"
								className="w-8 h-8 rounded-full bg-accent/60"
							/>
							<img
								src="https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/566272928_1465357018648361_8222998112345260632_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=irwyhnQF_-cQ7kNvwHTC8_F&_nc_oc=AdknGOseE7zKTBw1Jqq_EuxZE5TiVQr2YD3vnfD3is8KqJWzITwOJkP0yUUH3nugfGE&_nc_zt=23&_nc_ht=scontent.fdac80-1.fna&_nc_gid=gt6FY04g1_YccXB4OR2FcA&oh=00_AfqCVsJQtjjO721At1N49zYbRX5vBJvBxcJmFj1NZZRSKQ&oe=69751AE8"
								className="w-8 h-8 rounded-full bg-accent/80"
							/>
						</div>
					</div>
				</div>
			</div>
			<Stats/>
		</section>
	);
}
