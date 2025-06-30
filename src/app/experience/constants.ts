import { ExperienceType } from "./types";

const EXPERIENCES: ExperienceType[] = [
    {
      title: "SDE - 1",
      company: "M2P Fintech",
      location: 'Chennai, Tamil Nadu, India',
      timeline: "Mar 2025 - Present",
      description: `Migrated to pnpm and optimised Webpack with lazy loading and code splitting, resulting in an 80% 
                    reduction in production bundle size and significantly faster deployment times. 
                    Achieved 90%+ test coverage by writing unit tests with Jest, reducing post-deployment bugs by 40%. 
                    Designed and executed end-to-end CI/CD pipelines using GitHub Actions. Deployed production assets 
                    to AWS S3 and distributed them via CloudFront CDN, ensuring high availability and 
                    low-latency content delivery globally`,
      icon: "/m2p.png"
    },
    {
      title: "Engineering Trainee (Frontend)",
      company: "Mad Street Den",
      location: 'Chennai, Tamil Nadu, India',
      timeline: "Jul 2024 - Feb 2025",
      description: `Developed and launched 3+ high-impact applications for Vue.ai using React. 
                    Collaborated with backend developers to integrate the APIs and ensured seamless data flow. 
                    Designed and implemented a scalable SASS architecture with reusable mixins, variables, 
                    and utility classes, which cut UI development time by 20% across product teams.`,
      icon: "/msd.jpeg"
    },
    {
      title: "Engineering Intern",
      company: "Mad Street Den",
      location: 'Chennai, Tamil Nadu, India',
      timeline: "Jan 2024 - Jun 2024",
      description: `Assisted in debugging and testing 2+ production-grade applications at Vue.ai.
                    Gained hands-on knowledge of ReactJs and enhanced user experience. 
                    Built and maintained 10+ reusable UI components used across applications, reducing duplication by 25%.`,
      icon: "/msd.jpeg"
    },
];

export { EXPERIENCES };