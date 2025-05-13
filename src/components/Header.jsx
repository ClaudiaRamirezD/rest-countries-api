import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons"; // Luna llena
import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

function Header({ resetFilters }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark", !darkMode);
  };

  return (
    <header className="w-full border-b-3 border-stone-100 bg-[var(--light-mode-background)] shadow-xl dark:border-none dark:bg-[var(--dark-mode-elements)]">
      <div className="header-content flex items-center justify-between px-4 py-6">
        <Link
          to="/"
          onClick={resetFilters}
          className="text-lg font-[var(--font-800)] text-[var(--light-mode-text)] dark:text-[var(--dark-mode-text-light-mode-elements)]"
        >
          <h1 className="text-lg font-[var(--font-800)] text-[var(--light-mode-text)] dark:text-[var(--dark-mode-text-light-mode-elements)]">
            Where in the world?
          </h1>
        </Link>
        <div
          className="color-scheme flex cursor-pointer items-center justify-center gap-2 font-[var(--font-600)] text-[var(--light-mode-text)] dark:text-[var(--dark-mode-text-light-mode-elements)]"
          onClick={toggleDarkMode}
        >
          <FontAwesomeIcon icon={darkMode ? solidMoon : regularMoon} />
          <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
