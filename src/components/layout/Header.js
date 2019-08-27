import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to="/react_todo_app">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/react_todo_app/about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: "#87CEEB",
  color: "#fff",
  textAlign: "center",
  padding: "20px"
};

const linkStyle = {
  color: "#fff"
};

export default Header;
