import {useContext} from "react";
import Button from "./Button";
import ThemeContext from "./ThemeContext";

import {} from "../style.css";

function Container() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`container ${theme}`}>
      <Button />
    </div>
  );
}

export default Container;
