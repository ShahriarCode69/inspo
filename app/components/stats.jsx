"use client";

import { useEffect } from "react";

const STATS = [
	{
		value: 120,
		format: "k",
		suffix: "+",
		label: "Learners building weekly",
	},
	{
		value: 320,
		format: "number",
		suffix: "+",
		label: "Courses with projects",
	},
	{
		value: 92,
		format: "percent",
		label: "Finish rate",
	},
];

export default function Stats() {
	useEffect(() => {
		const stats = document.querySelectorAll(".stat-number");

		stats.forEach((stat) => {
			const target = Number(stat.dataset.target);
			const format = stat.dataset.format;
			const suffix = stat.dataset.suffix || "";
			let current = 0;

			const increment = target / 60;

			const update = () => {
				current += increment;

				if (current >= target) current = target;

				let value = Math.floor(current);

				if (format === "k") value = `${value}k`;
				if (format === "percent") value = `${value}%`;

				stat.textContent = value + suffix;

				if (current < target) {
					requestAnimationFrame(update);
				}
			};

			update();
		});
	}, []);

	return (
		<section className="max-w-6xl mx-auto px-6 pb-20">
			<div className="grid md:grid-cols-3 gap-6">
				{STATS.map((stat, index) => (
					<div key={index} className="bg-white rounded-3xl px-6 py-10">
						<p className="text-4xl font-semibold">
							<span
								className="stat-number"
								data-target={stat.value}
								data-format={stat.format}
								data-suffix={stat.suffix || ""}
							>
								0
							</span>
						</p>
						<p className="mt-2 text-sm text-gray-500">{stat.label}</p>
					</div>
				))}
			</div>
		</section>
	);
}
