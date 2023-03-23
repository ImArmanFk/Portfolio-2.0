import { useState } from "react";
import "./App.css";

import TechStack from "./components/TechStack/TechStack";
import myTechStack from "./fake-api/my-tech-stack.json";
import Project from "./components/Project";
import myProjects from "./fake-api/projects.json";

const techStackHTML = myTechStack.map((techStack) => {
  return <TechStack title={techStack.title} techList={techStack.techList} />;
});

const ProjectHTML = myProjects.map((project) => {
  return <Project title={project.title} />;
});

function App() {
  return (
    <div className="App">
      <section className="container">
        <div className="flex-container">
          <div>
            <h1>Arman Fk Mr Hacker man</h1>
            {techStackHTML}
          </div>
          <div>
            <img
              id="profile-picture"
              src="./profile-picture.png"
              className="float"
            />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="flex-container flex-container-column">
          {ProjectHTML}
        </div>
      </section>
    </div>
  );
}

export default App;
