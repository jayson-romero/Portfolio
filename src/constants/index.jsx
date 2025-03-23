// IMAGE
import {
	// project img
	project1,
	project2,
	project3,
	project4,
	project5,
	project6,
	// cert img
	cert_devfun,
	cert_uiux,
	// tech stact img
	html,
	css,
	javascript,
	reactjs,
	node,
	express,
	mongodb,
	mysql,
	tailwind,
	figma,
} from "../assets"

// ICONS FROM REACT ICONS
import {
	PiCertificateFill,
	PiUserListFill,
	PiListBulletsFill,
} from "react-icons/pi"
import {
	FaFacebook,
	FaTelegramPlane,
	FaLinkedin,
	FaInstagram,
} from "react-icons/fa"

// NAVLINKS
export const navLinks = [
	{
		id: "home",
		title: "Home",
		link: "#home",
	},
	{
		id: "projects",
		title: "Projects",
		link: "#projects",
	},
	{
		id: "about-me",
		title: "About Me",
		link: "#about-me",
	},
	{
		id: "contacts",
		title: "Contacts",
		link: "#contacts",
	},
	{
		id: "blog",
		title: "Blog",
		link: "https://myblog-jaysonromero.vercel.app/",
	},
]

// TECT STACK
export const tech = [
	{
		id: "HTML",
		img: html,
	},
	{
		id: "CSS",
		img: css,
	},
	{
		id: "JavaScript",
		img: javascript,
	},
	{
		id: "React JS",
		img: reactjs,
	},
	{
		id: "Node JS",
		img: node,
	},
	{
		id: "Express JS",
		img: express,
	},
	{
		id: "MongoDB",
		img: mongodb,
	},
	{
		id: "MySQL",
		img: mysql,
	},
	{
		id: "Tailwind",
		img: tailwind,
	},
	{
		id: "Figma",
		img: figma,
	},
]

//SOCIAL MEDIA
export const socialMedia = [
	{
		id: "social-media-1",
		icon: <FaInstagram />,
		link: "https://www.instagram.com/jayson_rmr/",
	},
	{
		id: "social-media-2",
		icon: <FaFacebook />,
		link: "https://www.facebook.com/jaysonrmr",
	},
	{
		id: "social-media-3",
		icon: <FaTelegramPlane />,
		link: "https://web.telegram.org/a/",
	},
	{
		id: "social-media-4",
		icon: <FaLinkedin />,
		link: "https://www.linkedin.com/in/jayson-romero",
	},
]

// PROJECTS
export const projects = [
	{
		id: 1,
		type: "Personal Project",
		title: "Clothing Web App",
		desc: "Enjoy intuitive navigation, vibrant visuals, and a user-friendly interface, making your online shopping journey seamless and delightful.",
		content:
			"Clothing Website using HTML for structure, CSS for style, and Javascript for interactivity with vibrant visuals, and a user-friendly interface.",
		technologies: "HTML, CSS, JavaScript,",
		date: "12/12/2021",
		url: "http://clothingprojectwebsite.jaysonromero.io",
		img: project1,
	},
	{
		id: 2,
		type: "Personal Project",
		title: "Let's Food Web App",
		desc: "Ecommerce Website stylish and crafted using React, Tailwind CSS, React-Icons, and Vite. Elevate your online presence effortlessly!",
		content:
			"This Website using React for interactivity, Tailwind for style, React-Icons for icons, and Vite as build tool to ensures swift loading times.",
		technologies: "React, Tailwind, Vite",
		date: "12/12/2021",
		url: "https://letsfood.jaysonromero.io",
		img: project2,
	},
	{
		id: 3,
		type: "Freelance Project",
		title: "Goodrich Air Solutions Inc.",
		desc: "GASI web app has simple functionality, a feature that you can see the services that they offer and contact section where you send an email directly.",
		content:
			"This Website using React JS for structure and interactivity, Tailwind for style for a user-friendly interface.",
		technologies: "React JS, Tailwind, JavaScript,FontAwesome, EmailJS,",
		date: "02/12/2024",
		url: "https://goodrichairsolutions.com/",
		img: project3,
	},
	{
		id: 4,
		type: "Personal Project",
		title: "GPT-3 Web App",
		desc: "Fully Responsive Modern UI/UX Website in React JS",
		content:
			"This Website using React for interactivity, CSS for style, React-Icons for icons, and Vite as build tool to ensures swift loading times.",
		technologies: "React, CSS, React-Icons, Vite",
		date: "12/12/2021",
		url: "https://jayson-romero.github.io/gpt3_jsm",
		img: project4,
	},
	{
		id: 5,
		type: "Personal Project",
		title: "Gericht Web App",
		desc: "Fully responsive Modern Restaurant Application",
		content:
			"This Website using React for interactivity, CSS for style, React-Icons for icons, and Vite as build tool to ensures swift loading times.",
		technologies: "React, CSS, React-Icons, Vite",
		date: "12/12/2021",
		url: "https://jayson-romero.github.io/gerich-restaurant/",
		img: project5,
	},
	{
		id: 6,
		type: "Personal Project",
		title: "Placie Web Design",
		desc: "Fully Responsive Modern UI/UX Website in Figma",
		content: "Fully Responsive Modern UI/UX Website Design in Figma",
		technologies: "Figma",
		date: "12/12/2021",
		url: "https://www.figma.com/proto/HLHdEy0vQznXKPwmeNk27P/Free-Travel-UI-Landing-Page-(Community)?type=design&node-id=2-2&t=XJeWt9cQF6bV9ZYn-1&scaling=min-zoom&page-id=0%3A1&mode=design",
		img: project6,
	},
]

// ABOUT ME
export const features = [
	{
		id: "technical-skills",
		icon: <PiListBulletsFill />,
		title: "Technical Skills",
		desc: "Always strive to learn about the newest technologies and frameworks,  and emerging trends in the industry.",
		content: [
			{
				id: 1,
				title: "Language",
				href: "#",
				description: null,
				date: null,
				datetime: "2020-03-16",
				category: { title: "", href: "#" },
				author: [
					{
						name: "Javascript",
						role: "Programming Language",
						href: "",
						imageUrl:
							"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
					},
				],
			},
			{
				id: 2,
				title: "Framerwork/Library ",
				href: "#",
				description: null,
				date: null,
				datetime: "2020-03-16",
				category: { title: null, href: null },
				author: [
					{
						name: "React JS",
						role: "JavaScript-based UI Development Library",
						href: "",
						imageUrl:
							"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png",
					},
					{
						name: "Express JS",
						role: "Node.js Web Application Framework",
						href: "",
						imageUrl:
							"https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
					},
					{
						name: "Tailwind",
						role: "CSS Framework Packed",
						href: "",
						imageUrl:
							"https://avatars.githubusercontent.com/u/67109815?s=280&v=4",
					},
					{
						name: "Material UI",
						role: "Open-Source React Component Library",
						href: "",
						imageUrl:
							"https://w7.pngwing.com/pngs/761/513/png-transparent-material-ui-logo.png",
					},
				],
			},
			{
				id: 3,
				title: "Tool",
				href: "#",
				description: null,
				date: null,
				datetime: "2020-03-16",
				category: { title: null, href: null },
				author: [
					{
						name: "Visual Studio Code",
						role: "Application Development Environment",
						href: "",
						imageUrl:
							"https://logowik.com/content/uploads/images/visual-studio-code7642.jpg",
					},
					{
						name: "Figma",
						role: "Powerful Design Tool",
						href: "",
						imageUrl:
							"https://s3-alpha.figma.com/hub/file/2815952264/7a5ebfb0-0508-48ab-be9a-31b36ba53f97-cover.png",
					},
					{
						name: "Github",
						role: "Online Software Development Platform",
						href: "",
						imageUrl:
							"https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
					},
					{
						name: "Vite",
						role: "Platform-agnostic Frontend Tool",
						href: "",
						imageUrl:
							"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png",
					},
					{
						name: "Firebase",
						role: "App Development Platform",
						href: "",
						imageUrl:
							"https://w7.pngwing.com/pngs/246/288/png-transparent-firebase-hd-logo-thumbnail.png",
					},
				],
			},
			{
				id: 4,
				title: "Other",
				href: "#",
				description: null,
				date: null,
				datetime: null,
				category: { title: null, href: null },
				author: [
					{
						name: "HTML",
						role: "Hyper Text Markup Language",
						href: "",
						imageUrl:
							"https://seeklogo.com/images/H/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png",
					},
					{
						name: "CSS",
						role: "Cascading Style Sheets",
						href: "",
						imageUrl:
							"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png",
					},
					{
						name: "NodeJS",
						role: "Open Source Server Environment",
						href: "",
						imageUrl:
							"https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
					},
				],
			},
			{
				id: 5,
				title: "Database",
				href: "#",
				description: null,
				date: null,
				datetime: null,
				category: { title: null, href: null },
				author: [
					{
						name: "MongoDB",
						role: "Open Source NoSQL Database",
						href: "",
						imageUrl:
							"https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg",
					},
					{
						name: "MySQL",
						role: "Relational Database Management System",
						href: "",
						imageUrl:
							"https://banner2.cleanpng.com/20180612/iep/kisspng-php-mysql-html-cascading-style-sheets-database-oracle-application-development-framework-5b20413b63ee58.3357231115288405074093.jpg",
					},
				],
			},
		],
	},
	{
		id: "work-experience",
		icon: <PiUserListFill />,
		title: "Work Experiences",
		desc: "Web developer with strong problem-solving, Open for Continuous learning and collaboration.",
		content: [
			{
				id: 1,
				title: "Email Developer Associate",
				img: "",
				href: "",
				description:
					"Help the Client in organizing the world’s information and making it universally accessible and useful by translating it into specifications and programming deliverables.",
				date: "March 2025 - Present",
				datetime: "2025-03-03",
				category: {
					title: "",
					href: "",
				},
				author: [
					{
						name: "Accenture",
						role: "Global Professional Services Company",
						href: "https://www.accenture.com/ph-en",
						imageUrl:
							"https://e7.pngegg.com/pngimages/622/273/png-clipart-digital-video-accenture-digital-consultant-others-miscellaneous-purple-thumbnail.png",
					},
				],
			},
			{
				id: 2,
				title: "Network Operations Associate",
				img: "",
				href: "https://www.accenture.com/ph-en",
				description:
					"Provide Assistance services in order to ensure effective and efficient operation in IT Department to be able to meet established goals and objectives.",
				date: "May 2022 - Feb 2025",
				datetime: "2022-03-19",
				category: {
					title: "",
					href: "",
				},
				author: [
					{
						name: "Accenture",
						role: "Global Professional Services Company",
						href: "https://www.accenture.com/ph-en",
						imageUrl:
							"https://e7.pngegg.com/pngimages/622/273/png-clipart-digital-video-accenture-digital-consultant-others-miscellaneous-purple-thumbnail.png",
					},
				],
			},
			{
				id: 3,
				title: "Transaction Processing New Associate",
				img: "",
				href: "https://www.accenture.com/ph-en",
				description:
					"Perform data analysis and apply knowledge of process and related systems to do a task to be able to meet established goals and objectives.",
				date: "Sept 2018 - Apr 2022",
				datetime: "2020-03-16",
				category: { title: "", href: "" },
				author: [
					{
						name: "Accenture",
						role: "Global Professional Services Company",
						href: "https://www.accenture.com/ph-en",
						imageUrl:
							"https://e7.pngegg.com/pngimages/622/273/png-clipart-digital-video-accenture-digital-consultant-others-miscellaneous-purple-thumbnail.png",
					},
				],
			},
		],
	},
	{
		id: "courses-trainings",
		icon: <PiCertificateFill />,
		title: "Courses and Trainings",
		desc: "Always seeking for personal and professional growth through ongoing education and skill development.",
		content: [
			{
				id: 1,
				title: "Developer Fundamentals",
				img: cert_devfun,
				href: "https://learn.percipio.com/login?state=%2Fogin%3Fstate%3D%252Fl#/",
				description: "Prerequisites for every software development-related",
				date: "Aug 8, 2022",
				datetime: "2022-08-08",
				category: {
					title: "Training",
					href: "https://learn.percipio.com/login?state=%2Fogin%3Fstate%3D%252Fl#/",
				},
				author: [
					{
						name: "Percipio",
						role: "Online Learning Platform",
						href: "https://learn.percipio.com/login?state=%2Fogin%3Fstate%3D%252Fl#/",
						imageUrl:
							"https://play-lh.googleusercontent.com/gO-3qiOUhPPbvpzMWRYsH1a86Y7MRnCWScJ0q7tEci4P0Mkqunhf7a3QsJJfFbx5xgU",
					},
				],
			},
			{
				id: 2,
				title: "UI/UX Design: Adobe XD Masterclass",
				img: cert_uiux,
				href: "https://www.facebook.com/mstconnectph",
				description:
					"9-hours training in UI/UX design: Adobe XD Masterclass (from scratch to project handover)",
				date: "Mar 19, 2022",
				datetime: "2022-03-19",
				category: {
					title: "Training",
					href: "https://www.facebook.com/mstconnectph",
				},
				author: [
					{
						name: "MST Connect",
						role: "Educational Consultancy",
						href: "https://www.facebook.com/mstconnectph",
						imageUrl: "https://placehold.co/500x500?text=Logo",
					},
				],
			},
			{
				id: 3,
				title: "Bachelor of Science in Information Technology",
				img: "https://placehold.co/935x662?text=Certificate",
				href: "https://bcp.edu.ph/",
				description:
					"Four-year degree program focuses with  design and development of computer-based information systems for real-world business solutions.",
				date: "Mar 2014 - Jun 2018",
				datetime: "2020-03-16",
				category: { title: "Courses", href: "https://bcp.edu.ph/" },
				author: [
					{
						name: "Bestlink College of the Philippines",
						role: "Private Educational Institution",
						href: "https://bcp.edu.ph/",
						imageUrl: "https://bcp.edu.ph/images/logo300.png",
					},
				],
			},
		],
	},
]

// FOOTER LINKS
export const footerLinks = [
	{
		id: 1,
		title: "Phone",
		links: [
			{
				name: "+63 938 425 5506",
				link: "https://web.telegram.org/a/",
			},
		],
	},
	{
		id: 2,
		title: "Email",
		links: [
			{
				name: "jaysonromero1218@gmail.com",
				link: "mailto:jaysonromero1218@gmail.com",
			},
		],
	},
	{
		id: 3,
		title: "Address",
		links: [
			{
				name: "Quezon City, Philippines",
				link: "https://www.google.com/maps/place/Quezon+City,+Metro+Manila/@14.6839212,120.9797883,12z/data=!3m1!4b1!4m6!3m5!1s0x3397ba0942ef7375:0x4a9a32d9fe083d40!8m2!3d14.6760413!4d121.0437003!16zL20vMDFwdDV3?entry=ttu",
			},
		],
	},
]
