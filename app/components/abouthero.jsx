// components/abouthero.jsx
"use client";

import React from "react";
import { IoBookSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";

const AboutHero = () => {
	return (
		<section className="w-full">
			<div className="mx-auto section max-w-[1400px] px-6 pt-12">
				{/* Top label */}
				<p className="text-center mt-12 text-lg text-accent">About</p>
				<h1 className="mx-auto md:mt-6 max-w-[1000px] text-left !font-regular tracking-[-0.03em] text-black text-[44px] leading-[1.08] sm:text-[56px] sm:leading-[1.06] lg:text-5xl lg:leading-[1.15]">
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
					&nbsp; &nbsp; We offer a great learning{"    "}
					<span className="text-black/20">
						experience for all skill levels, with expert-led courses and simple
						enrollment.
					</span>{" "}
					Whether for fun or growth, Inspo promises real projects and lasting
					skills.
				</h1>

				{/* Bottom row */}
				<div className="mt-16 flex items-end justify-between">
					{/* Left images */}
					<div className="flex items-end gap-6">
						<div className="h-[120px] w-[190px] overflow-hidden rounded-[14px]">
							<img
								src="https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=900&q=80"
								alt="Golf ball on grass"
								className="h-full w-full object-cover"
								draggable="false"
							/>
						</div>

						<div className="h-[120px] w-[190px] overflow-hidden rounded-[14px]">
							<img
								src="https://images.unsplash.com/photo-1531315630201-bb15abeb1653?auto=format&fit=crop&w=900&q=80"
								alt="Golf coaching"
								className="h-full w-full object-cover"
								draggable="false"
							/>
						</div>
					</div>

					{/* Right icon pills */}
					<div className="flex items-end gap-8">
						<IconItem icon={<IoBookSharp size={22} />} label="Unwind" />
						<IconItem icon={<MdWork size={22} />} label="Play" />
						<IconItem icon={<FaMoneyBillWave size={22} />} label="Games" />
						<IconItem icon={<FaRepeat size={22} />} label="Course" />
					</div>
				</div>

				{/* spacing like reference */}
				<div className="h-10" />
			</div>
		</section>
	);
};

const IconItem = ({ icon, label }) => {
	return (
		<div className="flex flex-col items-center">
			<div className="h-[56px] w-[56px] rounded-full bg-white/70 border border-black/10 flex items-center justify-center text-black/70">
				{icon}
			</div>
			<p className="mt-3 text-[14px] text-black/70">{label}</p>
		</div>
	);
};

export default AboutHero;
