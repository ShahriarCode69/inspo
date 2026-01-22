import React from "react";

const COURSES = [
  {
    title: "Game Design Fundamentals",
    image: "/gamecourse.png",
    description:
      "Prototype mechanics, build levels, and ship a polished playable demo.",
    lessons: "12 lessons",
    href: "single-course.html",
  },
  {
    title: "Graphics & Visual Systems",
    image: "/graphicscourse.png",
    description:
      "Shape brand identities with typography, color systems, and layout craft.",
    lessons: "10 lessons",
    href: "single-course.html",
  },
  {
    title: "Data Analytics Studio",
    image: "/datacourse.png",
    description:
      "Clean datasets, uncover insights, and present dashboards that persuade.",
    lessons: "9 lessons",
    href: "single-course.html",
  },
];

export default function FeaturedCourses() {
  return (
    <section id="courses" className="max-w-[1300px] mx-auto px-6 pt-24 pb-20">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl">Featured Courses</h2>
        <a
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-accent/25 text-accent hover:bg-accent hover:text-white transition-colors"
          href="courses.html"
        >
          View all
          <span className="text-base leading-none">-&gt;</span>
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
