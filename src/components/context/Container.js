import Button from "./Button";
import { useTheme } from "./ThemeContext";
import Profile from "./Profile";

import {} from "../style.css";

function Container() {
  const { theme } = useTheme();

  return (
    <div className={`container ${theme}`}>
      <Button />
      <Profile />
    </div>
  );
}

export default Container;
