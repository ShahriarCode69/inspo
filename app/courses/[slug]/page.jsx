import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { courses, getCourseBySlug } from "../../../data/courseData";

export function generateStaticParams() {
	return courses.map((course) => ({ slug: course.slug }));
}

export default async function SingleCoursePage({ params }) {
	const resolvedParams = await params;
	const course = getCourseBySlug(resolvedParams.slug);

	if (!course) {
		notFound();
	}

	const {
		title,
		subtitle,
		category,
		badge,
		media,
		stats,
		purchase,
		meta,
		instructor,
		outcomes,
		curriculum,
		reviews,
	} = course;

	return (
		<main className="mx-auto mt-38 max-w-6xl px-4 py-12">
			<div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-slate-600">
				<Link href="/courses" className="text-slate-600 hover:text-slate-900">
					Back to courses
				</Link>
				<span className="text-slate-300">/</span>
				<span className="text-accent">{category}</span>
				{badge ? (
					<span className="rounded-full bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
						{badge}
					</span>
				) : null}
			</div>

			<div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
				<section className="space-y-12">
					<div className="space-y-6">
						<div>
							<p className="text-xs uppercase text-accent">
								{badge ?? "Course"}
							</p>
							<h1 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
								{title}
							</h1>
							<p className="mt-4 text-base text-slate-600 sm:text-lg">
								{subtitle}
							</p>
						</div>

						<div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
							<span>
								Instructor:{" "}
								<span className="font-semibold text-slate-900">
									{instructor?.name}
								</span>
							</span>
							<span>
								{stats?.rating} stars ({stats?.reviewCount} reviews)
							</span>
							<span>{stats?.lessonsCount} lessons</span>
							<span>{stats?.durationHours} hours</span>
						</div>

						<div className="flex flex-wrap gap-3">
							<button
								type="button"
								className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent/50"
							>
								{purchase?.primaryCtaLabel ?? "Enroll now"}
							</button>
							<button
								type="button"
								className="rounded-full border border-black px-6 py-3 text-sm font-semibold text-black transition hover:border-black"
							>
								{purchase?.secondaryCtaLabel ?? "Watch preview"}
							</button>
						</div>
					</div>

					<div className="rounded-3xl border border-slate-100 bg-white p-6">
						<h2 className="text-xl font-semibold text-slate-950">
							What you will learn
						</h2>
						<ul className="mt-4 space-y-2 text-sm text-slate-600">
							{outcomes?.whatYouWillLearn?.map((item) => (
								<li key={item} className="flex gap-2">
									<span className="mt-1 h-2 w-2 rounded-full bg-accent" />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>

					<div className="rounded-3xl border border-slate-100 bg-white p-6">
						<h2 className="text-xl font-semibold text-slate-950">
							Who this course is for
						</h2>
						<ul className="mt-4 space-y-2 text-sm text-slate-600">
							{outcomes?.whoThisCourseIsFor?.map((item) => (
								<li key={item} className="flex gap-2">
									<span className="mt-1 h-2 w-2 rounded-full bg-slate-400" />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>

					<div className="grid gap-6 lg:grid-cols-2">
						<div className="rounded-3xl border border-slate-100 bg-white p-6">
							<h2 className="text-xl font-semibold text-slate-950">
								Requirements
							</h2>
							<ul className="mt-4 space-y-2 text-sm text-slate-600">
								{outcomes?.requirements?.map((item) => (
									<li key={item} className="flex gap-2">
										<span className="mt-1 h-2 w-2 rounded-full bg-slate-300" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>

						<div className="rounded-3xl border border-slate-100 bg-white p-6">
							<h2 className="text-xl font-semibold text-slate-950">
								Certificates & outcomes
							</h2>
							<ul className="mt-4 space-y-2 text-sm text-slate-600">
								{outcomes?.certificatesAndOutcomes?.map((item) => (
									<li key={item} className="flex gap-2">
										<span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-slate-950">
							Course curriculum
						</h2>
						<div className="mt-6 grid gap-4 md:grid-cols-2">
							{curriculum?.map((module) => (
								<div
									key={module.moduleNumber}
									className="rounded-2xl border border-slate-100 bg-white p-5"
								>
									<p className="text-sm text-slate-500">
										Module {module.moduleNumber}
									</p>
									<h3 className="mt-2 text-lg font-semibold text-slate-950">
										{module.title}
									</h3>
									<p className="mt-2 text-sm text-slate-600">
										{module.description}
									</p>
								</div>
							))}
						</div>
					</div>

					<div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
						<div className="rounded-3xl border border-slate-100 bg-white p-6">
							<h2 className="text-xl font-semibold text-slate-950">Instructor</h2>
							<p className="mt-4 text-lg font-semibold text-slate-950">
								{instructor?.name}
							</p>
							<p className="text-sm text-slate-500">
								{instructor?.role} - {instructor?.company}
							</p>
							<p className="mt-4 text-sm text-slate-600">
								{instructor?.bio}
							</p>
						</div>

						<div className="rounded-3xl border border-slate-100 bg-white p-6">
							<h2 className="text-xl font-semibold text-slate-950">Reviews</h2>
							<div className="mt-4 space-y-4">
								{reviews?.map((review) => (
									<div key={review.name} className="rounded-2xl bg-slate-50 p-4">
										<p className="text-sm text-slate-700">"{review.quote}"</p>
										<p className="mt-2 text-xs text-slate-500">
											{review.name}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				<aside className="lg:sticky lg:top-8 lg:h-fit">
					<div className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm">
						<div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-accent/5">
							{media?.coverImage ? (
								<Image
									src={media.coverImage}
									alt={media.coverAlt ?? title}
									fill
									className="object-cover"
									sizes="(max-width: 1024px) 100vw, 33vw"
								/>
							) : null}
						</div>

						<div className="mt-4 flex items-center justify-between text-xs text-slate-500">
							<span>{stats?.lessonsCount} lessons</span>
							<span>{stats?.durationHours} hours</span>
						</div>

						<div className="mt-5 grid gap-3">
							<div className="rounded-2xl border border-violet-100 px-4 py-3">
								<p className="text-xs uppercase tracking-wide text-accent">
									Access
								</p>
								<p className="text-sm font-semibold text-slate-950">
									{meta?.access}
								</p>
							</div>
							<div className="rounded-2xl border border-violet-100 px-4 py-3">
								<p className="text-xs uppercase tracking-wide text-accent">
									Format
								</p>
								<p className="text-sm font-semibold text-slate-950">
									{meta?.format}
								</p>
							</div>
							<div className="rounded-2xl border border-violet-100 px-4 py-4">
								<p className="text-xs uppercase tracking-wide text-accent">
									Price
								</p>
								<p className="text-2xl font-semibold text-slate-950">
									${stats?.priceUSD}
								</p>
							</div>
						</div>

						<div className="mt-5 space-y-3">
							<button
								type="button"
								className="w-full rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent/50"
							>
								{purchase?.stickyCtaLabel ?? "Enroll now"}
							</button>
							<button
								type="button"
								className="w-full rounded-full border border-black px-5 py-3 text-sm font-semibold text-black transition hover:border-black"
							>
								{purchase?.shareLabel ?? "Share syllabus"}
							</button>
						</div>
					</div>
				</aside>
			</div>
		</main>
	);
}
