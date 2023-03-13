import { useState } from "react";
import "./App.css";

import TechStack from "./components/TechStack/TechStack";
import myTechStack from "./fake-api/my-tech-stack.json";

const techStackHTML = myTechStack.map((techStack) => {
  return <TechStack title={techStack.title} techList={techStack.techList} />;
});

function App() {
  return (
    <div className="App">
      <section className="container">
        <div className="flex-container">
          <div>
            <h1>Arman Fk</h1>
            {techStackHTML}
          </div>
          <div>
            <img id="profile-picture" src="./profile-picture.png" />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="flex-container">{/* Content */}</div>
      </section>
    </div>
  );
}

export default App;
