import { FC, useRef } from "react";
import { Heading } from "../../components";
import { EXPERIENCES } from "./constants";
import { ExperienceProps, ExperienceType } from "./types";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const ExperienceItem: FC<ExperienceProps> = (props) => {

    const { experience } = props;

    const companyContainerRef = useRef<HTMLDivElement>(null);
    const roleContainerRef = useRef<HTMLDivElement>(null);

    const isCompanyContainerIntersecting = useIntersectionObserver(companyContainerRef);
    const isRoleContainerIntersecting = useIntersectionObserver(roleContainerRef);

    return (
        <div className="experience-item">
            <div className="first-dot timeline-dot"></div>
            <div 
                className={`experience-item-name${isCompanyContainerIntersecting ? ' title-animate' : ""}`}
                ref={companyContainerRef}
            >
                <div className="experience-item-company-wrapper">
                    <p className="experience-item-company">{experience.company}</p>
                    <img src={experience.icon} alt={experience.company} className="experience-item-icon" />
                </div>
                <p className="experience-item-location">{experience.location}</p>
                <p className="experience-item-timeline">{experience.timeline}</p>
            </div>
            <div className="second-dot timeline-dot"></div>
            <div 
                className={`experience-item-content${isRoleContainerIntersecting ? ' content-animate' : ""}`}
                ref={roleContainerRef}
            >
                <p className="experience-item-title">{experience.title}</p>
                <p className="experience-item-description">{experience.description}</p>
            </div>
        </div>
    );
}

const Experience: FC = () => {
    return (
        <section id="experience" className="experience-wrapper-container">
            <Heading title="Experience" />
            <div className="experience-items-wrapper">
                {EXPERIENCES.map((experience: ExperienceType, index) => (
                    <ExperienceItem key={index} experience={experience} />
                ))}
            </div>
        </section>
    );
};

export default Experience;