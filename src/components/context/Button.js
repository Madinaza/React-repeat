import ThemeContext from "./ThemeContext";
import { useContext } from "react";
function Button() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <div>Active theme:{theme}</div>
      <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        Change Theme
      </button>
    </div>
  );
}

export default Button;
