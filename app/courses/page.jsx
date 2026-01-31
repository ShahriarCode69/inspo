import CourseCard from "../components/coursecard";
import { courses } from "../../data/courseData";

export default function CoursesPage() {
	return (
		<main className="mx-auto mt-38 max-w-6xl px-4 py-10">
			<header className="mb-8">
				<h1 className="text-4xl lg:text-6xl leading-tight">Courses</h1>
				<p className="mt-2 text-slate-600">
					Browse our courses and pick the one that fits your goals.
				</p>
			</header>

			<section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{courses.map((course) => (
					<CourseCard key={course.id} course={course} />
				))}
			</section>
		</main>
	);
}
