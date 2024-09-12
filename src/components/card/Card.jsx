import { Link } from "react-router-dom";
import * as allProjects from "../../assets/data/projects.json";
import "./card.scss";
import { useTranslation } from "react-i18next";
import { Modal } from "../modal/Modal";
import { useState } from "react";

const CreateTag = ({ tags }) => {
  return <p className="card-tags">{tags.join(" + ")}</p>;
};

export function Card({ project }) {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);

  const currentProjectIndex = allProjects.year2024.projects.indexOf(project);

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
        <div className="modal">
          <Modal
            closeFunction={toggleModal}
            currentIndex={currentProjectIndex}
            key={`modal-${currentProjectIndex}`}
          />
          <div className="modal-overlay" onClick={toggleModal}></div>
        </div>
      )}
    </>
  );
}

export default Card;
