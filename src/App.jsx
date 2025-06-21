import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Project from "./Components/Project";
import projects  from "./Utils/Projects";
import skillCategories from "./Utils/SkillCategories";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import MeetYourDeveloper from "./Components/MeetYourDeveloper";


export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Project projects={projects}/>
      <Skills skillCategories={skillCategories}/>
      <MeetYourDeveloper />
      <Contact />
    </div>
  );
}
