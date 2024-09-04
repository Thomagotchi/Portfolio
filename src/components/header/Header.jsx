//--- Import de fonctions ---
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from "../buttons/languageToggle/LanguageToggle";
import { ThemeButton } from "../buttons/themeButton/ThemeButton";
//--- Import de styles ---
import "./header.scss";
import "../../styles/styles.scss";
//--- Import de données ---
import * as informationsContact from "../../assets/data/informations.json";

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header-left">
        <NavLink to="/">
          <svg
            className="header-logo"
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            fill="currentColor"
            viewBox="0 0 44 44"
            alt={t("logoAlt")}
          >
            <path d="M32.344 39.544a33.9 33.9 0 0 0 1.092-1.144 33.9 33.9 0 0 0 1.092-1.144c.243-.312.572-.745.988-1.3a12.91 12.91 0 0 0 1.196-1.976c.381-.797.71-1.699.988-2.704.277-1.005.416-2.097.416-3.276 0-.936-.104-1.785-.312-2.548-.173-.797-.399-1.49-.676-2.08a6.997 6.997 0 0 0-.936-1.508 7.829 7.829 0 0 0-.832-1.04c-.347-.312-.919-.71-1.716-1.196-.797-.52-1.803-.78-3.016-.78-.104 0-.381.017-.832.052-.416 0-.815.07-1.196.208a5.467 5.467 0 0 0-.832.52 17.68 17.68 0 0 0-1.092.884l-.208.208-.208.208c.555-.07 1.144-.156 1.768-.26a12.024 12.024 0 0 1 1.872-.156c.485 0 1.075.087 1.768.26.693.173 1.421.659 2.184 1.456.035.035.139.156.312.364s.33.399.468.572c.277.381.555.988.832 1.82.312.832.468 1.855.468 3.068 0 .763-.139 1.82-.416 3.172-.277 1.317-.988 2.739-2.132 4.264-.381.52-.832 1.04-1.352 1.56-.52.485-.832.763-.936.832-.381.312-.988.745-1.82 1.3-.832.52-1.855 1.023-3.068 1.508-1.213.485-2.115.728-2.704.728-.277 0-.59-.035-.936-.104a8.8 8.8 0 0 1-.936-.156 3.816 3.816 0 0 1-.728-.156 3.988 3.988 0 0 0-.364-.052l-3.224-.832c-1.04-.277-2.08-.59-3.12-.936l-.624-.156a13.256 13.256 0 0 0-1.456-.416 21.079 21.079 0 0 0-1.82-.364 7.959 7.959 0 0 0-1.716-.208c-.797 0-1.508.121-2.132.364a15.76 15.76 0 0 0-1.872.936c.173.347.364.641.572.884.208.208.312.676.312 1.404 0 .555-.087 1.005-.26 1.352-.173.381-.381.676-.624.884-.208.208-.45.347-.728.416a2.12 2.12 0 0 1-.728.156c-.173 0-.381-.035-.624-.104a2.387 2.387 0 0 1-.728-.364 2.538 2.538 0 0 1-.572-.728c-.173-.277-.26-.641-.26-1.092 0-.139.017-.347.052-.624a2.57 2.57 0 0 1 .26-.78c.243-.485.555-.919.936-1.3l1.196-1.092a21.09 21.09 0 0 1 1.3-1.04c.416-.312.815-.59 1.196-.832a24.61 24.61 0 0 1 1.248-.78c.45-.277.953-.572 1.508-.884.901-.52 1.768-1.005 2.6-1.456a25.12 25.12 0 0 1 1.144-.624c.277-.139.555-.208.832-.208.139 0 .399.052.78.156.381.07.78.173 1.196.312.45.104.85.225 1.196.364.381.104.641.173.78.208.45.139.884.295 1.3.468.45.139.901.295 1.352.468.624.208 1.23.416 1.82.624.624.208 1.248.433 1.872.676.763.277 1.49.537 2.184.78.728.208 1.213.312 1.456.312.173 0 .364-.052.572-.156.208-.104.45-.295.728-.572.381-.381.815-1.127 1.3-2.236.485-1.11.728-2.444.728-4.004 0-.277-.017-.676-.052-1.196-.035-.555-.173-1.179-.416-1.872a9.914 9.914 0 0 0-.416-.936 3.348 3.348 0 0 0-.676-1.092 4.241 4.241 0 0 0-1.196-.988c-.485-.277-1.11-.485-1.872-.624a9.78 9.78 0 0 1-.624-.052 5.046 5.046 0 0 0-.988-.104.98.98 0 0 0-.312.052h-.312l-2.184 1.768a115.44 115.44 0 0 1-2.132 1.768l-1.456 1.144c-.485.381-.97.797-1.456 1.248-.312.312-.624.59-.936.832a1.727 1.727 0 0 1-1.092.364c-.208 0-.59-.052-1.144-.156a21.643 21.643 0 0 1-1.924-.468 19.959 19.959 0 0 1-2.288-.936c-.763-.381-1.49-.85-2.184-1.404-.173-.139-.33-.26-.468-.364l-.624-.624c-.485-.485-.832-.884-1.04-1.196a13.562 13.562 0 0 1-.572-.936 6.976 6.976 0 0 1-.52-.936c-.104-.277-.19-.52-.26-.728-.07-.277-.173-.676-.312-1.196a9.372 9.372 0 0 1-.156-1.82c0-1.11.156-2.15.468-3.12a18.35 18.35 0 0 1 1.144-2.6c.45-.763.884-1.404 1.3-1.924.416-.555.71-.936.884-1.144l.52-.624.624-.624c.52-.485 1.057-.953 1.612-1.404a24.135 24.135 0 0 1 1.612-1.3c.52-.416.97-.745 1.352-.988.381-.277.641-.468.78-.572a58.83 58.83 0 0 0 1.04-.676c.347-.208.71-.433 1.092-.676l.78 1.144c-.104.07-.33.243-.676.52a36.98 36.98 0 0 0-1.144.936c-.416.381-.867.797-1.352 1.248a15.5 15.5 0 0 0-1.3 1.352c-.693.832-1.248 1.647-1.664 2.444-.416.763-.728 1.49-.936 2.184a10.196 10.196 0 0 0-.416 1.872 13.07 13.07 0 0 0-.104 1.508c0 .797.07 1.543.208 2.236.173.659.468 1.335.884 2.028.07.173.156.347.26.52.139.139.26.277.364.416.208.277.52.59.936.936.416.312.901.624 1.456.936.59.277 1.248.52 1.976.728a9.465 9.465 0 0 0 2.496.312c.416 0 .71-.017.884-.052.208-.035.399-.087.572-.156l2.34-1.924c-.555.104-.988.173-1.3.208-.277.035-.693.052-1.248.052-.312 0-.901-.035-1.768-.104-.867-.104-1.75-.45-2.652-1.04a6.966 6.966 0 0 1-.936-.728 8.284 8.284 0 0 1-.936-1.144 9.241 9.241 0 0 1-.728-1.664c-.208-.659-.312-1.404-.312-2.236a12 12 0 0 1 .104-1.456 8.31 8.31 0 0 1 .468-1.82c.243-.659.572-1.335.988-2.028a13.494 13.494 0 0 1 1.716-2.184c.59-.624 1.127-1.127 1.612-1.508.52-.381.919-.676 1.196-.884.381-.277.936-.607 1.664-.988a40.39 40.39 0 0 1 2.808-1.248c.208-.07.485-.156.832-.26.347-.139.71-.26 1.092-.364.416-.104.797-.19 1.144-.26a5.38 5.38 0 0 1 .936-.104c.624 0 1.23.104 1.82.312.624.173 1.49.45 2.6.832.59.208 1.144.416 1.664.624.52.173 1.057.364 1.612.572.693.277 1.37.52 2.028.728a7.746 7.746 0 0 0 2.236.312c.555 0 .97-.07 1.248-.208.277-.173.503-.347.676-.52.07-.07.156-.208.26-.416.139-.208.208-.468.208-.78 0-.347-.07-.607-.208-.78a45.826 45.826 0 0 0-.416-.676c-.139-.208-.208-.52-.208-.936 0-.52.156-.953.468-1.3.347-.347.78-.52 1.3-.52.381 0 .797.156 1.248.468.485.312.728.936.728 1.872 0 .381-.087.85-.26 1.404-.139.52-.45 1.127-.936 1.82a11.53 11.53 0 0 1-1.248 1.664 37.67 37.67 0 0 1-1.664 1.664 74.48 74.48 0 0 1-1.768 1.612c-.59.485-1.11.919-1.56 1.3-.52.416-.901.624-1.144.624-.277-.035-.624-.19-1.04-.468-.416-.312-.884-.659-1.404-1.04-.624-.45-1.3-.867-2.028-1.248a18.19 18.19 0 0 0-2.6-1.3 15.407 15.407 0 0 0-2.34-.78 12.423 12.423 0 0 0-2.028-.416c-.59-.104-1.057-.156-1.404-.156-.555 0-1.144.156-1.768.468-.624.277-1.248.919-1.872 1.924-.277.381-.59.936-.936 1.664-.312.728-.468 1.664-.468 2.808s.208 2.115.624 2.912c.45.797.97 1.456 1.56 1.976.624.52 1.23.919 1.82 1.196.59.243 1.04.399 1.352.468.277.07.572.121.884.156.312.035.485.052.52.052a51.264 51.264 0 0 1 2.132-1.716 115.44 115.44 0 0 0 2.132-1.768c.381-.277.728-.555 1.04-.832.312-.277.641-.572.988-.884.347-.243.676-.52.988-.832.277-.277.555-.503.832-.676a1.834 1.834 0 0 1 1.04-.312c.104 0 .295.017.572.052a8.8 8.8 0 0 1 .936.156c.347.035.659.087.936.156.277.035.468.07.572.104a8.895 8.895 0 0 1 2.288.884c.797.381 1.508.815 2.132 1.3.277.208.555.45.832.728.277.277.537.555.78.832.208.243.468.572.78.988.312.416.59.919.832 1.508.277.555.503 1.213.676 1.976.208.728.312 1.56.312 2.496 0 .693-.139 1.647-.416 2.86-.243 1.213-.85 2.548-1.82 4.004a19.868 19.868 0 0 1-2.132 2.704 49.384 49.384 0 0 1-2.34 2.392 31.914 31.914 0 0 1-1.976 1.716c-.659.52-1.335 1.057-2.028 1.612l-.832-1.04Z" />
          </svg>
        </NavLink>
        <LanguageToggle />
        <ThemeButton />
      </div>
      <nav className="header-center">
        <NavLink to="/A-Propos">{t("headerAbout")}</NavLink>
        <NavLink to="/Realisations">{t("headerWorks")}</NavLink>
        <NavLink to="Contact">{t("headerContact")}</NavLink>
      </nav>
      <div className="header-right">
        <Link target="_blank" to={`mailto:${informationsContact.email}`}>
          <FontAwesomeIcon icon={faEnvelope} alt="Logo Envelope" />
        </Link>
        <Link target="_blank" to={informationsContact.githubUrl}>
          <FontAwesomeIcon icon={faGithub} alt="Logo Github" />
        </Link>
        <Link target="_blank" to={informationsContact.linkedInUrl}>
          <FontAwesomeIcon icon={faLinkedin} alt="Logo LinkedIn" />
        </Link>
      </div>
    </header>
  );
}
