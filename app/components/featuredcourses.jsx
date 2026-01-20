import React from "react";

const COURSES = [
  {
    title: "Startup Design Atelier",
    badge: "F-Z",
    gradient: "from-[#e6fff6] via-[#ccffe8] to-[#c2f1dc]",
    description: "Craft signature products with UX depth and visual luxury.",
    lessons: "12 lessons",
    href: "single-course.html",
  },
  {
    title: "Growth & Revenue Studio",
    badge: "F-?",
    gradient: "from-[#e5fbff] via-[#c8fff1] to-[#bdf2e5]",
    description: "Data-driven strategies with premium brand storytelling.",
    lessons: "9 lessons",
    href: "single-course.html",
  },
  {
    title: "Creative Leadership",
    badge: "F-?",
    gradient: "from-[#f0fff6] via-[#d4ffea] to-[#c9f2de]",
    description: "Lead teams, launch projects, and scale with clarity.",
    lessons: "7 lessons",
    href: "single-course.html",
  },
];

export default function FeaturedCourses() {
  return (
    <section id="courses" className="max-w-6xl mx-auto px-6 pt-24 pb-20">
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
            className="card rounded-3xl p-6 space-y-4 bg-white/80 border border-accent/10 shadow-sm"
          >
            <div
              className={`h-40 rounded-2xl bg-gradient-to-br ${course.gradient} flex items-center justify-center text-4xl text-accent`}
            >
              {course.badge}
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
