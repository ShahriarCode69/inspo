"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import Footer from "./footer";

const HIDE_CHROME_ROUTES = ["/signup", "/login"];

export default function Chrome({ children }) {
	const pathname = usePathname() || "";
	const hideChrome = HIDE_CHROME_ROUTES.some((route) =>
		pathname.startsWith(route)
	);

	return (
		<>
			{!hideChrome && <Navbar />}
			{children}
			{!hideChrome && <Footer />}
		</>
	);
}
