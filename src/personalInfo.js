const settings = {
	isSplash: true,
};

const seo = {
	title: "Wanwan Shi",
	description:
		"A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
	og: {
		title: "Wanwan Shi Portfolio",
		type: "website",
		url: "http://ashutoshhathidara.com/",
	},
};

//Home Page
const greeting = {
	title: "Wanwan Shi",
	logo_name: "Wanwan Shi",
	nickname: "Wendy",
	subTitle:
		"A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
	resumeLink:
		"https://drive.google.com/file/d/1D1ubL8yYiSX3HAtGNbMiGe0PHTYFC-Cf/view?usp=sharing",
	portfolio_repository: "https://github.com/WanwanShi/WanwanShi",
	githubProfile: "https://github.com/WanwanShi",
};

const socialMediaLinks = [
	{
		name: "Github",
		link: "https://github.com/WanwanShi",
		fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
		backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
	},
	{
		name: "LinkedIn",
		link: "https://www.linkedin.com/in/wanwanshi/",
		fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
		backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
	},

	{
		name: "Instagram",
		link: "https://www.instagram.com/wendyshi123/",
		fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/google?style=brands
		backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=gmail
	},
];

const skills = {
	data: [
		{
			title: "Data Science & AI",
			fileName: "DataScienceImg",
			skills: [
				"⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
				"⚡ Experience of working with Computer Vision and NLP projects",
				"⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
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
			title: "Full Stack Development",
			fileName: "FullStackImg",
			skills: [
				"⚡ Building responsive website front end using React-Redux",
				"⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
				"⚡ Creating application backend in Node, Express & Flask",
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
			title: "Cloud Infra-Architecture",
			fileName: "CloudInfraImg",
			skills: [
				"⚡ Experience working on multiple cloud platforms",
				"⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
				"⚡ Deploying deep learning models on cloud to use on mobile devices",
				"⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
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
				{
					skillName: "Docker",
					fontAwesomeClassname: "simple-icons:docker",
					style: {
						color: "#1488C6",
					},
				},
			],
		},
		{
			title: "UI/UX Design",
			fileName: "DesignImg",
			skills: [
				"⚡ Designing highly attractive user interface for mobile and web applications",
				"⚡ Customizing logo designs and building logos from scratch",
				"⚡ Creating the flow of application functionalities to optimize user experience",
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
					skillName: "Adobe Illustrator",
					imageSrc: "ai.png",
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
			profileLink: "https://www.hackerrank.com/layman_brother",
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
			profileLink: "https://www.codewars.com/users/wendyshir",
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
				"⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
				"⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
				"⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
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
				"⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
				"⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
				"⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
			],
			website_link: "https://en.lixin.edu.cn/main.htm",
		},
	],
};

const certifications = {
	certifications: [
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
				"https://www.freecodecamp.org/certification/WanwanShi/responsive-web-design",
			alt_name: "Legacy JavaScript Algorithms and Data Structures",
			color_code: "#00000099",
		},
		{
			title: "Front End Development Libraries",
			subtitle: "freeCodeCamp",
			logo_path: "freecodecamp.png",
			certificate_link:
				"https://www.freecodecamp.org/certification/WanwanShi/responsive-web-design",
			alt_name: "Front End Development Libraries",
			color_code: "#0C9D5899",
		},
		{
			title: "Data Science",
			subtitle: "- Alex Aklson",
			logo_path: "ibm_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
			alt_name: "IBM",
			color_code: "#1F70C199",
		},
		{
			title: "IT support",
			subtitle: "- Google",
			logo_path: "google_logo.png",
			certificate_link:
				"https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
			alt_name: "Microsoft",
			color_code: "#D83B0199",
		},
		{
			title: "Front End Developer",
			subtitle: "- Meta",
			logo_path: "meta_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
			alt_name: "Meta",
			color_code: "#1F70C199",
		},
		{
			title: "PGCE in Mathematics",
			subtitle: "- QTS",
			logo_path: "reading_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
			alt_name: "QTS",
			color_code: "#0C9D5899",
		},

		{
			title: "Fullstack Development",
			subtitle: "- IBM",
			logo_path: "coursera_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
			alt_name: "Coursera",
			color_code: "#2A73CC",
		},
		{
			title: "AWS Cloud Practitioner",
			subtitle: "- (In progress)",
			logo_path: "aws.png",
			certificate_link:
				"https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
			alt_name: "GCP",
			color_code: "#4285F499",
		},
	],
};

// Experience Page
const experience = {
	title: "Experience",
	subtitle: "Work, Internship and Volunteership",
	description:
		"I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
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
			title: "Internships",
			experiences: [
				{
					title: "Machine Learning Intern",
					company: "TikTok Inc.",
					company_url: "https://www.tiktok.com/en/",
					logo_path: "tiktok_logo.png",
					duration: "May 2022 - Aug 2022",
					location: "San Francisco, USA",
					description:
						"Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
					color: "#000000",
				},
				{
					title: "Data Science Research Intern",
					company: "Delhivery Pvt. Ltd.",
					company_url: "https://www.delhivery.com/",
					logo_path: "delhivery_logo.png",
					duration: "May 2019 - Sept 2019",
					location: "Gurgaon, Haryana",
					description:
						"I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
					color: "#ee3c26",
				},
				{
					title: "Data Science Intern",
					company: "Intel Indexer LLC",
					company_url:
						"https://opencorporates.com/companies/us_dc/EXTUID_4170286",
					logo_path: "intel_logo.jpg",
					duration: "Nov 2018 - Dec 2018",
					location: "Work From Home",
					description:
						"This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
					color: "#0071C5",
				},
			],
		},
		{
			title: "Volunteerships",
			experiences: [
				{
					title: "Google Explore ML Facilitator",
					company: "Google",
					company_url: "https://about.google/",
					logo_path: "google_logo.png",
					duration: "June 2019 - April 2020",
					location: "Hyderabad, Telangana",
					description:
						"Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
					color: "#4285F4",
				},
				{
					title: "Microsoft Student Partner",
					company: "Microsoft",
					company_url: "https://www.microsoft.com/",
					logo_path: "microsoft_logo.png",
					duration: "Aug 2019 - May 2020",
					location: "Hyderabad, Telangana",
					description:
						"Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
					color: "#D83B01",
				},
				{
					title: "Mozilla Campus Captain",
					company: "Mozilla",
					company_url: "https://www.mozilla.org/",
					logo_path: "mozilla_logo.png",
					duration: "Oct 2019 - May 2020",
					location: "Kurnool, Andhra Pradesh",
					description:
						"My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
					color: "#000000",
				},
				{
					title: "Developer Students Club Member",
					company: "DSC IIITDM Kurnool",
					company_url:
						"https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
					logo_path: "dsc_logo.png",
					duration: "Jan 2018 - May 2020",
					location: "Kurnool, Andhra Pradesh",
					description:
						"We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
					color: "#0C9D58",
				},
				{
					title: "Developer Program Member",
					company: "Github",
					company_url: "https://github.com/",
					logo_path: "github_logo.png",
					duration: "July 2019 - PRESENT",
					location: "Work From Home",
					description:
						"I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
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
		"My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
	avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
	title: "Publications",
	description: "Some of my published Articles, Blogs and Research.",
	avatar_image_path: "projects_image.svg",
};

const publications = {
	data: [
		{
			id: "neuro-symbolic-sudoku-solver",
			name: "Neuro-Symbolic Sudoku Solver",
			createdAt: "2023-07-02T00:00:00Z",
			description: "Paper published in KDD KiML 2023",
			url: "https://arxiv.org/abs/2307.00653",
		},
		{
			id: "mdp-diffusion",
			name: "MDP-Diffusion",
			createdAt: "2023-09-19T00:00:00Z",
			description: "Blog published in Paperspace",
			url: "https://blog.paperspace.com/mdp-diffusion/",
		},
		{
			id: "consistency-models",
			name: "Consistency Models",
			createdAt: "2023-10-12T00:00:00Z",
			description: "Blog published in Paperspace",
			url: "https://blog.paperspace.com/consistency-models/",
		},
	],
};

// Contact Page
const contactPageData = {
	contactSection: {
		title: "Contact Me",
		profile_image_path: "animated_ashutosh.png",
		description:
			"I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
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
		subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
		locality: "San Jose",
		country: "USA",
		region: "California",
		postalCode: "95129",
		streetAddress: "Saratoga Avenue",
		avatar_image_path: "address_image.svg",
		location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
	},
	phoneSection: {
		title: "",
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
	publicationsHeader,
	publications,
	contactPageData,
};
