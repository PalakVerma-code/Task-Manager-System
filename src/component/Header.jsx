import React from 'react'

const Header = ({ theme, setTheme }) => {
  return (
    <header className="app-header">
      <h2 className="app-title">Task Manager</h2>

      <button
        className="theme-toggle"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </header>
  );
};

export default Header;
