import { useTranslation } from "react-i18next";
import "./home.scss";

export function Home() {
  const { t } = useTranslation();

  return <h1 className="home">{t("welcomeMessage")}</h1>;
}
