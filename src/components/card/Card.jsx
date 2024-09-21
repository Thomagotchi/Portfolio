// ----- import du SASS -----
import "./card.scss";
// ----- import de fonction React -----
import { Link } from "react-router-dom";
import { useState } from "react";
// ----- import de fonction de traduction -----
import { useTranslation } from "react-i18next";
// ----- import des données des projets -----
import * as allProjects from "../../assets/data/projects.json";
// ----- import du composant 'Modal' -----
import { Modal } from "../modal/Modal";

// Cette fonction r'envoie un element HTML pour chaque tag d'un projet
const CreateTag = ({ tags }) => {
  return <p className="card-tags">{tags.join(" + ")}</p>;
};

// ----- Composant 'Card' -----
export function Card({ project }) {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const currentProjectIndex = allProjects.year2024.projects.indexOf(project);

  // Cette fonction ouvre et ferme la modale du projet
  function toggleModal() {
    openModal ? setOpenModal(false) : setOpenModal(true);
  }

  return (
    <>
      <Link onClick={() => toggleModal()} className="project-card">
        <img src={project.cover} alt={`${project.title} cover image.`} />
        <div className="card-text">
          <p className="card-title">{project.title}</p>
          <CreateTag
            tags={project.tags}
            id={project.id}
            key={`${project.id}-tags`}
          />
          <p className="card-link">{t("projectCardMessage")}</p>
        </div>
      </Link>
      {openModal && (
        <Modal
          closeFunction={toggleModal}
          currentIndex={currentProjectIndex}
          key={`modal-${currentProjectIndex}`}
        />
      )}
    </>
  );
}

export default Card;
