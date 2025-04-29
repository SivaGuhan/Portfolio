interface ExperienceType {
    title: string;
    company: string;
    location: string;
    timeline: string;
    description: string;
    icon: string;
}

type ExperienceProps = {
    experience: ExperienceType;
}

export type { ExperienceType, ExperienceProps };