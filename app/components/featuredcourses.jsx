"use client"

import React from "react";
import Anchor from "./anchor";

const COURSES = [
	{
		title: "Game Design: Idea to Prototype",
		image: "/gamecourse.png",
		description:
			"Turn mechanics into something playable—with a clean loop and feedback.",
		lessons: "12 lessons • Project included",
		href: "single-course.html",
	},
	{
		title: "Visual Systems for Modern Brands",
		image: "/graphicscourse.png",
		description:
			"Build a brand kit you can reuse: type, color, grids, and rules.",
		lessons: "10 lessons • 2 templates",
		href: "single-course.html",
	},
	{
		title: "Analytics for Founders",
		image: "/datacourse.png",
		description:
			"Go from messy data to decisions with dashboards that make sense.",
		lessons: "9 lessons • 1 capstone",
		href: "single-course.html",
	},
];

export default function FeaturedCourses() {
  return (
		<section id="courses" className="max-w-[1300px] mx-auto px-6 pt-24 pb-20">
			<div className="flex items-center justify-between mb-10">
				<h2 className="text-2xl lg:text-6xl leading-tight">Featured Courses</h2>
				<a
					className="px-5 py-2 rounded-full text-xs border border-accent/25 text-accent hover:bg-accent hover:text-white transition-colors"
					href="courses.html"
				>
					View All
				</a>
			</div>

			<div className="grid md:grid-cols-3 gap-6">
				{COURSES.map((course) => (
					<div
						key={course.title}
						className="card rounded-2xl p-6 space-y-4 bg-white/80 border border-accent/10"
					>
						<div className="h-44 rounded-2xl overflow-hidden bg-slate-100">
							<img
								src={course.image}
								alt={course.title}
								className="h-full w-full object-cover"
							/>
						</div>
						<h3 className="text-xl">{course.title}</h3>
						<p className="text-sm text-ink/60">{course.description}</p>
						<div className="flex items-center justify-between text-sm text-ink/70">
							<span>{course.lessons}</span>
							<a href={course.href} className="text-accent font-semibold">
								Learn more
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
