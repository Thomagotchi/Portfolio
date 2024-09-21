// ----- import du SASS -----
import "./themeButton.scss";
// ----- import du context 'Theme' -----
import useTheme from "../../../utils/context/theme";

// ----- Composant 'themeButton' -----
export function ThemeButton() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  // Fonction qui toggle le theme du site
  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <label className="theme-switch" htmlFor="theme-checkbox">
      <input
        aria-label="theme"
        name="theme-checkbox"
        id="theme-checkbox"
        type="checkbox"
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
      />
    </label>
  );
}
