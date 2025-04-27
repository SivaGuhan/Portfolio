import { FC, useRef } from "react";
import { NavBar } from "../components"
import About from "./about";
import Skills from "./skills";
import { debounce } from "../utils/commonUtils";
import { useAppContext } from "../store/AppContext";

const SECTIONS = [
  {
    id: 'about',
    Component: About
  },
  {
    id: 'skills',
    Component: Skills
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
      if(!sectionElement) return;
      const sectionElementDimensions = sectionElement?.getBoundingClientRect();
      console.log(sectionElementDimensions, containerDimensions);
      if(sectionElementDimensions.top < containerDimensions.height / 2) activeSection = section.id;
    })

    if(activeSection === activeMenu) return;
    dispatch({type: 'SET_ACTIVE_MENU', payload: activeSection});
  }, 50)

  return (
    <main 
      className="overflow-auto full-content"
      onScroll={handleScroll}
      ref={containerRef}
    >
      <NavBar />
      {SECTIONS.map((section) => (
          <section.Component />
      ))}
    </main>
  )
}

export default App;
