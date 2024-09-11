import * as allProjects from "../../assets/data/projects.json";
import { Link } from "react-router-dom";
import "./card.scss";
import { useTranslation } from "react-i18next";
import { Modal } from "../modal/Modal";
import { useState } from "react";

const CreateTag = ({ tags }) => {
  return <p className="card-tags">{tags.join(" + ")}</p>;
};

export function Card({ id, title, tags, cover }) {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);

  function toggleModal() {
    if (openModal === true) {
      setOpenModal(false);
    } else {
      setOpenModal(true);
    }
  }

  return (
    <>
      <Link onClick={() => toggleModal()} className="project-card">
        <img src={cover} alt={`${title} cover image.`} />
        <div className="card-text">
          <p className="card-title">{title}</p>
          <CreateTag tags={tags} id={id} key={`${id}-tags`} />
          <p className="card-link">{t("projectCardMessage")}</p>
        </div>
      </Link>
      {openModal && (
        <div className="modal">
          <Modal
            closeFunction={toggleModal}
            project={allProjects.year2024.projects.find(
              (project) => project.id === id
            )}
            key={`modal-${id}`}
          />
          <div className="modal-overlay" onClick={toggleModal}></div>
        </div>
      )}
    </>
  );
}

export default Card;
