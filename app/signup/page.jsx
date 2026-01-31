import Link from "next/link";
import Button from "../components/button";

export default function SignupPage() {
	return (
		<main className="h-screen overflow-x-hidden grid lg:grid-cols-[1.1fr_0.9fr] bg-[#f7faf7]">
			<section className="relative flex flex-col justify-between overflow-hidden px-8 py-10 text-white lg:py-12">
				<div className="absolute inset-0 bg-[url('/ctabg.jpg')] bg-cover bg-center" />
				<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/75" />

				<div className="relative z-10 flex flex-col gap-8">
					<div className="flex items-center justify-between text-sm">
						<Link href="/" className="flex items-center gap-3 text-white/90">
								<img src="/logo.svg" alt="Inspo logo" className="h-24 w-24" />
						</Link>

						<Link
							href="/"
							className="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white"
						>
							&larr; Back to Website
						</Link>
					</div>

					<div className="mt-10 max-w-md space-y-4">
						<h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
							Build your premium skill portfolio
						</h1>
						<p className="text-sm text-white/75 md:text-base">
							Create your Inspo account and unlock curated courses, templates,
							and founder tools.
						</p>
					</div>
				</div>

				<div className="relative z-10 hidden text-xs text-white/60 lg:block">
					<span>Trusted by 24k creators across 120+ countries.</span>
				</div>
			</section>

			<section className="relative flex items-center justify-center bg-[#f4f6fb] px-6 py-12">
				<div className="pointer-events-none absolute -top-10 right-[-70px] h-52 w-52 rounded-full bg-gradient-to-br from-[#E3EF26]/40 via-[#4cffdb]/30 to-transparent blur-3xl" />
				<div className="pointer-events-none absolute bottom-[-90px] left-[-80px] h-72 w-72 rounded-full bg-gradient-to-tr from-[#0C342C]/25 via-[#076653]/15 to-transparent blur-3xl" />

				<div className="relative w-full max-w-md rounded-3xl bg-white px-8 py-9 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
					<div className="space-y-2">
						<h2 className="text-2xl font-bold text-neutral-900">
							Create Account
						</h2>
						<p className="text-sm text-neutral-500">
							Start your luxury learning journey today.
						</p>
					</div>

					<form className="mt-6 space-y-5">
						<div className="space-y-2">
							<label
								htmlFor="full-name"
								className="text-sm font-medium text-neutral-700"
							>
								Full Name
							</label>
							<input
								id="full-name"
								type="text"
								placeholder="Arielle Young"
								className="w-full rounded-xl border border-neutral-200/80 bg-white px-4 py-3 text-sm text-neutral-800 outline-none transition focus:border-neutral-400"
							/>
						</div>

						<div className="space-y-2">
							<label
								htmlFor="email"
								className="text-sm font-medium text-neutral-700"
							>
								Email
							</label>
							<input
								id="email"
								type="email"
								placeholder="you@inspo.com"
								className="w-full rounded-xl border border-neutral-200/80 bg-white px-4 py-3 text-sm text-neutral-800 outline-none transition focus:border-neutral-400"
							/>
						</div>

						<div className="space-y-2">
							<label
								htmlFor="password"
								className="text-sm font-medium text-neutral-700"
							>
								Password
							</label>
							<div className="relative">
								<input
									id="password"
									type="password"
									placeholder="Create a password"
									className="w-full rounded-xl border border-neutral-200/80 bg-white px-4 py-3 pr-12 text-sm text-neutral-800 outline-none transition focus:border-neutral-400"
								/>
								<span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400">
									<svg
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.6"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
										<circle cx="12" cy="12" r="3" />
									</svg>
								</span>
							</div>
						</div>

						<Button variant="black" className="w-full rounded-full">
							Create account
						</Button>
					</form>

					<div className="my-6 flex items-center gap-4 text-xs text-neutral-400">
						<span className="h-px flex-1 bg-neutral-200" />
						<span>Or continue with</span>
						<span className="h-px flex-1 bg-neutral-200" />
					</div>

					<Button
						variant="secondary"
						className="w-full rounded-full border border-neutral-200/80 bg-white text-sm"
					>
						<span className="inline-flex items-center gap-2">
							<span className="flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200 text-xs font-semibold text-neutral-700">
								G
							</span>
							Continue with Google
						</span>
					</Button>

					<p className="mt-5 text-center text-sm text-neutral-500">
						Already have an account?{" "}
						<Link href="/login" className="font-semibold text-neutral-900">
							Log in
						</Link>
					</p>
				</div>
			</section>
		</main>
	);
}
