import * as allProjects from "../../assets/data/projects.json";
import Card from "../../components/card/Card";
import "./projects.scss";

export function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-year-container">
        <p className="projects-year">2024</p>
      </div>
      <div className="projects-gallery">
        {allProjects.year2024.projects.map((project) => (
          <Card
            key={`${project.title}-${project.id}`}
            id={project.id}
            title={project.title}
            tags={project.tags}
            cover={project.cover}
          />
        ))}
      </div>
    </div>
  );
}
