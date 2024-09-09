// import { useTranslation } from "react-i18next";
import ProjectCarousel from "../projectCarousel/ProjectCarousel";
import "./modal.scss";
import { useState } from "react";

const CreateTagModal = ({ tag }) => {
  return <li className="modal-tag">{tag}</li>;
};

export function Modal({ project }) {
  // const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);

  function toggleModal() {
    if (localStorage.getItem`${project.title}-modal-open` === "true") {
      setOpenModal(false);
      localStorage.setItem(`${project.title}-modal-open`, openModal);
    } else {
      setOpenModal(true);
      localStorage.setItem(`${project.title}-modal-open`, openModal);
    }
  }

  return (
    <>
      <div className="modal-container">
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
          <div className="carousel-description">
            {/* function which finds the active language and return the correct description */}
          </div>
          <div className="carousel-caption-buttons">
            <p className="prev-project"></p>
            {/* 2nd button component */}
            <p className="next-project"></p>
          </div>
        </div>
      </div>
      <div className="modal-overlay" onClick={toggleModal}></div>
    </>
  );
}
