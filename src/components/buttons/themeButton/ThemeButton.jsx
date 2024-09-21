import useTheme from "../../../utils/context/theme";
import "./themeButton.scss";

export function ThemeButton() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

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
