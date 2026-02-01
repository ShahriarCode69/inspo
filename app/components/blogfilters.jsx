import React from 'react'

export default function BlogFilters() {
	return (
		<section className="mx-auto section max-w-[1400px] px-6 pb-12">
			<div className=" backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-4">
				<div className="flex flex-wrap items-center gap-2">
					<span className="border border-[#7b5dff]/15 bg-white backdrop-blur-xl px-4 py-2 rounded-full text-sm">
						All
					</span>
					<span className="border border-[#7b5dff]/15 bg-white backdrop-blur-xl px-4 py-2 rounded-full text-sm">
						Course Design
					</span>
					<span className="border border-[#7b5dff]/15 bg-white backdrop-blur-xl px-4 py-2 rounded-full text-sm">
						Launch
					</span>
					<span className="border border-[#7b5dff]/15 bg-white backdrop-blur-xl px-4 py-2 rounded-full text-sm">
						Marketing
					</span>
					<span className="border border-[#7b5dff]/15 bg-white backdrop-blur-xl px-4 py-2 rounded-full text-sm">
						Student Success
					</span>
				</div>

				<div className="border border-[#7b5dff]/15 bg-white backdrop-blur-xl rounded-full px-4 py-2 text-sm flex items-center gap-2 w-full lg:w-auto">
					<span>Search</span>
					<input
						className="bg-transparent outline-none placeholder:text-gray-400 w-full lg:w-[220px]"
						placeholder="Search articles"
					/>
				</div>
			</div>
		</section>
	);
}

