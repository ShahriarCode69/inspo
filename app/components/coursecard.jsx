import Link from "next/link";
import Image from "next/image";

export default function CourseCard({ course }) {
	const { slug, category, title, stats, media } = course;

	return (
		<article className="rounded-xl border border-violet-100 bg-white p-4 shadow-sm">
			<Link href={`/courses/${slug}`} className="block">
				<div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-lg bg-accent/20">
					{/* If you don’t have an image yet, keep the bg only */}
					{media?.coverImage ? (
						<Image
							src={media.coverImage}
							alt={media.coverAlt ?? title}
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 33vw"
							priority={false}
						/>
					) : null}
				</div>

				<div className="mb-2 flex items-center justify-between">
					<span className="text-sm text-accent">{category}</span>
					<span className="text-sm text-slate-800">{stats.rating} ★</span>
				</div>

				<h3 className="text-lg font-semibold text-slate-950">{title}</h3>

				<p className="mt-2 text-sm text-slate-600">
					{stats.lessonsCount} lessons • ${stats.priceUSD}
				</p>
			</Link>
		</article>
	);
}
