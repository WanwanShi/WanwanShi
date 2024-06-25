const settings = {
	isSplash: true,
};

const seo = {
	title: "Wanwan Shi",
	description:
		"Hello and welcome to my portfolio! I'm passionate about creating impactful solutions through technology. Explore my projects and journey as a full-stack developer.",
	og: {
		title: "Wanwan Shi Portfolio",
		type: "website",
		url: "https://wanwanshi.netlify.app/",
	},
};

//Home Page
const greeting = {
	title: "Wanwan Shi",
	logo_name: "Wanwan Shi",
	nickname: "Wendy",
	subTitle:
		"Welcome to my portfolio! I thrive on leveraging technology to create innovative solutions. As a problem solver at heart, I'm dedicated to crafting impactful applications. Explore my projects and join me on my journey in software development.",
	resumeLink:
		"https://drive.google.com/file/d/1D1ubL8yYiSX3HAtGNbMiGe0PHTYFC-Cf/view?usp=sharing",
	portfolio_repository: "https://github.com/WanwanShi/WanwanShi",
	githubProfile: "https://github.com/WanwanShi",
};

const socialMediaLinks = [
	{
		name: "Github",
		link: "https://github.com/WanwanShi",
		fontAwesomeIcon: "fa-github",
		backgroundColor: "#181717",
	},
	{
		name: "LinkedIn",
		link: "https://www.linkedin.com/in/wanwanshi/",
		fontAwesomeIcon: "fa-linkedin-in",
		backgroundColor: "#0077B5",
	},

	{
		name: "Instagram",
		link: "https://www.instagram.com/wendyshi123/",
		fontAwesomeIcon: "fa-instagram",
		backgroundColor: "#E4405F",
	},
];

const skills = {
	data: [
		{
			title: "Coding Languages",
			fileName: "backend",
			skills: [
				"⚡ Expertise in JavaScript for building dynamic, interactive web applications",
				"⚡ Proficient in TypeScript for creating robust, type-safe codebase in large-scale projects",
				"⚡ Skilled in Python for developing versatile, high-performance applications across various domains",
			],
			softwareSkills: [
				{
					skillName: "Javascript",
					fontAwesomeClassname: "",
					imageSrc: "javascript.png",
					style: {
						backgroundColor: "transparent",
					},
				},
				{
					skillName: "TypeScript",
					fontAwesomeClassname: "",
					imageSrc: "typescript.png",
					style: {
						backgroundColor: "transparent",
					},
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "ion-logo-python",
					style: {
						backgroundColor: "transparent",
						color: "#3776AB",
					},
				},
			],
		},
		{
			title: "Full Stack Developer",
			fileName: "desk",
			skills: [
				"⚡ Building dynamic, responsive web applications using the MERN stack (MongoDB, Express.js, React, Node.js)",
				"⚡ Developing cross-platform mobile applications with Flutter and React Native",
				"⚡ Creating robust, scalable backend services and APIs with Node.js and Express",
			],
			softwareSkills: [
				{
					skillName: "HTML5",
					fontAwesomeClassname: "fa-brands fa-html5",
					style: {
						color: "#E34F26",
					},
				},
				{
					skillName: "CSS3",
					fontAwesomeClassname: "fa-brands fa-css3",
					style: {
						color: "#1572B6",
					},
				},
				{
					skillName: "Javascript",
					fontAwesomeClassname: "",
					imageSrc: "javascript.png",
					style: {
						backgroundColor: "transparent",
					},
				},
				{
					skillName: "TypeScript",
					fontAwesomeClassname: "",
					imageSrc: "typescript.png",
					style: {
						backgroundColor: "transparent",
					},
				},
				{
					skillName: "React",
					fontAwesomeClassname: "fa-brands fa-react",
					style: {
						color: "#61DAFB",
					},
				},
				{
					skillName: "Node",
					fontAwesomeClassname: "fa-brands fa-node",
					style: {
						color: "#339933",
					},
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "fa-brands fa-npm",
					style: {
						color: "#CB3837",
					},
				},

				{
					skillName: "React Native",
					imageSrc: "react-native.png",
					style: {},
				},
			],
		},
		{
			title: "Database Management",
			fileName: "database",
			skills: [
				"⚡  Mastering complex queries and database design with PostgreSQL",
				"⚡ Streamlining data storage and retrieval using MongoDB",
				"⚡ Leveraging Firebase for scalable, real-time database solutions",
			],
			softwareSkills: [
				{
					skillName: "AWS",
					fontAwesomeClassname: "fa-brands fa-aws",
					style: {
						color: "#FF9900",
					},
				},

				{
					skillName: "Firebase",
					imageSrc: "firebase.png",
					style: {
						color: "#FFCA28",
					},
				},
				{
					skillName: "PostgreSQL",
					imageSrc: "postgresql.png",
					style: {
						color: "#336791",
					},
				},
				{
					skillName: "MongoDB",
					fontAwesomeClassname: "",
					imageSrc: "mongodb.png",
					style: {
						color: "#47A248",
					},
				},
			],
		},
		{
			title: "UI/UX Design",
			fileName: "DesignImg",
			skills: [
				"⚡ Designing intuitive and visually appealing user interfaces with Figma for mobile and web applications",
				"⚡ Conducting user research and creating wireframes, prototypes, and user flows to optimize user experience",
				"⚡  Crafting detailed vector graphics and illustrations using Inkscape",
			],
			softwareSkills: [
				{
					skillName: "Figma",
					imageSrc: "figma.png",
					style: {
						color: "#F24E1E",
					},
				},
				{
					skillName: "Inkscape",
					imageSrc: "inkscape.png",
					style: {
						color: "#FF7C00",
					},
				},
			],
		},
	],
};

// Education Page
const competitiveSites = {
	competitiveSites: [
		{
			siteName: "LeetCode",
			iconifyClassname: "simple-icons:leetcode",
			imageSrc: "leetcode.png",
			style: {
				color: "#F79F1B",
			},
			profileLink: "https://leetcode.com/u/Wendyshi108/",
		},
		{
			siteName: "HackerRank",
			iconifyClassname: "simple-icons:hackerrank",
			imageSrc: "hackerrank.png",
			style: {
				color: "#2EC866",
			},
			profileLink: "https://www.hackerrank.com/profile/wendyshi1082017",
		},
		{
			siteName: "Codechef",
			iconifyClassname: "simple-icons:codechef",
			imageSrc: "codechef.png",
			style: {
				color: "#5B4638",
			},
			profileLink: "https://www.codechef.com/users/wendyshi",
		},
		{
			siteName: "Codewars",
			iconifyClassname: "simple-icons:codewars",
			imageSrc: "codewars.png",
			style: {
				color: "#f05756",
			},
			profileLink: "https://www.codewars.com/users/wendyshi",
		},
	],
};

const degrees = {
	degrees: [
		{
			title: "University of Bristol",
			subtitle: "MSc in Mathematics Education",
			logo_path: "bristol_logo.png",
			alt_name: "University of Bristol",
			duration: "2020 - 2021",
			descriptions: [
				"⚡ I completed a Master of Education in Mathematics Education with distinction, focusing on analytical and research skills through studying students' mathematical understanding.",
				"⚡ My research involves using the TPACK framework and Desmos, showcasing my ability to integrate technology effectively.",
				"⚡ I have developed strong skills in data analysis and educational technology, applicable to solving complex problems in software development.",
			],
			website_link: "https://www.bristol.ac.uk/",
		},
		{
			title: "Shanghai Lixin University of Accounting and Finance",
			subtitle: "Bachelor in Insurance Actuarial",
			logo_path: "lixin_logo.png",
			alt_name: "Shanghai Lixin University of Accounting and Finance",
			duration: "2007-2011",
			descriptions: [
				"⚡ I graduated with a Bachelor of Economics, majoring in Insurance, achieving a GPA of 3.57/4.0 and ranking in the top 3% of my department.",
				"⚡ I was awarded the National Scholarship and other recognitions for academic excellence, demonstrating my commitment to continuous learning.",
				"⚡ My academic background includes rigorous coursework and projects that have honed my quantitative analysis and critical thinking skills, beneficial for a tech career.",
			],
			website_link: "https://en.lixin.edu.cn/main.htm",
		},
	],
};

const certifications = {
	certifications: [
		{
			title: "Software Engineering Certification",
			subtitle: "Northcoders",
			logo_path: "northcoders_logo.png",
			certificate_link:
				"https://drive.google.com/file/d/1yjngP8wBrUvuf96-EkVaQFEz_wO18cfc/view?usp=sharing",
			alt_name: "Software Engineering Certification",
			color_code: "#dcd3c1",
		},
		{
			title: "Responsive Web Design Certification",
			subtitle: "freeCodeCamp",
			logo_path: "freecodecamp.png",
			certificate_link:
				"https://www.freecodecamp.org/certification/WanwanShi/responsive-web-design",
			alt_name: "Responsive Web Design",
			color_code: "#8C151599",
		},
		{
			title: "Algorithms and Data Structures",
			subtitle: "freeCodeCamp",
			logo_path: "freecodecamp.png",
			certificate_link:
				"https://www.freecodecamp.org/certification/WanwanShi/javascript-algorithms-and-data-structures-v8",
			alt_name: "Legacy JavaScript Algorithms and Data Structures",
			color_code: "#00000099",
		},
		{
			title: "Front End Development Libraries",
			subtitle: "freeCodeCamp",
			logo_path: "freecodecamp.png",
			certificate_link:
				"https://drive.google.com/file/d/1hgdwb94i8lk0nq9Qs4oyAtx0Ohj1jA-D/view?usp=sharing",
			alt_name: "Front End Development Libraries",
			color_code: "#0C9D5899",
		},
		{
			title: "Software Engineer Intern",
			subtitle: "- Hackerrank",
			logo_path: "cib--hackerrank.png",
			certificate_link: "https://www.hackerrank.com/certificates/a15e5c6018db",
			alt_name: "Software Engineer Intern",
			color_code: "#1F70C199",
		},
		{
			title: "Problem Solving",
			subtitle: "- Hackerrank",
			logo_path: "cib--hackerrank.png",
			certificate_link: "https://www.hackerrank.com/certificates/9d25987b4058",
			alt_name: "Problem Solving",
			color_code: "#D83B0199",
		},
		{
			title: "Front End Developer",
			subtitle: "-  (In Progress)",
			logo_path: "meta_logo.png",
			certificate_link: "",
			alt_name: "Meta",
			color_code: "#1F70C199",
		},
		{
			title: "PGCE in Mathematics",
			subtitle: "- QTS",
			logo_path: "reading_logo.png",
			certificate_link:
				"https://drive.google.com/file/d/1EMIZAdQgb-HqrjB4AkO_rWmkwApnPv6Z/view?usp=sharing",
			alt_name: "QTS",
			color_code: "#0C9D5899",
		},

		{
			title: "Fullstack Development",
			subtitle: "- Coursera",
			logo_path: "coursera_logo.png",
			certificate_link: "",
			alt_name: "Coursera",
			color_code: "#2A73CC",
		},
		{
			title: "AWS Cloud Practitioner",
			subtitle: "- (In progress)",
			logo_path: "aws.png",
			certificate_link: "",
			alt_name: "GCP",
			color_code: "#4285F499",
		},
	],
};

// Experience Page
const experience = {
	title: "Experience",
	subtitle: "Work, Volunteership",
	description:
		"I have gained valuable experience in software development through boot camps and personal projects, fulfilling roles as a Developer, Designer, and Software Architect. I actively contribute to open-source communities, organize tech events, and apply Agile methodologies to drive innovation.",
	header_image_path: "experience.svg",
	sections: [
		{
			title: "Work",
			work: true,
			experiences: [
				{
					title: "Junior Software Developer",
					company: "Northcoders",
					company_url: "https://northcoders.com/",
					logo_path: "northcoders_logo.jpg",
					duration: "Jan 2024 - May 2024",
					location: "Manchester, UK",
					description:
						"Join the Boot Camp to learn modern web development skills and get a job as a junior developer. We are a team of 10 developers and we are looking for experienced developers to join our team. We are looking for developers with strong problem-solving skills, attention to detail, and a passion for learning. We are a remote-first company, so you can work from anywhere in the world.",
					color: "#000000",
				},
				{
					title: "Mathematics Teacher",
					company: "Thornden School",
					company_url: "https://www.thornden.hants.sch.uk/",
					logo_path: "thornden_logo.jpg",
					duration: "Sep 2022 - Aug 2023",
					location: "Winchester, UK",
					description:
						"Working in the Secondary school as a Mathematics Teacher. I have taught students from age 6 to 10. I have taught them various subjects like Algebra, Geometry, Trigonometry, Statistics, Probability, Calculus, and more. I have also conducted exams and quizzes to assess their understanding of the subject.",
					color: "#0879bf",
				},
				{
					title: " Mathematics Tutor",
					company: "Rocket Academy",
					company_url: "https://ems.rocketacademy.com.cn/signin",
					logo_path: "rocketacademy_logo.png",
					duration: "May 2018 - Present",
					location: "Shanghai, China",
					description:
						"Cooperate with Rocket Academy to provide Mathematics tutoring to students from different schools. I have tutored students from different schools in Maths, Physics, Chemistry, and English. I have also conducted online quizzes and exams to assess their understanding of the subject.",
					color: "#9b1578",
				},
				{
					title: "Freelance Tutor",
					company: "Freelance",
					company_url: "",
					logo_path: "freelancer.png",
					duration: "Nov 2014 - Present",
					location: "Shanghai, China",
					description:
						"Working as a freelance tutor for students from different schools. I have tutored students from different schools in Maths, Physics, Chemistry, and English. I have also conducted online quizzes and exams to assess their understanding of the subject.",
					color: "#fc1f20",
				},
			],
		},

		{
			title: "Volunteerships",
			experiences: [
				{
					title: "Developer Program Member",
					company: "Github",
					company_url: "https://github.com/",
					logo_path: "github_logo.png",
					duration: "Jan 2024 - PRESENT",
					location: "Remote Work",
					description:
						"I am actively contributing to many open source projects.  These contributions include bug fixes, feature requests and formulating proper documentation for project.",
					color: "#181717",
				},

				{
					title: "Volunteer Contributor",
					company: "Leetcode",
					company_url: "https://leetcode.com/",
					logo_path: "leetcode.png",
					duration: "Jan 2024 - PRESENT",
					location: "Remote Work",
					description:
						"I contribute to LeetCode by consistently solving a wide range of coding challenges, focusing on clarity, efficiency, and correctness in my solutions. I document and share detailed explanations alongside my code to aid learning and promote best practices within the community.",
					color: "#181717",
				},
				{
					title: "UX and Product Enhancement Volunteer",
					company: "Maths-angel",
					company_url: "https://maths-angel.co.uk/home",
					logo_path: "mathsangel.png",
					duration: "June 2024 - PRESENT",
					location: "Remote Work",
					description:
						"I volunteered with an AI-powered startup, offering UX design insights and performance suggestions to enhance their product. My contributions focused on optimizing user experience, refining product design, and improving overall performance.",
					color: "#181717",
				},
			],
		},
	],
};

// Projects Page
const projectsHeader = {
	title: "Projects",
	description:
		"After completing an intensive boot camp, I am thrilled to showcase my ongoing projects, where I am passionately integrating a diverse array of cutting-edge technologies to build impactful full stack applications. I'm eager to leverage these experiences to secure a rewarding job opportunity.",
	avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
	contactSection: {
		title: "Contact Me",
		profile_image_path: "avatar.png",
		description:
			"I'm reachable on various social media platforms and committed to responding promptly within 24 hours. With expertise in React, Node.js, Express, SQL, and MongoDB, I'm eager to apply my skills and experience effectively in a new job role.",
	},
	blogSection: {
		title: "Blogs",
		subtitle:
			"I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
		link: "https://blogs.ashutoshhathidara.com/",
		avatar_image_path: "blogs_image.svg",
	},
	addressSection: {
		title: "Address",
		subtitle: "Oxford, UK",
		locality: "Oxford",
		country: "UK",
		region: "Oxfordshire",
		postalCode: "OX28 5BY",
		streetAddress: "",
		avatar_image_path: "address_image.svg",
		location_map_link: "https://maps.app.goo.gl/SpP2VjaicvbL15KR6",
	},
	phoneSection: {
		title: "+44 7938 766 855",
		subtitle: "",
	},
};

export {
	settings,
	seo,
	greeting,
	socialMediaLinks,
	skills,
	competitiveSites,
	degrees,
	certifications,
	experience,
	projectsHeader,
	contactPageData,
};
