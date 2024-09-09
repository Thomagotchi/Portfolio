//--- Import de fonction React ---
import { useState } from "react";
import leftArrow from "../../assets/arrows/leftArrow.svg";
import rightArrow from "../../assets/arrows/rightArrow.svg";
import "./projectCarousel.scss";
//--- Fonction qui retourne le composant Carousel  ---
const ProjectCarousel = ({ project }) => {
  // Index pour l'image précédente
  const [prevImageIndex, setPrevImageIndex] = useState(
    project.pictures.length - 1
  );

  // Index pour l'image actuelle
  const [imageIndex, setImageIndex] = useState(0);

  // Index pour l'image suivante
  const [nextImageIndex, setNextImageIndex] = useState(1);

  // Cette fonction applique la classe 'Prev' si l'image est à l'index de l'image précédente
  const checkPrevImageIndex = (elementIndex) => {
    if (project.pictures.length > 1) {
      return prevImageIndex === elementIndex ? "prev" : "";
    }
  };

  // Cette fonction applique la classe 'Active' si l'image est à l'index de l'image actuelle
  const checkCurrentImageIndex = (elementIndex) => {
    return imageIndex === elementIndex ? "active" : "";
  };

  // Cette fonction applique la classe 'Next' si l'image est à l'index de l'image suivante
  const checkNextImageIndex = (elementIndex) => {
    if (project.pictures.length > 1) {
      return nextImageIndex === elementIndex ? "next" : "";
    }
  };

  // Ces deux fonctions changes les 3 Indexes quand une des flèches est utiliser
  const PreviousImage = () => {
    !prevImageIndex
      ? setPrevImageIndex(project.pictures.length - 1)
      : setPrevImageIndex(prevImageIndex - 1);

    !imageIndex
      ? setImageIndex(project.pictures.length - 1)
      : setImageIndex(imageIndex - 1);

    !nextImageIndex
      ? setNextImageIndex(project.pictures.length - 1)
      : setNextImageIndex(nextImageIndex - 1);
  };

  const NextImage = () => {
    prevImageIndex === project.pictures.length - 1
      ? setPrevImageIndex(0)
      : setPrevImageIndex(prevImageIndex + 1);

    imageIndex === project.pictures.length - 1
      ? setImageIndex(0)
      : setImageIndex(imageIndex + 1);

    nextImageIndex === project.pictures.length - 1
      ? setNextImageIndex(0)
      : setNextImageIndex(nextImageIndex + 1);
  };

  // Retour des elements HTML
  return (
    <div className="carousel-container">
      {/* Renvoie toutes les images du logement */}
      {project.pictures.map((image) => {
        return (
          <img
            src={image}
            alt={project.title}
            key={`modal-image-${project.pictures.indexOf(image)}`}
            className={`carousel-image ${checkPrevImageIndex(
              project.pictures.indexOf(image)
            )}${checkCurrentImageIndex(
              project.pictures.indexOf(image)
            )}${checkNextImageIndex(project.pictures.indexOf(image))}`}
          />
        );
      })}

      {/* Si le logement as plusieurs images, cela affiche les flèches et compteur */}
      {project.pictures.length > 1 && (
        <div className="carousel-elements">
          {/* Flèche gauche */}
          <img
            src={leftArrow}
            alt="Left arrow."
            onClick={PreviousImage}
            className="carousel-arrow"
          />
          {/* Compteur */}
          <div className="carousel-counter">
            {imageIndex + 1}/{project.pictures.length}
          </div>
          {/* Flèche droite */}
          <img
            src={rightArrow}
            alt="Right arrow."
            onClick={NextImage}
            className="carousel-arrow"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectCarousel;
