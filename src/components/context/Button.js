import {useTheme} from "./ThemeContext";

function Button() {
  const { theme, setTheme } = useTheme();

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
