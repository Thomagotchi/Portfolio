import ProjectCarousel from "../projectCarousel/ProjectCarousel";
import { useTranslation } from "react-i18next";
import "./modal.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

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

export function Modal({ closeFunction, project }) {
  const { t } = useTranslation();

  return (
    <>
      <div className="modal-container">
        <FontAwesomeIcon
          icon={faX}
          className="modal-close-button"
          alt={t("closeButtonAlt")}
          onClick={closeFunction}
        />
        <ProjectCarousel project={project} />
        <div className="carousel-caption">
          <div className="carousel-heading">
            <h2 className="modal-title">{project.title}</h2>
            <ul className="modal-tags-container">
              {project.tags.map((tag) => (
                <CreateTagModal tag={tag} key={tag} />
              ))}
            </ul>
          </div>
          <CheckDescriptionLanguage description={project.description} />
          <div className="carousel-caption-buttons">
            <p className="prev-project">{t("modalPreviousButton")}</p>
            <Link
              className="secondary-button"
              target="_blank"
              to={project.githubUrl}
            >
              Github
            </Link>
            <p className="next-project">{t("modalNextButton")}</p>
          </div>
        </div>
      </div>
    </>
  );
}
