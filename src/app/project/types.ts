interface ProjectItem {
    title: string,
    image: string,
    description: string,
    codeLink: string,
    techStack: Array<string>,
    isThis: boolean,
}

type ProjectItemProps = {
    isActive: boolean,
    project: ProjectItem,
}

export type { ProjectItemProps, ProjectItem };