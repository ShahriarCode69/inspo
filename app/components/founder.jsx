// components/founder.jsx
"use client";

import React from "react";
import Image from "next/image";

const Founder = () => {
	return (
		<section className="w-full">
			<div className="mx-auto bg-white rounded-3xl px-6 py-10">
				<div className="max-w-7xl mx-auto">
					<div className="p-6 sm:p-8 lg:p-10">
						<div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch">
							{/* LEFT (justify-between) */}
							<div className="flex flex-col justify-end">
								<h2 className="text-4xl font-semibold leading-14 text-gray-900 sm:text-5xl">
									About Inspo's <br /> Founder
								</h2>

								<p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
									Challenge yourself on our 18 expertly designed holes. Each
									hole offers a unique test of skill and strategy, crafted to
									provide a perfect balance of challenge and enjoyment for all
									players.
								</p>
							</div>

							{/* RIGHT (big image only) */}
							<div className="flex justify-end">
								<div className="w-full max-w-lg overflow-hidden rounded-3xl">
									<div className="relative aspect-square w-full">
										<Image
											src="/founder.png"
											alt="Founder section visual"
											fill
											priority
											className="object-cover"
											sizes="(max-width: 1024px) 100vw, 560px"
										/>
									</div>
								</div>
							</div>
							{/* /RIGHT */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Founder;
