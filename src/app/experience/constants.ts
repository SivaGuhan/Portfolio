import { ExperienceType } from "./types";

const EXPERIENCES: ExperienceType[] = [
    {
      title: "Engineering Trainee (Frontend)",
      company: "Mad Street Den",
      location: 'Chennai, Tamil Nadu, India',
      timeline: "Jul 2024 - Present",
      description: `Developed new applications for Vue.ai using ReactJs improving user engagement by 15%. 
                    Implemented various optimizations and increased the performance of the site by 70%. 
                    Built and maintained a modular SASS architecture with a variety of utilities, thus reducing development time by 20%. 
                    Adopted pnpm and Webpack with lazy loading which reduced the production build size by 80%. 
                    Assisted in implementing JWT based authentication with efficient state management. 
                    Wrote unit test cases with Jest to ensure component logic`,
      icon: "/msd.jpeg"
    },
    {
      title: "Engineering Intern",
      company: "Mad Street Den",
      location: 'Chennai, Tamil Nadu, India',
      timeline: "Jan 2024 - Jun 2024",
      description: `Contributed to debugging and testing various applications at Vue.ai. 
                    Gained a hands-on knowledge on ReactJs and enhanced user experience. 
                    Developed few components to be reused across applications.`,
      icon: "/msd.jpeg"
    },
];

export { EXPERIENCES };