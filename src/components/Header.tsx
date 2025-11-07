import React from "react";
import type { Theme } from "../types";
import styles from "./Header.module.scss";

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.header__logo}>
          <span>{"<"}</span>
          Portfolio
          <span>{"/>"}</span>
        </div>

        <nav className={styles.header__nav}>
          <a
            className={styles.header__link}
            onClick={() => scrollToSection("about")}
          >
            About
          </a>
          <a
            className={styles.header__link}
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </a>
          <a
            className={styles.header__link}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </a>
          <a
            className={styles.header__link}
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </a>
          <a
            className={styles.header__link}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </a>
        </nav>

        <div className={styles.header__actions}>
          <button
            className={styles["header__theme-toggle"]}
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </header>
  );
};
