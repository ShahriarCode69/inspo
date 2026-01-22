import React from 'react'
import Image from 'next/image'
import Button from './button'

const SOCIAL_LINKS = [
	{
		label: 'Twitter',
		href: '#',
		icon: (
			<svg
				className="w-5 h-5"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.6"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 7.5v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
			</svg>
		),
	},
	{
		label: 'Instagram',
		href: '#',
		icon: (
			<svg
				className="w-5 h-5"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.6"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<rect x="2" y="2" width="20" height="20" rx="5"></rect>
				<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
				<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
			</svg>
		),
	},
	{
		label: 'LinkedIn',
		href: '#',
		icon: (
			<svg
				className="w-5 h-5"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.6"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
				<rect x="2" y="9" width="4" height="12"></rect>
				<circle cx="4" cy="4" r="2"></circle>
			</svg>
		),
	},
]

const FOOTER_LINK_GROUPS = [
	{
		title: 'Platform',
		links: [
			{ label: 'Courses', href: 'courses.html' },
			{ label: 'Mentors', href: '#why' },
			{ label: 'Success stories', href: '#testimonials' },
			{ label: 'Scholarships', href: '#' },
		],
	},
	{
		title: 'Company',
		links: [
			{ label: 'About', href: 'about.html' },
			{ label: 'Careers', href: '#' },
			{ label: 'Pricing', href: 'pricing.html' },
			{ label: 'Blog', href: 'blog.html' },
		],
	},
]

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="site-footer mt-4">
			<div className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10">
				<div>
					<div className="flex items-center gap-3">
						<Image
							src="/logo.svg"
							alt="Inspo logo"
							width={56}
							height={56}
							className="h-12 w-auto"
						/>
						<p className="text-xs uppercase tracking-[0.3em] text-[#cbbdff]">
							Inspo
						</p>
					</div>
					<p className="text-sm footer-muted mt-4">
						A premium learning platform for ambitious founders worldwide.
					</p>
					<div className="flex items-center gap-4 mt-4">
						{SOCIAL_LINKS.map((social) => (
							<a
								key={social.label}
								className="footer-link"
								href={social.href}
								aria-label={social.label}
							>
								{social.icon}
							</a>
						))}
					</div>
				</div>
				{FOOTER_LINK_GROUPS.map((group) => (
					<div key={group.title}>
						<p className="text-sm font-medium mb-3">{group.title}</p>
						<ul className="text-sm space-y-2">
							{group.links.map((link) => (
								<li key={`${group.title}-${link.label}`}>
									<a className="footer-link" href={link.href}>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>
				))}
				<div>
					<p className="text-sm font-medium mb-3">Newsletter</p>
					<p className="text-sm footer-muted mb-4">
						Weekly founder-ready insights.
					</p>
					<div className="flex flex-col gap-3">
						<input
							className="footer-input h-12 px-4 rounded-2xl text-sm outline-none"
							placeholder="Email address"
							type="email"
						/>
						<Button className="w-full">Subscribe</Button>
					</div>
				</div>
			</div>
			<div className="max-w-6xl mx-auto px-6 pb-10">
				<p className="text-xs footer-muted">
					Copyright {currentYear} Inspo. All rights reserved.
				</p>
			</div>
		</footer>
	)
}
