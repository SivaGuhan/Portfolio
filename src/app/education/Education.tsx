import { FC, useRef } from "react";
import { Heading } from "../../components";
import { EducationItem, EducationItemProps } from "./types";
import { EDUCATION_LIST_ITEMS } from "./constants";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const EducationListItem: FC<EducationItemProps> = (props) => {
    const { education } = props;

    const collegeContainerRef = useRef<HTMLDivElement>(null);
    const pursueContainerRef = useRef<HTMLDivElement>(null);

    const isCollegeContainerIntersecting = useIntersectionObserver(collegeContainerRef);
    const isPursueContainerIntersecting = useIntersectionObserver(pursueContainerRef);

    return (
        <div className="education-item-wrapper">
            <div className="first-dot timeline-dot"></div>
            <div 
                className={`education-name-wrapper${isCollegeContainerIntersecting ? ' title-animate' : ""}`}
                ref={collegeContainerRef}
            >
                <div className="education-item-college-wrapper">
                   {education.name}
                </div>
                <p className="education-item-location">{education.location}</p>
                <p className="education-item-timeline">{education.timeline}</p>
                <img src={education.image} alt={education.name} className="education-image"/>
            </div>
            <div className="second-dot timeline-dot"></div>
            <div 
                className={`education-item-content${isPursueContainerIntersecting ? ' content-animate' : ""}`}
                ref={pursueContainerRef}
            >
                <p className="education-item-pursue">{education.pursue}</p>
                <p className="education-item-description">{education.description}</p>
            </div>
        </div>
    )
}

const Education: FC = () => {
    return (
        <section id="education" className="education-wrapper-container">
            <Heading title="Education" />
            <div className="education-list-wrapper">
                {EDUCATION_LIST_ITEMS.map((education: EducationItem, index) => (
                    <EducationListItem education={education} key={index} />
                ))}
            </div>
        </section>
    )
}

export default Education;