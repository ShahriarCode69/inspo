// components/faq.jsx
"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown, FiChevronUp, FiArrowRight } from "react-icons/fi";
import Button from "./button";

const Faq = () => {
	const items = useMemo(
		() => [
			{
				q: "What is Inspo?",
				a: "Inspo is a premium course platform designed for founders and creators. It delivers clear, high-converting learning paths to build real skills with confidence.",
			},
			{
				q: "How can I customize my learning path?",
				a: "Pick a track, then mix lessons by level and goal. Save modules, revisit anytime, and learn at your pace—without losing structure.",
			},
			{
				q: "Is Inspo mobile-friendly?",
				a: "Yes. Inspo is built to feel great on phones, tablets, and desktops so you can learn anywhere.",
			},
			{
				q: "Can I integrate third-party tools with Inspo?",
				a: "Inspo supports common tools for notes, scheduling, and workflows (varies by plan) so your learning fits your routine.",
			},
			{
				q: "Does Inspo include certificates?",
				a: "Yes. Many courses include shareable certificates upon completion so you can show progress and outcomes.",
			},
			{
				q: "What kind of support is available for Inspo learners?",
				a: "You’ll get fast support plus community help, and selected plans include mentor guidance and live sessions.",
			},
		],
		[],
	);

	const [openIndex, setOpenIndex] = useState(0);

	return (
		<section className="w-full">
			<div className="mx-auto max-w-[1400px] px-6 py-16">
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
					{/* LEFT */}
					<div>
						<div className="flex items-center gap-2 text-sm">
							<span className="h-2 w-2 rounded-full bg-accent" />
							<span className="text-accent">FAQ</span>
						</div>

						<h2 className="mt-6 text-4xl font-semibold leading-tight text-black sm:text-5xl">
							Your questions, answered <br />
							effortlessly with us
						</h2>

						<div className="mt-8">
							<Button variant="black">
								Book a call
							</Button>
						</div>
					</div>

					{/* RIGHT */}
					<div className="divide-y divide-black/10">
						{items.map((item, idx) => {
							const isOpen = idx === openIndex;

							return (
								<div key={item.q} className="py-6">
									<button
										type="button"
										onClick={() => setOpenIndex(isOpen ? -1 : idx)}
										className="w-full text-left flex items-center justify-between gap-6"
										aria-expanded={isOpen}
									>
										<span className="text-xl font-medium text-black">
											{item.q}
										</span>

										<span className="text-black/70">
											{isOpen ? (
												<FiChevronUp className="text-xl" />
											) : (
												<FiChevronDown className="text-xl" />
											)}
										</span>
									</button>

									<AnimatePresence initial={false}>
										{isOpen ? (
											<motion.div
												key="content"
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{
													duration: 0.55,
													ease: [0.22, 1, 0.36, 1],
												}}
												className="overflow-hidden"
											>
												<motion.p
													initial={{ y: -6 }}
													animate={{ y: 0 }}
													exit={{ y: -6 }}
													transition={{
														duration: 0.55,
														ease: [0.22, 1, 0.36, 1],
													}}
													className="mt-4 max-w-xl text-sm leading-6 text-black/60"
												>
													<span className="text-[color:var(--accent)]">
														Inspo
													</span>{" "}
													{item.a.replace(/^Inspo\s*/i, "")}
												</motion.p>
											</motion.div>
										) : null}
									</AnimatePresence>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq;
