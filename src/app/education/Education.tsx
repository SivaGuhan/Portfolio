import { FC, useEffect, useRef, useState } from "react";
import { Heading } from "../../components";
import { EducationItem, EducationItemProps } from "./types";
import { EDUCATION_LIST_ITEMS } from "./constants";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const EducationListItem: FC<EducationItemProps> = (props) => {
    const { education } = props;

    const itemRef = useRef<HTMLDivElement>(null);
    const [threshold, setThreshold] = useState<number>(0.5);
    
    const isItemVisible = useIntersectionObserver(itemRef, {
        threshold: threshold,
    })

    useEffect(() => {
        if(isItemVisible) setThreshold(0);
    }, [isItemVisible])

    return (
        <div 
            className={`education-item-wrapper${isItemVisible ? ' animate' : ' remove-animate'}`}
            ref={itemRef}
        >
            <div className="education-image-wrapper">
                <img src={education.image} alt={education.name} className="education-image"/>
            </div>
            <div className="education-details-wrapper">
                <p className="education-college">{education.name}</p>
                <p className="education-location">{education.location}</p>
                <p className="education-timeline">{education.timeline}</p>
                <p className="education-pursue">{education.pursue}</p>
                <p className="education-description">{education.description}</p>
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