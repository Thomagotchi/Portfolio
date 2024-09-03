import { useTranslation } from "react-i18next";
import "./home.scss";

export function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-content">
      <div className="body-container">
        <div className="hero-container">
          <div className="geometry-shape-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="148"
              height="101"
              viewBox="0 0 148 101"
              fill="currentColor"
            >
              <rect
                x="148"
                y="4.06152"
                width="100"
                height="4"
                rx="2"
                transform="rotate(-180 148 4.06152)"
                fill="currentColor"
              />
              <rect
                x="40"
                y="4"
                width="4"
                height="4"
                rx="2"
                transform="rotate(-180 40 4)"
                fill="currentColor"
              />
              <rect
                x="16"
                y="4"
                width="4"
                height="4"
                rx="2"
                transform="rotate(-180 16 4)"
                fill="currentColor"
              />
              <rect
                x="28"
                y="4"
                width="4"
                height="4"
                rx="2"
                transform="rotate(-180 28 4)"
                fill="currentColor"
              />
              <rect
                x="4"
                y="4"
                width="4"
                height="4"
                rx="2"
                transform="rotate(-180 4 4)"
                fill="currentColor"
              />
              <rect
                x="148"
                y="0.0615234"
                width="100"
                height="4"
                rx="2"
                transform="rotate(90 148 0.0615234)"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="hero-text-container">
            <h1 className="hero-title">
              Thomas
              <br />
              &nbsp;&nbsp;Sanouiller
            </h1>
            <p className="hero-caption">{t("homeMessage")}</p>
          </div>

          <div className="geometry-shape-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="148"
              height="101"
              viewBox="0 0 148 101"
              fill="currentColor"
            >
              <rect y="96" width="100" height="4" rx="2" fill="currentColor" />
              <rect
                x="108"
                y="96.0615"
                width="4"
                height="4"
                rx="2"
                fill="currentColor"
              />
              <rect
                x="132"
                y="96.0615"
                width="4"
                height="4"
                rx="2"
                fill="currentColor"
              />
              <rect
                x="120"
                y="96.0615"
                width="4"
                height="4"
                rx="2"
                fill="currentColor"
              />
              <rect
                x="144"
                y="96.0615"
                width="4"
                height="4"
                rx="2"
                fill="currentColor"
              />
              <rect
                y="100"
                width="100"
                height="4"
                rx="2"
                transform="rotate(-90 0 100)"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
