// ----- import du SASS -----
import "./projects.scss";
// ----- import du composant 'Card' -----
import Card from "../../components/card/Card";
//----- Import de données -----
import * as allProjects from "../../assets/data/projects.json";

// ----- Page 'Projects' -----
export function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-year-container">
        <p className="projects-year">2024</p>
        <svg
          width="148"
          height="4"
          viewBox="0 0 148 4"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="separator-bar"
        >
          <rect
            width="4"
            height="4"
            rx="2"
            transform="matrix(-1 0 0 1 4 0)"
            fill="#currentColor"
          />
          <rect
            width="4"
            height="4"
            rx="2"
            transform="matrix(-1 0 0 1 16 0)"
            fill="#currentColor"
          />
          <rect
            width="4"
            height="4"
            rx="2"
            transform="matrix(-1 0 0 1 28 0)"
            fill="#currentColor"
          />
          <rect
            width="4"
            height="4"
            rx="2"
            transform="matrix(-1 0 0 1 40 0)"
            fill="#currentColor"
          />
          <rect
            width="100"
            height="4"
            rx="2"
            transform="matrix(-1 0 0 1 148 0)"
            fill="#currentColor"
          />
        </svg>
      </div>
      <div className="projects-gallery">
        <div id="portal"></div>
        {allProjects.year2024.projects.map((project) => (
          <Card key={`${project.title}-${project.id}`} project={project} />
        ))}
      </div>
    </div>
  );
}
