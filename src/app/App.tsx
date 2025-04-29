import { FC, useRef } from "react";
import { debounce } from "../utils/commonUtils";
import { useAppContext } from "../store/AppContext";
import { NavBar } from "../components"
import About from "./about";
import Skills from "./skills";
import Experience from "./experience";

const SECTIONS = [
  {
    id: 'about',
    Component: About
  },
  {
    id: 'skills',
    Component: Skills
  },
  {
    id: 'experience',
    Component: Experience
  }
]

const App: FC = () => {

  const containerRef = useRef<HTMLElement>(null);
  const { state, dispatch } = useAppContext();

  const { activeMenu } = state;

  const handleScroll = debounce(() => {
    if(!containerRef.current) return;
    const container = containerRef.current;
    const containerDimensions = container.getBoundingClientRect();
    let activeSection = 'about';

    SECTIONS.forEach((section) => {
      const sectionElement = document.getElementById(section.id);
      
      if(sectionElement){
        const sectionElementDimensions = sectionElement?.getBoundingClientRect();
        if(sectionElementDimensions.top < containerDimensions.height / 2) activeSection = section.id;
      }
    })

    if(activeSection === activeMenu) return;
    dispatch({type: 'SET_ACTIVE_MENU', payload: activeSection});
  }, 50)

  const onClickMenuItem = (value: string) => {
    const container = containerRef.current;
    const sectionElement = document.getElementById(value);
    if (!sectionElement || !container) return;
  
    const containerTop = container.getBoundingClientRect().top;
    const sectionTop = sectionElement.getBoundingClientRect().top;
  
    const scrollOffset = sectionTop - containerTop + container.scrollTop - 50;
  
    container.scrollTo({
      top: scrollOffset,
      behavior: 'smooth',
    });
  };  

  return (
    <main 
      className="full-content"
      style={{
        overflowX: "hidden",
        overflowY: "auto"
      }}
      onScroll={handleScroll}
      ref={containerRef}
    >
      <NavBar onClickMenuItem={onClickMenuItem}/>
      {SECTIONS.map((section, index) => (
          <section.Component key={index}/>
      ))}
    </main>
  )
}

export default App;
