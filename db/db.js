export default {
	bio: {
		about: {
			text: [
				"Hi &#128075;",
				 "I'm Chad Eckles. I’m currently working as a Full Stack Developer@Verizon specialized in JavaScript/NodeJS Applications. I received my A.A.S. in CS from Full Sail University. and am currently still serving in the Army Reserves.",
			    "I'm a developer, geek and OpenSource enthusiast. ",
			   "I love to read, watch movies, and to try new foods.",
			],
		},
		contact: {
			text: [
				"If you would like to get in touch with me, be it for exploring a technology, a business, or to just say hi, feel free to send me an email. My email address is: chad1020(at)gmail.com",
			],
		},
	},
	skills: [
		{
			title: "Languages",
			skillName: "Java, JavaScript, TypeScript",
			color: "1",
			percentage: "70",
		},
		{
			title: "Frameworks/Libraries",
			skillName: "Reactjs,  Express,  Sequelize",
			color: "6",
			percentage: "50",
		},
		{
			title: "Backend",
			skillName: "Nodejs,  Deno,  MongoDB",
			color: "2",
			percentage: "40",
		},
		{
			title: "Clouds",
			skillName: "AWS(EC2, S3),  Heroku,  Netlify",
			color: "3",
			percentage: "30",
		},
		{
			title: "Design",
			skillName: "HTML,  Bootstrap,  CSS",
			color: "4",
			percentage: "70",
		},
		{
			title: "Version Control",
			skillName: "GitHub,  JIRA,  Trello",
			color: "7",
			percentage: "70",
		},
		{
			title: "Tools",
			skillName: "Postman,  Chrome DevTools,  Bash",
			color: "3",
			percentage: "80",
		},
		{
			title: "Editor",
			skillName: "VS Code,  Xcode, IntelliJ",
			color: "6",
			percentage: "70",
		},
	],
	projects: {
		web: [
			{
				projectName: "React ToDoList",
				image: "images/reactToDoList.png",
				summary:
					"A Simple Reasct web app for a todo list, using persistance local storage of list items. react hooks and bootstrap elements.",
				preview: "https://ceckles.github.io/todo-list-react/ ",
				gitHubLink:"https://github.com/ceckles/todo-list-react",
				techStack: [
					"React",
					"Bootstrap",
					"GitHubPages",
					"LocalStorage"
				],
			},
			{
				projectName: "Monster Rolodex",
				image: "images/reactMonsterRolodex.png",
				summary:
					"React web app rendering a list of monsters image and names from a external api. using bootstrap elements.",
				preview: "https://ceckles.github.io/monster-rolodex/",
				gitHubLink:"https://github.com/ceckles/monster-rolodex",
				techStack: ["Reactjs", "Bootstrap","GitHubPages"],
			},
			{
				projectName: "Brilliant Bananas",
				image: "images/BrilliantBananas.png",
				summary:
					"A Inventory app to showcase inventory tracking and minor sales use. using express,handlebars,sqlite3, and bootstrap elements.",
				preview: "https://murmuring-chamber-30533.herokuapp.com/",
				gitHubLink:"https://github.com/l1nd53y/Brilliant-Bananas-Project",
				techStack: ["Reactjs", "Bootstrap","Express", "SQLite","Heroku"],
			},
			{
				projectName: "Chore Bot",
				image: "images/react-chore-bot.png",
				summary:
					"A React app to track chores and prompt with notifications and sound when a chore or task is due.",
				preview: "https://react-chore-bot.herokuapp.com/",
				gitHubLink:"https://github.com/ceckles/react-chore-bot",
				techStack: ["Reactjs", "Bootstrap", "Express",  "SQLite","Heroku"],
			},
		],
		software: [],
		IOs: [],
		freelance: [],
	},
	experience: [
		{
			title: "Verizon.",
			duration: "June 2021 - Present",
			subtitle: "Full Stack Developer",
			details: [
				"Automated Testing with Selenium and Mocha",
				"Assist customer with production update or configuration with Apigee",
				"CI/CD pipeline Gitlab, Jenkins",
				"Develope onboarding documentation for user to onboard to system",
				"6 month supporting users trouble shooting tickets with platform.",
				"Train peers in procedures for automated testing and validation",
				"End to End testing of dev sites",

			],
			tags: [
				"JavaScript",
				"Express",
				"React",
				"Bootstrap",
				"Nodejs",
				"Jenkins",
				"AWS",
			],
			icon: "qrcode",
		},
		{
			title: "G4S - Facebook",
			duration: "Sep 2019 - June 2018",
			subtitle: "SOC Operator",
			details: [
				"Controlled access of personnel and movement of sensitive equipment/ information",
				"Verified access, dispatched patrols, monitored 600 alarm points, and 1000 cameras",
				"Assisted supervisors with safety training and site operations training for 80 personnel",
				"Answered inquiries and resolved or escalated issues to management personnel to ensure client satisfaction"
			],
			tags: ["Security", "Security Officer", "System Monitor", "Access Control"],
			icon: "group",
		},
	],
	education: [
		{
			title: "Associates of  Computer Science ",
			duration: "2016-2018",
			subtitle: "Full Sail University, Winter Park, Fl",
			details: [
				"Basic and Advanced C#",
				"Basic and Advance Swift.",
				"Basic Java",
				"MySQL",
				"UI Design for accessibility.",
				"Operating Systems Windows, Mac,  Linux"
			],
			tags: [
				"Mobile Development",
				"Computer Programming",
				"Back end Development",
				"Data Structures & Algorithms",
				"Operating Systems",
				"Database Management System",
				"Computer Networks",
				"Accessibility",
			],
			icon: "graduation-cap",
		},
		{
			title: "GenerationUSA",
			duration: "Apr 2021 - May 2021",
			subtitle: "Full Stack Java Developer, Dallas, Tx",
			details: [
				"HTML5",
				"CSS",
				"JavaScript",
				"Java",
				"MySQL",
				"Bash",
				"Git",
				"GitHub",
				"Soft Skill and behavior mindset"
			],
			tags: ["HTML", "CSS", "JavaScript", "Java", "MySQL", "Bash", "Git", "GitHub", "Soft Skill"],
			icon: "book",
		},
		{
			title: "Multiverse",
			duration: "2021 Year Apprentiship",
			subtitle: "Full Stack Developer",
			details: [
				"HTML5",
				"CSS",
				"JavaScript",
				"MySQL",
				"Bash",
				"Git",
				"GitHub",
				"NodeJs",
				"ReactJs",
			],
			tags: ["HTML", "CSS", "JavaScript", "ReactJs", "MySQL", "Bash", "Git", "GitHub", "Soft Skill"],
			icon: "book",
		},
	],
	footer: [
		{
			label: "Dev Profiles",
			data: [
				{
					text: "Stackoverflow",
					link: "https://stackoverflow.com/users/7244724/chad-e",
				},
				{
					text: "GitHub",
					link: "https://github.com/ceckles",
				},
				{
					text: "CodeWars",
					link: "https://www.codewars.com/users/CEckles",
				},
			],
		},
		{
			label: "Resources",
			data: [
				{
					text: "Enable Dark/Light Mode",
					func: "enableDarkMode()",
				},
				{
					text: "Print this page",
					func: "window.print()",
				},
			],
		},
		{
			label: "Social Profiles",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/chadeckles/",
				},
				{
					text: "Twitter",
					link: "https://twitter.com/chad1020",
				},
				{
					text: "Buy me a coffee",
					link: "https://www.buymeacoffee.com/chad1020",
				},
			],
		},
		{
			label: "copyright-text",
			data: [
				"by Chad Eckles.",
				"&copy; No Copyrights. Feel free to use this as a template."
			],
		},
	],
};
