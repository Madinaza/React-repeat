import React from "react";
import Container from "./Container";
import { ThemeProvider } from "./ThemeContext";
function index() {
  return (
    <div>
      <ThemeProvider>
        <Container />
      </ThemeProvider>
    </div>
  );
}

export default index;
