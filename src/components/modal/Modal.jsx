import ProjectCarousel from "../projectCarousel/ProjectCarousel";
import { useTranslation } from "react-i18next";
import "./modal.scss";
import * as allProjects from "../../assets/data/projects.json";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ReactDom from "react-dom";

const CreateTagModal = ({ tag }) => {
  return <li className="modal-tag">{tag}</li>;
};

const CheckDescriptionLanguage = ({ description }) => {
  const currentLanguage = localStorage.getItem("currentLanguage");

  switch (currentLanguage) {
    case "en":
      return <div className="carousel-description">{description.en}</div>;
    default:
      return <div className="carousel-description">{description.fr}</div>;
  }
};

export function Modal({ closeFunction, currentIndex }) {
  const { t } = useTranslation();

  const projects = allProjects.year2024.projects;
  const [projectIndex, setProjectIndex] = useState(currentIndex);

  return ReactDom.createPortal(
    <>
      <div className="modal">
        <div className="modal-container">
          <FontAwesomeIcon
            icon={faX}
            className="modal-close-button"
            alt={t("closeButtonAlt")}
            onClick={closeFunction}
          />
          <ProjectCarousel
            project={projects[projectIndex]}
            key={projectIndex}
          />
          <div className="carousel-caption">
            <div className="carousel-heading">
              <h2 className="modal-title">{projects[projectIndex].title}</h2>
              <ul className="modal-tags-container">
                {projects[projectIndex].tags.map((tag) => (
                  <CreateTagModal tag={tag} key={tag} />
                ))}
              </ul>
            </div>
            <CheckDescriptionLanguage
              description={projects[projectIndex].description}
            />
            <div className="carousel-caption-buttons">
              <p
                className="prev-project"
                onClick={() =>
                  projectIndex === 0
                    ? setProjectIndex(projects.length - 1)
                    : setProjectIndex(projectIndex - 1)
                }
              >
                {t("modalPreviousButton")}
              </p>
              {/* <button
                className="prev-project-responsive"
                onClick={() => {
                  projectIndex === 0
                    ? setProjectIndex(projects.length - 1)
                    : setProjectIndex(projectIndex - 1);
                }}
              >
                <FontAwesomeIcon icon={faBackward} />
              </button> */}
              <Link
                className="secondary-button"
                target="_blank"
                to={projects[projectIndex].githubUrl}
              >
                Github
              </Link>
              <p
                className="next-project"
                onClick={() =>
                  projectIndex === projects.length - 1
                    ? setProjectIndex(0)
                    : setProjectIndex(projectIndex + 1)
                }
              >
                {t("modalNextButton")}
              </p>
              {/* <button
                className="next-project-responsive"
                onClick={() => {
                  projectIndex === projects.length - 1
                    ? setProjectIndex(0)
                    : setProjectIndex(projectIndex + 1);
                }}
              >
                <FontAwesomeIcon icon={faForward} />
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="modal-overlay" onClick={closeFunction}></div>
    </>,
    document.getElementById("portal")
  );
}
