import React, { useRef, useEffect, useState } from "react";
import type { Theme } from "../types";
import styles from "./TerminalWindow.module.scss";

interface TerminalWindowProps {
  children: React.ReactNode;
  theme: Theme;
  onToggleTheme: () => void;
  onInputSubmit?: (value: string) => void;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({
  children,
  theme,
  onToggleTheme,
  onInputSubmit,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    // Auto-scroll to bottom when content changes
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [children]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current && inputRef.current.value.trim()) {
      onInputSubmit?.(inputRef.current.value.trim());
      inputRef.current.value = "";
    }
  };

  const handleClose = () => {
    if (window.confirm("Are you sure you want to close the terminal?")) {
      window.location.href = "about:blank";
    }
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <div
      className={`${styles["terminal-window"]} ${
        isMaximized ? styles["terminal-window--maximized"] : ""
      } ${isMinimized ? styles["terminal-window--minimized"] : ""}`}
    >
      <div className={styles["terminal-window__header"]}>
        <div className={styles["terminal-window__controls"]}>
          <button
            className={`${styles["terminal-window__button"]} ${styles["terminal-window__button--close"]}`}
            onClick={handleClose}
            aria-label="Close"
            title="Close"
          />
          <button
            className={`${styles["terminal-window__button"]} ${styles["terminal-window__button--minimize"]}`}
            onClick={handleMinimize}
            aria-label={isMinimized ? "Restore" : "Minimize"}
            title={isMinimized ? "Restore" : "Minimize"}
          />
          <button
            className={`${styles["terminal-window__button"]} ${styles["terminal-window__button--maximize"]}`}
            onClick={handleMaximize}
            aria-label={isMaximized ? "Restore" : "Maximize"}
            title={isMaximized ? "Restore" : "Maximize"}
          />
        </div>
        <div className={styles["terminal-window__title"]}>
          portfolio@terminal ~ %
        </div>
        <button
          className={styles["terminal-window__theme-toggle"]}
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          <span className={styles["terminal-window__theme-icon"]}>
            {theme === "light" ? "🌙" : "☀️"}
          </span>
          <span className={styles["terminal-window__theme-label"]}>
            {theme === "light" ? "Dark" : "Light"}
          </span>
        </button>
      </div>

      <div className={styles["terminal-window__content"]} ref={contentRef}>
        {children}

        <form
          onSubmit={handleSubmit}
          className={styles["terminal-window__input-line"]}
        >
          <span className={styles["terminal-window__prompt"]}>➜</span>
          <input
            ref={inputRef}
            type="text"
            className={styles["terminal-window__input"]}
            placeholder="Type 'help' for available commands..."
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};
