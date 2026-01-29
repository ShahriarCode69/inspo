import CTA from "./components/cta";
import FeaturedCourses from "./components/featuredcourses";
import Hero from "./components/hero";
import HowItWorks from "./components/howitworks";
import Testimonials from "./components/testimonials";
import WhyChooseUs from "./components/whychooseus";

export default function Home() {
	return (
		<>
			<Hero />
      <FeaturedCourses/>
      <WhyChooseUs/>
      <HowItWorks/>
      <Testimonials/>
			<CTA/>
		</>
	);
}
