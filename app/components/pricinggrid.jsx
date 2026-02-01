// components/PlansSection.jsx
"use client";

import Button from "./button";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const FeatureItem = ({ children }) => {
	return (
		<li className="flex items-center gap-3 text-sm text-black/70">
			<FaCheckCircle className="text-green-500 text-[16px] shrink-0" />
			<span>{children}</span>
		</li>
	);
};

const PriceCard = ({ title, saveTag, price, features, emphasized = false }) => {
	return (
		<div
			className={[
				"relative rounded-[22px] bg-white",
				"border border-black/10",
				"px-7 py-7",
				emphasized ? "border-black/20" : "",
			].join(" ")}
		>
			{saveTag ? (
				<div className="absolute right-5 top-5">
					<span className="rounded-full bg-[#b8ff4d] px-3 py-1 text-[11px] font-bold text-black">
						{saveTag}
					</span>
				</div>
			) : null}

			<div className="space-y-1">
				<h3 className="text-[18px] font-extrabold text-black">{title}</h3>
				<p className="text-[12px] leading-4 text-black/45">
					Everything to publish and sell
				</p>
				<p className="text-[12px] leading-4 text-black/45">
					Upgrade or cancel anytime
				</p>
			</div>

			<div className="mt-6 flex items-baseline gap-1">
				<span className="text-[40px] font-extrabold tracking-[-0.02em] text-black">
					{price}
				</span>
				<span className="text-[12px] font-semibold text-black/60">/month</span>
			</div>

			<div className="my-6 h-px w-full bg-black/10" />

			<ul className="space-y-3">
				{features.map((f) => (
					<FeatureItem key={f}>{f}</FeatureItem>
				))}
			</ul>

			<div className="mt-7">
				<Button href="/signup" variant="black">
					Get Started
				</Button>
			</div>
		</div>
	);
};

const PureCMSBar = () => {
	return (
			<div className="mt-6 rounded-[22px] bg-black px-7 py-6 text-white">
				<div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
					<div>
					<p className="text-[14px] font-extrabold text-[#b8ff4d]">Enterprise</p>
					<p className="mt-1 text-[12px] text-white/70">
						A dedicated platform for universities and large teams.
					</p>

					<div className="mt-4 flex flex-wrap items-center gap-5 text-[12px] text-white/80">
						<span className="flex items-center gap-2">
							<FaCheckCircle className="text-[#b8ff4d] text-[14px]" />
							SSO + SCIM
						</span>
						<span className="flex items-center gap-2">
							<FaCheckCircle className="text-[#b8ff4d] text-[14px]" />
							Custom SLAs
						</span>
						<span className="flex items-center gap-2">
							<FaCheckCircle className="text-[#b8ff4d] text-[14px]" />
							White-label apps
						</span>
					</div>
				</div>

				<div className="flex flex-col items-start gap-4 md:items-end">
					<div className="flex items-baseline gap-1">
						<span className="text-[40px] font-extrabold tracking-[-0.02em] text-white">
							From $499
						</span>
						<span className="text-[12px] font-semibold text-white/70">
							/month
						</span>
					</div>

					<Button href='/signup' className="bg-white text-black hover:opacity-95">
						Contact Sales
					</Button>
				</div>
			</div>
		</div>
	);
};

export const PlansSection = () => {
	return (
		<section className="mx-auto w-full max-w-6xl px-6 py-38">
			{/* Header row */}
			<div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
				<h2 className="text-[64px] font-extrabold leading-[0.95] tracking-[-0.03em] text-ink md:text-[84px]">
					Creator Plans
				</h2>

				<div className="max-w-[340px] space-y-1 text-[12px] leading-4 text-white/80 md:pt-4">
					<p>Launch, market, and sell courses in one place.</p>
					<p>Upgrade, pause, or cancel anytime.</p>
				</div>
			</div>

			{/* Cards */}
			<div className="mt-10 grid gap-6 md:grid-cols-3">
				<PriceCard
					title="Starter"
					price="$29"
					features={[
						"1 course site",
						"Unlimited students",
						"Basic checkout + coupons",
						"Email broadcasts",
						"3% platform fee",
					]}
				/>

				<PriceCard
					title="Growth"
					saveTag="Most popular"
					price="$79"
					emphasized
					features={[
						"Unlimited courses",
						"Custom domains",
						"Bundles & upsells",
						"Automations + drip",
						"0% platform fee",
					]}
				/>

				<PriceCard
					title="Scale"
					saveTag="For teams"
					price="$199"
					features={[
						"5 admin seats",
						"Advanced analytics",
						"Affiliate center",
						"Priority support",
						"API & webhooks",
					]}
				/>
			</div>

			{/* Bottom bar */}
			<PureCMSBar />
		</section>
	);
};

export default PlansSection;
