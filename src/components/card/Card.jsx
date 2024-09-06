import * as allProjects from "../../assets/data/projects.json";
import { Link } from "react-router-dom";
import "./card.scss";

function toggleModal(id) {
  const listing = allProjects.year2024.projects.find(
    (project) => project.id === id
  );

  // a changer pour un message d'erreur generaliser FR / EN
  if (!listing) {
    return console.log("Une erreur est survenue");
  }
  return console.log(listing);
}

const CreateTag = ({ id, tags }) => {
  return (
    <p key={`${id}-tags`} className="card-tags">
      {tags.join(" + ")}
    </p>
  );
};

const Card = ({ id, title, tags, cover }) => {
  return (
    <Link onClick={() => toggleModal(id)} className="project-card">
      <img src={cover} alt={`${title} cover image.`} />
      <div className="card-text">
        <p className="card-title">{title}</p>
        <CreateTag tags={tags} id={id} />
      </div>
    </Link>
  );
};

export default Card;
