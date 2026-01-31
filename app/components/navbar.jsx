"use client";

import React, { useState } from "react";
import Button from "./button";
import Anchor from "./anchor";
import Link from "next/link";

const NAV_LINKS = [
	{ label: "Home", href: "/" },
	{ label: "Courses", href: "/courses" },
	{ label: "About", href: "/about" },
	{ label: "Pricing", href: "/pricing" },
	{ label: "Blog", href: "/blog" },
];

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<header className="fixed mx-auto w-full top-0 z-50 mt-5">
			<div className="max-w-6xl mx-auto px-6">
				{/* IMPORTANT: relative wrapper */}
				<div className="relative">
					<nav className="glass rounded-2xl px-6 py-4 flex items-center justify-between gap-4">
						{/* Logo */}
						<Link href="#" className="flex items-center gap-3">
							<img src="/logo.svg" alt="Logo" />
						</Link>

						{/* Desktop Nav */}
						<div className="hidden lg:flex items-center gap-6 text-sm">
							{NAV_LINKS.map((link) => (
								<Anchor key={link.href} href={link.href}>
									{link.label}
								</Anchor>
							))}
						</div>

						{/* Desktop Actions */}
						<div className="hidden lg:flex items-center gap-3">
							<Button variant="secondary">Login</Button>
							<Button href="/signup">Sign Up</Button>
						</div>

						{/* Mobile Toggle */}
						<button
							onClick={() => setOpen(!open)}
							aria-label="Toggle menu"
							aria-expanded={open}
							className="lg:hidden glass w-11 h-11 rounded-2xl flex items-center justify-center"
						>
							<svg
								className="w-5 h-5"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<line x1="3" y1="6" x2="21" y2="6" />
								<line x1="3" y1="12" x2="21" y2="12" />
								<line x1="3" y1="18" x2="21" y2="18" />
							</svg>
						</button>
					</nav>

					{/* ✅ Sticky mobile menu */}
					{open && (
						<div className="absolute left-0 right-0 top-full mt-4 glass rounded-3xl px-6 py-6 lg:hidden space-y-6">
							<div className="flex flex-col gap-4 text-sm">
								{NAV_LINKS.map((link) => (
									<Anchor key={link.href} href={link.href}>
										{link.label}
									</Anchor>
								))}
							</div>

							<div className="flex flex-col gap-3">
								<Button variant="secondary">Log in</Button>
								<Button>Start free</Button>
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	);
}
