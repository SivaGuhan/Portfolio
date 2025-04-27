import { FC, useRef } from "react";
import { Heading } from "../../components";
import { SKILLS } from "./constants";
import { SkillType, SkillProps } from "./types";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const SkillItem: FC<SkillProps> = (props) => {
  const { skill } = props;
  const skillItemRef = useRef<HTMLDivElement | null>(null);
  const isIntersecting = useIntersectionObserver(skillItemRef);

  return (
    <div className={`skills-item${isIntersecting ? " animate" : ""}`} ref={skillItemRef}>
      <img src={skill.icon} alt={skill.name} className="skills-icon" />
      <h3 className="skills-name">{skill.name}</h3>
    </div>
  );
}

const Skills: FC = () => {

  return (
    <section id="skills" className="skills-wrapper-container">
      <Heading title="Skills" />
      <div className={`skills-grid-container`}>
        {SKILLS.map((skill: SkillType, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
