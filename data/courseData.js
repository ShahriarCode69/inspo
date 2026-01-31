// courseData.js
// Normalized course objects (no duplicated “card vs page” fields).
// Components should derive UI strings like "12 lessons • $89" from these primitives.

export const courses = [
	{
		id: "figma-ui-design-masterclass",
		slug: "figma-ui-design-masterclass",

		category: "UI/UX Design",
		badge: "Bestseller",

		title: "Figma UI Design Masterclass",
		subtitle:
			"Design modern interfaces, build component libraries, and ship polished UI systems in Figma.",

		media: {
			coverImage: "/courses/figmacourse.png",
			coverAlt: "Figma UI design canvas",
			previewCtaLabel: "Watch preview",
		},

		stats: {
			rating: 4.8,
			reviewCount: 4120,
			lessonsCount: 24,
			durationHours: 9,
			priceUSD: 79,
		},

		purchase: {
			primaryCtaLabel: "Enroll for $79",
			secondaryCtaLabel: "Watch preview",
			stickyCtaLabel: "Enroll now",
			shareLabel: "Share syllabus",
		},

		meta: {
			access: "Lifetime",
			format: "Video + Files",
		},

		instructor: {
			name: "Livia Hart",
			role: "Product Designer",
			company: "Lumière Labs",
			bio: "Livia leads UI systems for fast-moving startups and teaches design workflows that scale.",
		},

		outcomes: {
			whatYouWillLearn: [
				"Create clean UI layouts with grids, spacing, and typography.",
				"Build reusable components and variants.",
				"Create responsive designs and handoff-ready specs.",
				"Design a complete product flow from wireframe to UI.",
			],
			whoThisCourseIsFor: [
				"Beginners starting UI/UX design.",
				"Designers moving from tools to systems thinking.",
				"Developers who want better UI fundamentals.",
			],
			requirements: [
				"Install Figma (free account is enough).",
				"Basic computer skills.",
			],
			certificatesAndOutcomes: [
				"Completion certificate.",
				"Portfolio-ready UI project.",
				"Reusable Figma component kit.",
			],
		},

		curriculum: [
			{
				moduleNumber: 1,
				title: "Foundations",
				description: "Layout, spacing, typography, color.",
			},
			{
				moduleNumber: 2,
				title: "Components",
				description: "Variants, auto layout, design systems.",
			},
			{
				moduleNumber: 3,
				title: "Product flow",
				description: "Screens, states, UX patterns.",
			},
			{
				moduleNumber: 4,
				title: "Handoff",
				description: "Specs, assets, and developer collaboration.",
			},
		],

		reviews: [
			{
				name: "Amelia G.",
				quote:
					"Clear structure and the best Auto Layout explanation I’ve seen.",
			},
			{
				name: "Noah S.",
				quote: "Helped me level up my UI quality immediately.",
			},
			{ name: "Kai T.", quote: "Very practical. Great templates." },
		],
	},

	{
		id: "react-from-zero-to-production",
		slug: "react-from-zero-to-production",

		category: "Frontend Development",
		badge: "Career track",

		title: "React: From Zero to Production",
		subtitle:
			"Build real React apps with modern patterns: hooks, routing, forms, state, and performance.",

		media: {
			coverImage: "/courses/reactcourse.png",
			coverAlt: "Code editor with React components",
			previewCtaLabel: "Watch preview",
		},

		stats: {
			rating: 4.7,
			reviewCount: 5380,
			lessonsCount: 32,
			durationHours: 14,
			priceUSD: 99,
		},

		purchase: {
			primaryCtaLabel: "Enroll for $99",
			secondaryCtaLabel: "Watch preview",
			stickyCtaLabel: "Enroll now",
			shareLabel: "Share syllabus",
		},

		meta: { access: "Lifetime", format: "Video + Projects" },

		instructor: {
			name: "Arman Lee",
			role: "Senior Frontend Engineer",
			company: "NovaStack",
			bio: "Arman builds high-scale web apps and teaches clean component architecture and debugging.",
		},

		outcomes: {
			whatYouWillLearn: [
				"Build reusable components with hooks.",
				"Handle forms, validation, and async requests.",
				"Structure apps with routing and layouts.",
				"Optimize performance and avoid common re-render issues.",
			],
			whoThisCourseIsFor: [
				"Beginners in React",
				"Developers switching to frontend",
				"Anyone building SaaS UIs",
			],
			requirements: ["Basic JavaScript knowledge", "Node.js installed"],
			certificatesAndOutcomes: [
				"Completion certificate",
				"2 production-style projects",
				"Reusable starter repo",
			],
		},

		curriculum: [
			{
				moduleNumber: 1,
				title: "React basics",
				description: "JSX, props, state, events.",
			},
			{
				moduleNumber: 2,
				title: "Hooks & patterns",
				description: "useEffect, custom hooks, composition.",
			},
			{
				moduleNumber: 3,
				title: "App architecture",
				description: "Routing, layouts, state strategy.",
			},
			{
				moduleNumber: 4,
				title: "Production skills",
				description: "Perf, testing basics, deployment.",
			},
		],

		reviews: [
			{
				name: "Riya K.",
				quote: "Loved the architecture section—super practical.",
			},
			{
				name: "Sam P.",
				quote: "Explained hooks in a way that finally clicked.",
			},
			{ name: "Diego M.", quote: "Great projects and best practices." },
		],
	},

	{
		id: "nextjs-app-router-in-depth",
		slug: "nextjs-app-router-in-depth",

		category: "Web Development",
		badge: "Updated",

		title: "Next.js App Router In-Depth",
		subtitle:
			"Master the App Router: layouts, routing, server components, data fetching, and production deployment.",

		media: {
			coverImage: "/courses/nextjscourse.png",
			coverAlt: "Next.js app architecture diagram",
			previewCtaLabel: "Watch preview",
		},

		stats: {
			rating: 4.9,
			reviewCount: 2860,
			lessonsCount: 20,
			durationHours: 8,
			priceUSD: 109,
		},

		purchase: {
			primaryCtaLabel: "Enroll for $109",
			secondaryCtaLabel: "Watch preview",
			stickyCtaLabel: "Enroll now",
			shareLabel: "Share syllabus",
		},

		meta: { access: "Lifetime", format: "Video + Repo" },

		instructor: {
			name: "Mina Chowdhury",
			role: "Full-Stack Engineer",
			company: "CloudCraft",
			bio: "Mina ships Next.js apps for startups and teaches server/client boundaries with real examples.",
		},

		outcomes: {
			whatYouWillLearn: [
				"Route structure with layouts, loading, and error UI.",
				"Server vs client components (when and why).",
				"Data fetching patterns (server actions, caching).",
				"Deploy and monitor production apps.",
			],
			whoThisCourseIsFor: [
				"React devs moving to Next.js",
				"Builders using App Router",
				"SaaS developers",
			],
			requirements: ["React basics", "Basic Git knowledge"],
			certificatesAndOutcomes: [
				"Completion certificate",
				"Production-ready starter template",
				"Deployment checklist",
			],
		},

		curriculum: [
			{
				moduleNumber: 1,
				title: "Routing & layouts",
				description: "Nested routes, layouts, templates.",
			},
			{
				moduleNumber: 2,
				title: "Rendering",
				description: "RSC, client boundaries, streaming.",
			},
			{
				moduleNumber: 3,
				title: "Data & caching",
				description: "fetch, revalidate, server actions.",
			},
			{
				moduleNumber: 4,
				title: "Production",
				description: "SEO, performance, deployment.",
			},
		],

		reviews: [
			{
				name: "Imran H.",
				quote: "Finally understood server components clearly.",
			},
			{
				name: "Tania R.",
				quote: "The caching section saved me days of trial and error.",
			},
			{ name: "Jude A.", quote: "Best App Router course I’ve tried." },
		],
	},

	{
		id: "javascript-modern-fundamentals",
		slug: "javascript-modern-fundamentals",

		category: "Programming",
		badge: "Foundations",

		title: "Modern JavaScript Fundamentals",
		subtitle:
			"Build strong JS fundamentals: ES modules, async/await, arrays, objects, and modern patterns.",

		media: {
			coverImage: "/courses/javascriptcourse.png",
			coverAlt: "JavaScript code on screen",
			previewCtaLabel: "Watch preview",
		},

		stats: {
			rating: 4.7,
			reviewCount: 7810,
			lessonsCount: 28,
			durationHours: 11,
			priceUSD: 69,
		},

		purchase: {
			primaryCtaLabel: "Enroll for $69",
			secondaryCtaLabel: "Watch preview",
			stickyCtaLabel: "Enroll now",
			shareLabel: "Share syllabus",
		},

		meta: { access: "Lifetime", format: "Video + Exercises" },

		instructor: {
			name: "Ethan Park",
			role: "Software Engineer",
			company: "ByteWorks",
			bio: "Ethan teaches JavaScript with practical exercises focused on real-world frontend work.",
		},

		outcomes: {
			whatYouWillLearn: [
				"Write clean ES6+ code with modern syntax.",
				"Handle async flows with promises and async/await.",
				"Work confidently with arrays and objects.",
				"Organize code using modules and patterns.",
			],
			whoThisCourseIsFor: [
				"Beginners",
				"Frontend learners",
				"Self-taught developers",
			],
			requirements: ["A computer and code editor"],
			certificatesAndOutcomes: [
				"Completion certificate",
				"50+ practice challenges",
				"Cheat sheets",
			],
		},

		curriculum: [
			{
				moduleNumber: 1,
				title: "Core syntax",
				description: "Variables, functions, scope, this.",
			},
			{
				moduleNumber: 2,
				title: "Data structures",
				description: "Arrays/objects, methods, immutability.",
			},
			{
				moduleNumber: 3,
				title: "Async JS",
				description: "Promises, async/await, fetch.",
			},
			{
				moduleNumber: 4,
				title: "Modern patterns",
				description: "Modules, composition, tooling basics.",
			},
		],

		reviews: [
			{ name: "Sadia N.", quote: "Loved the exercises—made everything stick." },
			{ name: "Hadi S.", quote: "Best async explanation for beginners." },
			{ name: "Nora F.", quote: "Very clear and structured." },
		],
	},

	{
		id: "python-for-data-analysis",
		slug: "python-for-data-analysis",

		category: "Data",
		badge: "Popular",

		title: "Python for Data Analysis",
		subtitle:
			"Learn Python with real datasets: cleaning, analysis, visualization, and automation basics.",

		media: {
			coverImage: "/courses/pythoncourse.png",
			coverAlt: "Data charts and Python notebook",
			previewCtaLabel: "Watch preview",
		},

		stats: {
			rating: 4.8,
			reviewCount: 6230,
			lessonsCount: 30,
			durationHours: 13,
			priceUSD: 89,
		},

		purchase: {
			primaryCtaLabel: "Enroll for $89",
			secondaryCtaLabel: "Watch preview",
			stickyCtaLabel: "Enroll now",
			shareLabel: "Share syllabus",
		},

		meta: { access: "Lifetime", format: "Video + Notebooks" },

		instructor: {
			name: "Ayesha Rahman",
			role: "Data Analyst",
			company: "InsightLab",
			bio: "Ayesha teaches analysis workflows using pandas with practical, business-style datasets.",
		},

		outcomes: {
			whatYouWillLearn: [
				"Clean and transform data with pandas.",
				"Analyze trends and build summary reports.",
				"Create charts and dashboards (basic).",
				"Automate repetitive data tasks.",
			],
			whoThisCourseIsFor: [
				"Beginners to data",
				"Business analysts",
				"Developers adding data skills",
			],
			requirements: ["Basic computer skills", "Install Python"],
			certificatesAndOutcomes: [
				"Completion certificate",
				"Notebook templates",
				"Mini portfolio project",
			],
		},

		curriculum: [
			{
				moduleNumber: 1,
				title: "Python essentials",
				description: "Types, functions, files.",
			},
			{
				moduleNumber: 2,
				title: "pandas basics",
				description: "DataFrames, filtering, joins.",
			},
			{
				moduleNumber: 3,
				title: "Analysis",
				description: "Aggregations, pivots, time series basics.",
			},
			{
				moduleNumber: 4,
				title: "Visualization",
				description: "Charts, storytelling with data.",
			},
		],

		reviews: [
			{ name: "Mahir T.", quote: "Practical datasets made it easy to learn." },
			{ name: "Lena H.", quote: "The pandas section is gold." },
			{ name: "Arif J.", quote: "Good pace and clear examples." },
		],
	},

	{
		id: "excel-to-power-bi-dashboarding",
		slug: "excel-to-power-bi-dashboarding",

		category: "Analytics",
		badge: "Skill boost",

		title: "Excel to Power BI Dashboarding",
		subtitle:
			"Move from spreadsheets to interactive dashboards with Power BI: modeling, DAX basics, and visuals.",

		media: {
			coverImage: "/courses/excelcourse.png",
			coverAlt: "Business dashboard charts",
			previewCtaLabel: "Watch preview",
		},

		stats: {
			rating: 4.6,
			reviewCount: 2980,
			lessonsCount: 18,
			durationHours: 7,
			priceUSD: 59,
		},

		purchase: {
			primaryCtaLabel: "Enroll for $59",
			secondaryCtaLabel: "Watch preview",
			stickyCtaLabel: "Enroll now",
			shareLabel: "Share syllabus",
		},

		meta: { access: "Lifetime", format: "Video + Files" },

		instructor: {
			name: "Nabil Hasan",
			role: "BI Developer",
			company: "DataForge",
			bio: "Nabil builds dashboards for business teams and teaches clean modeling and reporting habits.",
		},

		outcomes: {
			whatYouWillLearn: [
				"Import and clean data with Power Query.",
				"Build a simple data model with relationships.",
				"Write DAX basics for measures.",
				"Create interactive dashboards and publish them.",
			],
			whoThisCourseIsFor: ["Excel users", "Analysts", "Business teams"],
			requirements: ["Basic Excel knowledge"],
			certificatesAndOutcomes: [
				"Completion certificate",
				"Dashboard project",
				"Reusable Power BI template",
			],
		},

		curriculum: [
			{
				moduleNumber: 1,
				title: "Power Query",
				description: "Cleaning and shaping data.",
			},
			{
				moduleNumber: 2,
				title: "Modeling",
				description: "Relationships and star schema basics.",
			},
			{
				moduleNumber: 3,
				title: "DAX essentials",
				description: "Measures, KPIs, time intelligence basics.",
			},
			{
				moduleNumber: 4,
				title: "Dashboarding",
				description: "Visuals, interactivity, publishing.",
			},
		],

		reviews: [
			{
				name: "Fahim R.",
				quote: "Exactly what I needed to move beyond Excel charts.",
			},
			{ name: "Sara M.", quote: "Clear DAX intro and great dashboard tips." },
			{ name: "Jamil A.", quote: "Very job-focused and practical." },
		],
	},

	{
		id: "photoshop-for-content-creators",
		slug: "photoshop-for-content-creators",

		category: "Creative Tools",
		badge: "Hands-on",

		title: "Photoshop for Content Creators",
		subtitle:
			"Edit photos, create thumbnails, and design social graphics using smart, repeatable workflows.",

		media: {
			coverImage: "/courses/photoshopcourse.png",
			coverAlt: "Photo editing workspace",
			previewCtaLabel: "Watch preview",
		},

		stats: {
			rating: 4.6,
			reviewCount: 1870,
			lessonsCount: 16,
			durationHours: 6,
			priceUSD: 49,
		},

		purchase: {
			primaryCtaLabel: "Enroll for $49",
			secondaryCtaLabel: "Watch preview",
			stickyCtaLabel: "Enroll now",
			shareLabel: "Share syllabus",
		},

		meta: { access: "Lifetime", format: "Video + Assets" },

		instructor: {
			name: "Zara Ahmed",
			role: "Creative Director",
			company: "Studio Nine",
			bio: "Zara designs high-performing social visuals and teaches fast workflows for creators.",
		},

		outcomes: {
			whatYouWillLearn: [
				"Cutouts, masking, and background removal.",
				"Color correction and retouching basics.",
				"Thumbnail design with text and effects.",
				"Exporting for web and social platforms.",
			],
			whoThisCourseIsFor: ["Creators", "Marketers", "Design beginners"],
			requirements: ["Photoshop installed (trial is okay)"],
			certificatesAndOutcomes: [
				"Completion certificate",
				"Thumbnail pack templates",
				"Asset export checklist",
			],
		},

		curriculum: [
			{
				moduleNumber: 1,
				title: "Essentials",
				description: "Layers, selections, masks.",
			},
			{
				moduleNumber: 2,
				title: "Retouching",
				description: "Light, color, cleanup workflows.",
			},
			{
				moduleNumber: 3,
				title: "Design for social",
				description: "Thumbnails and templates.",
			},
			{
				moduleNumber: 4,
				title: "Exporting",
				description: "Formats, compression, quality.",
			},
		],

		reviews: [
			{ name: "Nina R.", quote: "Thumbnails improved instantly." },
			{ name: "Omar K.", quote: "Great workflow tips, not just tools." },
			{ name: "Priya S.", quote: "Easy to follow and very practical." },
		],
	},

	{
		id: "premiere-pro-video-editing-bootcamp",
		slug: "premiere-pro-video-editing-bootcamp",

		category: "Video Editing",
		badge: "Practical",

		title: "Premiere Pro Video Editing Bootcamp",
		subtitle:
			"Edit fast, tell better stories, and deliver clean exports for YouTube, reels, and ads.",

		media: {
			coverImage:
				"/courses/videoediting.png",
			coverAlt: "Video timeline editing interface",
			previewCtaLabel: "Watch preview",
		},

		stats: {
			rating: 4.7,
			reviewCount: 2240,
			lessonsCount: 22,
			durationHours: 10,
			priceUSD: 79,
		},

		purchase: {
			primaryCtaLabel: "Enroll for $79",
			secondaryCtaLabel: "Watch preview",
			stickyCtaLabel: "Enroll now",
			shareLabel: "Share syllabus",
		},

		meta: { access: "Lifetime", format: "Video + Practice Footage" },

		instructor: {
			name: "Rafiq Islam",
			role: "Video Editor",
			company: "FrameCut",
			bio: "Rafiq edits brand videos and teaches speed-focused editing systems and storytelling.",
		},

		outcomes: {
			whatYouWillLearn: [
				"Timeline workflow and keyboard shortcuts.",
				"Audio cleanup and mixing basics.",
				"Color correction and simple grading.",
				"Export settings for different platforms.",
			],
			whoThisCourseIsFor: [
				"Beginners in editing",
				"Creators",
				"Marketing teams",
			],
			requirements: ["Premiere Pro installed (trial ok)"],
			certificatesAndOutcomes: [
				"Completion certificate",
				"Export presets",
				"Editing checklist",
			],
		},

		curriculum: [
			{
				moduleNumber: 1,
				title: "Workflow",
				description: "Ingest, organize, edit fast.",
			},
			{
				moduleNumber: 2,
				title: "Audio",
				description: "Levels, cleanup, music.",
			},
			{
				moduleNumber: 3,
				title: "Color",
				description: "Correction, looks, consistency.",
			},
			{
				moduleNumber: 4,
				title: "Delivery",
				description: "Exports, aspect ratios, captions.",
			},
		],

		reviews: [
			{ name: "Hassan A.", quote: "Speed tips alone were worth it." },
			{
				name: "Maya T.",
				quote: "Great export guidance for reels and YouTube.",
			},
			{ name: "Ishaan P.", quote: "Very hands-on and clear." },
		],
	},

	{
		id: "digital-marketing-meta-google-ads",
		slug: "digital-marketing-meta-google-ads",

		category: "Marketing",
		badge: "In-demand",

		title: "Digital Marketing: Meta & Google Ads",
		subtitle:
			"Run profitable campaigns with targeting, creatives, tracking, and optimization frameworks.",

		media: {
			coverImage: "/courses/digitalmarket.png",
			coverAlt: "Ad dashboard analytics",
			previewCtaLabel: "Watch preview",
		},

		stats: {
			rating: 4.6,
			reviewCount: 3410,
			lessonsCount: 26,
			durationHours: 12,
			priceUSD: 99,
		},

		purchase: {
			primaryCtaLabel: "Enroll for $99",
			secondaryCtaLabel: "Watch preview",
			stickyCtaLabel: "Enroll now",
			shareLabel: "Share syllabus",
		},

		meta: { access: "Lifetime", format: "Video + Worksheets" },

		instructor: {
			name: "Tariq Anwar",
			role: "Performance Marketer",
			company: "GrowthPilot",
			bio: "Tariq manages paid media budgets and teaches testing systems that reduce wasted spend.",
		},

		outcomes: {
			whatYouWillLearn: [
				"Campaign structure and targeting basics.",
				"Creative testing frameworks (hooks, angles).",
				"Tracking fundamentals (pixels, events, UTMs).",
				"Optimization: bids, budgets, and reporting.",
			],
			whoThisCourseIsFor: ["Marketers", "Founders", "Freelancers"],
			requirements: [
				"Basic understanding of marketing",
				"A product/service to practice with (optional)",
			],
			certificatesAndOutcomes: [
				"Completion certificate",
				"Ad testing sheets",
				"Reporting template",
			],
		},

		curriculum: [
			{
				moduleNumber: 1,
				title: "Foundations",
				description: "Goals, funnels, offer clarity.",
			},
			{
				moduleNumber: 2,
				title: "Meta Ads",
				description: "Structure, creatives, optimization.",
			},
			{
				moduleNumber: 3,
				title: "Google Ads",
				description: "Search intent, keywords, quality score.",
			},
			{
				moduleNumber: 4,
				title: "Tracking & reporting",
				description: "Pixels, UTMs, dashboards.",
			},
		],

		reviews: [
			{ name: "Amin S.", quote: "The testing framework is super clear." },
			{
				name: "Elina K.",
				quote: "Helped me stop guessing and start measuring.",
			},
			{ name: "Faisal R.", quote: "Very practical and actionable." },
		],
	},

	{
		id: "cybersecurity-fundamentals",
		slug: "cybersecurity-fundamentals",

		category: "IT & Security",
		badge: "Essential",

		title: "Cybersecurity Fundamentals",
		subtitle:
			"Learn core security concepts: threats, passwords, phishing, safe browsing, and security habits.",

		media: {
			coverImage: "/images/courses/cybersecurity-fundamentals/cover.jpg",
			coverAlt: "Cybersecurity lock and network",
			previewCtaLabel: "Watch preview",
		},

		stats: {
			rating: 4.5,
			reviewCount: 1980,
			lessonsCount: 18,
			durationHours: 8,
			priceUSD: 59,
		},

		purchase: {
			primaryCtaLabel: "Enroll for $59",
			secondaryCtaLabel: "Watch preview",
			stickyCtaLabel: "Enroll now",
			shareLabel: "Share syllabus",
		},

		meta: { access: "Lifetime", format: "Video + Quizzes" },

		instructor: {
			name: "Nadia Karim",
			role: "Security Analyst",
			company: "SecureWave",
			bio: "Nadia trains teams on security hygiene and practical defense against common attacks.",
		},

		outcomes: {
			whatYouWillLearn: [
				"Recognize phishing and social engineering attempts.",
				"Set up strong passwords and MFA correctly.",
				"Secure devices, Wi-Fi, and browsers.",
				"Understand basic security terminology and threats.",
			],
			whoThisCourseIsFor: ["Anyone online", "Teams", "Beginners to security"],
			requirements: ["None"],
			certificatesAndOutcomes: [
				"Completion certificate",
				"Security checklist",
				"Phishing practice guide",
			],
		},

		curriculum: [
			{
				moduleNumber: 1,
				title: "Threats",
				description: "Common attacks and how they work.",
			},
			{
				moduleNumber: 2,
				title: "Accounts",
				description: "Passwords, MFA, safe identity habits.",
			},
			{
				moduleNumber: 3,
				title: "Devices",
				description: "Updates, backups, safe Wi-Fi.",
			},
			{
				moduleNumber: 4,
				title: "Work safety",
				description: "Policies, tools, incident basics.",
			},
		],

		reviews: [
			{ name: "Asha P.", quote: "Simple and super useful for daily life." },
			{ name: "Rayan H.", quote: "Phishing examples were very realistic." },
			{ name: "Mina S.", quote: "Great security habits course." },
		],
	},

	{
		id: "git-and-github-for-teams",
		slug: "git-and-github-for-teams",

		category: "Developer Tools",
		badge: "Team-ready",

		title: "Git & GitHub for Teams",
		subtitle:
			"Work confidently with branches, pull requests, code review, and clean Git workflows.",

		media: {
			coverImage: "/images/courses/git-and-github-for-teams/cover.jpg",
			coverAlt: "Git branching workflow diagram",
			previewCtaLabel: "Watch preview",
		},

		stats: {
			rating: 4.8,
			reviewCount: 4520,
			lessonsCount: 16,
			durationHours: 6,
			priceUSD: 49,
		},

		purchase: {
			primaryCtaLabel: "Enroll for $49",
			secondaryCtaLabel: "Watch preview",
			stickyCtaLabel: "Enroll now",
			shareLabel: "Share syllabus",
		},

		meta: { access: "Lifetime", format: "Video + Exercises" },

		instructor: {
			name: "Owen Clarke",
			role: "Engineering Manager",
			company: "ShipRight",
			bio: "Owen leads dev teams and teaches Git workflows that reduce conflicts and speed up shipping.",
		},

		outcomes: {
			whatYouWillLearn: [
				"Branching strategies that scale.",
				"Pull requests and code review habits.",
				"Resolve merge conflicts confidently.",
				"Clean history with rebase/squash (safely).",
			],
			whoThisCourseIsFor: ["New developers", "Teams", "Students"],
			requirements: ["Install Git", "GitHub account"],
			certificatesAndOutcomes: [
				"Completion certificate",
				"Git workflow guide",
				"Cheat sheet",
			],
		},

		curriculum: [
			{
				moduleNumber: 1,
				title: "Git basics",
				description: "Commits, branches, remotes.",
			},
			{
				moduleNumber: 2,
				title: "Collaboration",
				description: "PRs, reviews, conventions.",
			},
			{
				moduleNumber: 3,
				title: "Conflicts",
				description: "Merge conflicts and recovery.",
			},
			{
				moduleNumber: 4,
				title: "Team workflows",
				description: "Trunk vs GitFlow, best practices.",
			},
		],

		reviews: [
			{ name: "Saimon R.", quote: "Now I’m not scared of conflicts anymore." },
			{ name: "Hira K.", quote: "PR workflow explained perfectly." },
			{ name: "Leo M.", quote: "Simple, modern, and team-focused." },
		],
	},
];

export const getCourseById = (id) => courses.find((c) => c.id === id);
export const getCourseBySlug = (slug) => courses.find((c) => c.slug === slug);
