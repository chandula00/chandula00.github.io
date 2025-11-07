import React from "react";
import type { Project } from "../types";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={styles["project-card"]}>
      <div className={styles["project-card__header"]}>
        <div>
          <h3 className={styles["project-card__title"]}>{project.title}</h3>
        </div>
        <div className={styles["project-card__links"]}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles["project-card__link"]}
              onClick={(e) => e.stopPropagation()}
            >
              <span>GitHub</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles["project-card__link"]}
              onClick={(e) => e.stopPropagation()}
            >
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>

      <p className={styles["project-card__description"]}>
        {project.description}
      </p>

      <div className={styles["project-card__tech"]}>
        {project.technologies.map((tech) => (
          <span key={tech} className={styles["project-card__tag"]}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
