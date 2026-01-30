import React from "react";
import AboutHero from "../components/abouthero";
import Founder from "../components/founder";
import Stats from "../components/stats";
import Faq from "../components/faq";
import CTA from "../components/cta";

export default function page() {
	return (
		<main>
			<AboutHero />
			<Founder />
			<Stats/>
			<Faq/>
			<CTA/>
		</main>
	);
}
