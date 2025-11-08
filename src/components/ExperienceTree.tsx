import type { Experience } from "../types";
import styles from "./ExperienceTree.module.scss";

interface ExperienceTreeProps {
  experiences: Experience[];
}

export function ExperienceTree({ experiences }: ExperienceTreeProps) {
  return (
    <div className={styles.tree}>
      <div className={styles.tree__trunk}>
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`${styles.tree__branch} ${
              index % 2 === 0
                ? styles["tree__branch--left"]
                : styles["tree__branch--right"]
            }`}
          >
            <div className={styles.tree__node}>
              <div className={styles.tree__dot} />
              <div className={styles.tree__line} />
            </div>

            <div
              className={styles.tree__card}
              style={{
                cursor: exp.url ? "pointer" : "default",
              }}
              onClick={() => exp.url && window.open(exp.url, "_blank")}
            >
              <div className={styles.tree__duration}>
                {exp.duration}
                {exp.url && (
                  <span
                    style={{
                      marginLeft: "0.5rem",
                      fontSize: "0.85rem",
                      color: "var(--accent)",
                    }}
                  >
                    🔗
                  </span>
                )}
              </div>
              <div className={styles.tree__header}>
                {exp.logo && (
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className={styles.tree__logo}
                  />
                )}
                <div className={styles.tree__info}>
                  <h3 className={styles.tree__position}>{exp.position}</h3>
                  <div className={styles.tree__company}>{exp.company}</div>
                </div>
              </div>

              <ul className={styles.tree__description}>
                {exp.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>

              {exp.technologies && (
                <div className={styles.tree__technologies}>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className={styles.tree__tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
