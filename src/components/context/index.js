import React from "react";
import Container from "./Container";
import { ThemeProvider } from "./ThemeContext";
import { UserProvider } from "./UserContext";
function index() {
  return (
    <div>
      <ThemeProvider>
        <UserProvider>
          <Container />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default index;
