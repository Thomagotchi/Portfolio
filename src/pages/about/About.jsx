import { useTranslation } from "react-i18next";
import PrimaryButton from "../../components/buttons/primaryButton/PrimaryButton";
import * as informationsContact from "../../assets/data/informations.json";
import "./about.scss";
export function About() {
  const { t } = useTranslation();

  return (
    <div className="about-page-content">
      <div className="about-text-container">
        <p className="about-description">{t("aboutParagraph")}</p>
        <div className="quote-container">
          <div className="quote-text">
            <div className="quote-first-line">
              <p className="left-quote">“</p>
              <p>{t("aboutQuote1")}</p>
            </div>
            <div className="quote-second-line">
              <p>{t("aboutQuote2")}</p>
              <p className="right-quote">”</p>
            </div>
          </div>
          <p className="quote-author">{t("aboutQuoteAuthor")}</p>
        </div>
      </div>
      <div className="buttons-container">
        <PrimaryButton
          url={informationsContact.linkedInUrl}
          text="LinkedIn"
          key="linkedIn-button"
        />
        <PrimaryButton
          url={informationsContact.githubUrl}
          text="Github"
          key="github-button"
        />
      </div>
      <div className="stack-container">
        <p className="stack-title">{t("aboutStackTitle")}</p>
      </div>
    </div>
  );
}
