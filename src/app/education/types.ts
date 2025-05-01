interface EducationItem {
    image: string,
    name: string,
    timeline: string,
    location: string,
    pursue: string,
    description: string,
}

type EducationItemProps = {
    education: EducationItem;
}

export type { EducationItem, EducationItemProps };