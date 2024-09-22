// ----- import du SASS -----
import "./modal.scss";
// ----- import de fonction React -----
import { Link } from "react-router-dom";
import { useState } from "react";
import ReactDom from "react-dom";
// ----- import de fonction de traduction -----
import { useTranslation } from "react-i18next";
// ----- import de 'FontAwesome' et des icons -----
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faForward, faBackward } from "@fortawesome/free-solid-svg-icons";
// ----- import du composant 'ProjectCarousel' -----
import ProjectCarousel from "../projectCarousel/ProjectCarousel";
//--- Import de données ---
import * as allProjects from "../../assets/data/projects.json";

// Cette fonction renvoie un element li pour chaque element dans un array
const CreateTagModal = ({ tag }) => {
  return <li className="modal-tag">{tag}</li>;
};

// Cette fonction vérifie la langue utiliser et renvoie la description approprier
const CheckDescriptionLanguage = ({ description }) => {
  const currentLanguage = localStorage.getItem("currentLanguage");

  switch (currentLanguage) {
    case "en":
      return <div className="carousel-description">{description.en}</div>;
    default:
      return <div className="carousel-description">{description.fr}</div>;
  }
};

// ----- Composant 'Modal' -----
export function Modal({ closeFunction, currentIndex }) {
  const { t } = useTranslation();
  const projects = allProjects.year2024.projects;
  const [projectIndex, setProjectIndex] = useState(currentIndex);

  return ReactDom.createPortal(
    <>
      <div className="modal">
        <div className="modal-container">
          {/* Bouton pour fermer la modale */}
          <FontAwesomeIcon
            icon={faX}
            className="modal-close-button"
            alt={t("closeButtonAlt")}
            onClick={closeFunction}
          />
          {/* Carousel des images */}
          <ProjectCarousel
            project={projects[projectIndex]}
            key={projectIndex}
          />
          {/* La partie textuelle de la modale */}
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
            {/* Les boutons en bas de la modale, permettant l'utilisateur d'aller au lien Github ou circuler entre les projets */}
            <div className="carousel-caption-buttons">
              <button
                className="prev-project"
                onClick={() => {
                  projectIndex === 0
                    ? setProjectIndex(projects.length - 1)
                    : setProjectIndex(projectIndex - 1);
                }}
              >
                <FontAwesomeIcon icon={faBackward} />
              </button>
              <Link
                className="secondary-button"
                target="_blank"
                to={projects[projectIndex].githubUrl}
              >
                Github
              </Link>
              <button
                className="next-project"
                onClick={() => {
                  projectIndex === projects.length - 1
                    ? setProjectIndex(0)
                    : setProjectIndex(projectIndex + 1);
                }}
              >
                <FontAwesomeIcon icon={faForward} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-overlay" onClick={closeFunction}></div>
    </>,
    // Cela envoie la modale au portal pour une meilleure lisibilité du code
    document.getElementById("portal")
  );
}
