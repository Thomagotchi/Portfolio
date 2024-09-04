import { Link } from "react-router-dom";
import "./primaryButton.scss";

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
