import React from "react";
import styles from "./CommandOutput.module.scss";

interface CommandOutputProps {
  command: string;
  children: React.ReactNode;
}

export const CommandOutput: React.FC<CommandOutputProps> = ({
  command,
  children,
}) => {
  return (
    <div className={styles["command-output"]}>
      <div className={styles["command-output__input"]}>
        <span className={styles["command-output__prompt"]}>➜</span>
        <span className={styles["command-output__command"]}>{command}</span>
      </div>
      <div className={styles["command-output__result"]}>{children}</div>
    </div>
  );
};
