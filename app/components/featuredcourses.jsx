"use client";

import Link from "next/link";

const COURSES = [
	{
		title: "Figma UI Design Masterclass",
		image: "/courses/figmacourse.png",
		description:
			"Design modern interfaces, build component libraries, and ship polished UI systems.",
		lessons: "24 lessons • 9 hours",
		href: "/courses/figma-ui-design-masterclass",
	},
	{
		title: "Excel to Power BI Dashboarding",
		image: "/courses/excelcourse.png",
		description:
			"Move from spreadsheets to interactive dashboards with Power BI and DAX basics.",
		lessons: "18 lessons • 7 hours",
		href: "/courses/excel-to-power-bi-dashboarding",
	},
	{
		title: "Become a JavaScript Pro",
		image: "/courses/javascriptcourse.png",
		description:
			"Master modern JavaScript fundamentals: async/await, arrays, objects, and patterns.",
		lessons: "28 lessons • 11 hours",
		href: "/courses/javascript-modern-fundamentals",
	},
];

export default function FeaturedCourses() {
	return (
		<section id="courses" className="max-w-[1300px] mx-auto px-6 pt-24 pb-20">
			<div className="flex items-center justify-between mb-10">
				<h2 className="text-2xl lg:text-6xl leading-tight">Featured Courses</h2>
				<Link
					className="px-5 py-2 rounded-full text-xs border border-accent/25 text-accent hover:bg-accent hover:text-white transition-colors"
					href="/courses"
				>
					View All
				</Link>
			</div>

			<div className="grid md:grid-cols-3 gap-6">
				{COURSES.map((course) => (
					<div
						key={course.title}
						className="card rounded-2xl p-6 space-y-4 bg-white/80 border border-accent/10"
					>
						<div className="h-56 rounded-2xl overflow-hidden bg-slate-100">
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
							<Link href={course.href} className="text-accent font-semibold">
								Learn more
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
