// ----- import du SASS -----
import "./primaryButton.scss";
// ----- import de fonction React -----
import { Link } from "react-router-dom";

// ----- Composant 'PrimaryButton' -----
const PrimaryButton = ({ url, text }) => {
  return (
    <div className="primary-button-container">
      <Link className="primary-button" target="_blank" to={url}>
        {text}
      </Link>
      <div className="highlight"></div>
    </div>
  );
};

export default PrimaryButton;
