import "./Project.css";

function Project({ title, desc }) {
  return (
    <div className="project-card">
      <img
        src="https://blog.icons8.com/wp-content/uploads/2020/03/dashboard-design-concept.png"
        alt=""
        className="float"
      />
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
        <button>See Demo</button>
        <button>To Github</button>
      </div>
    </div>
  );
}

export default Project;
