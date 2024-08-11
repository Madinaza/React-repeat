import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Users from "./Users";

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function LearnRouter() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>

        <hr />

        {/*
              A <Routes> looks through all its children <Route>
              elements and renders the first one whose path
              matches the current URL. Use <Routes> in place of
              <Switch> in react-router-dom v6.
            */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
  
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
}

export default LearnRouter;
