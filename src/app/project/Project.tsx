import { FC, useRef, useState } from "react";
import { Heading } from "../../components";
import { ProjectItem, ProjectItemProps } from "./types";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { PROJECTS } from "./constants";

const ProjectListItem: FC<ProjectItemProps> = (props) => {

    const { isActive, project } = props;

    const onClickCode = () => {
        window.open(project.codeLink, "_blank");
    }

    return (
        <div 
            className={`project-item-wrapper${isActive ? '' : ' animate'}`}
        >
            <div className="project-contents-wrapper">
                <p className="project-title">{project.title}</p>
                <p className="project-description">{project.description}</p>
                <button 
                    className="project-code-link"
                    onClick={onClickCode}
                >
                    {`Code </>`}
                </button>
                <div className="tech-stack-wrapper">
                    {project.techStack.map((tech, index) => (
                        <span key={index} className="tech">{tech}</span>
                    ))}
                </div>
            </div>
            <div className="project-image-wrapper">
                <img className="project-image" alt={project.title} src={project.image}/>
            </div>
        </div>
    )
}

const Project: FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const isContainerVisible = useIntersectionObserver(containerRef);

    const onSlide = (action: string) => {
        if (action === 'next' && activeIndex < PROJECTS.length - 1) {
            setActiveIndex(prev => prev + 1);
        } else if (action === 'prev' && activeIndex > 0) {
            setActiveIndex(prev => prev - 1);
        }
    };

    return (
        <section id="projects" className="project-wrapper-container">
            <Heading title="Projects" />
            <div 
                className={`projects-container${isContainerVisible ? ' cont-animate' : ''}`}
                ref={containerRef}
            >
                <span onClick={() => onSlide("prev")} className="prev">{'<'}</span>

                <div className="projects-scroll-container">
                    <div
                        className="projects-slider"
                        style={{
                            transform: `translateX(-${activeIndex * 100}%)`,
                            transition: 'transform 1.5s ease-in-out',
                        }}
                    >
                        {PROJECTS.map((project: ProjectItem, index) => (
                            <ProjectListItem 
                                key={index} 
                                isActive={index === activeIndex} 
                                project={project}
                            />
                        ))}
                    </div>
                </div>

                <span onClick={() => onSlide("next")} className="next">{'>'}</span>
            </div>
        </section>
    );
};

export default Project;