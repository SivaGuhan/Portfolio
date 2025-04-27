interface SkillType {
    name: string;
    icon: string;
}

type SkillProps = {
    skill: SkillType;
}

export type { SkillType, SkillProps };