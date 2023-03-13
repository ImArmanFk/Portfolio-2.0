import "./TechStack.css";

function TechStack({ title, techList }) {
  // ["React", "Redux", ...]
  const listHTML = techList.map((techItemName) => {
    return <li>{techItemName}</li>;
  });

  return (
    <div class="tech-stack">
      <h4 class="tech-stack-title">{title}</h4>
      <ul class="tech-stack-list">{listHTML}</ul>
    </div>
  );
}

export default TechStack;
