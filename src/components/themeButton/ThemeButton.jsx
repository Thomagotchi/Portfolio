import useTheme from "../../utils/translation/context/theme";
import "./themeButton.scss";

export function ThemeButton() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    console.log(localStorage.getItem("theme"));
    const darkModeStatus = e.currentTarget.checked;
    console.log(darkModeStatus);
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <label htmlFor="theme-checkbox" className="theme-switch">
      <input
        id="theme-checkbox"
        type="checkbox"
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
      />
    </label>
  );
}
