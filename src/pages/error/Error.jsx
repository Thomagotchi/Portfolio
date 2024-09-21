import "./error.scss";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Error() {
  const { t } = useTranslation();

  return (
    <div className="error-container">
      <h1 className="error-number">404</h1>
      <h2>{t("errorPageMessage")}</h2>
      <NavLink to="/">
        <p>{t("errorPageLinkMessage")}</p>
      </NavLink>
    </div>
  );
}
