import { ProjectItem } from "./types";

const PROJECTS: ProjectItem[] = [
    {
        title: "News App",
        image: "/newsapp.png",
        description: `A web portal where people can get to know the latest news around the world.
        Helps users find relevant and important news easily every day`,
        codeLink: "https://github.com/SivaGuhan/news_app-master",
        techStack: ["NextJs", "MongoDB", "Tailwind", "News API", "JavaScript", "Next Auth"],
        isThis: false,
    },
    {
        title: "Developer Portfolio",
        image: "/portfolio.png",
        description: `A curated space that highlights my journey, work, and capabilities as a frontend engineer.
        Designed to be intuitive, engaging, and reflective of my personal aesthetic and approach to development.`,
        codeLink: "https://github.com/SivaGuhan/Portfolio",
        techStack: ["React", "SCSS", "ESlint", "TypeScript", "Context API", "Vite"],
        isThis: true,
    },
    {
        title: "TCE Events Portal",
        image: "/events.png",
        description: `One stop solution for all events catering to the needs of different set of skilled students. 
        All details about all possible events and club activities at one place.`,
        codeLink: "https://github.com/SivaGuhan/event-management",
        techStack: ["React", "NodeJs", "Tailwind", "JavaScript", "Express", "MongoDB", "React Router DOM", "Redux", "JWT"],
        isThis: false,
    },
]

export { PROJECTS };