import React from "react";
import {
  personalInfo,
  projects,
  experience,
  education,
  skills,
} from "../data/portfolio";
import { ProjectCard } from "../components/ProjectCard";

export const getCommandOutput = (command: string): React.ReactNode => {
  const cmd = command.toLowerCase().trim();

  switch (cmd) {
    case "help":
      return (
        <div>
          <h2>Available Commands:</h2>
          <ul>
            <li>
              <span className="highlight">about</span> - Learn more about me
            </li>
            <li>
              <span className="highlight">projects</span> - View my projects
            </li>
            <li>
              <span className="highlight">experience</span> - See my work
              experience
            </li>
            <li>
              <span className="highlight">education</span> - View my education
            </li>
            <li>
              <span className="highlight">skills</span> - Check out my skills
            </li>
            <li>
              <span className="highlight">contact</span> - Get in touch with me
            </li>
            <li>
              <span className="highlight">clear</span> - Clear the terminal
            </li>
            <li>
              <span className="highlight">help</span> - Show this help message
            </li>
          </ul>
        </div>
      );

    case "about":
      return (
        <div>
          <h2>About Me</h2>
          <p>
            Hi! I'm <span className="highlight">{personalInfo.name}</span>
          </p>
          <p>{personalInfo.title}</p>
          <p style={{ marginTop: "1rem" }}>{personalInfo.bio}</p>
          <p style={{ marginTop: "1rem" }}>📍 {personalInfo.location}</p>
        </div>
      );

    case "projects":
      return (
        <div>
          <h2>My Projects</h2>
          <div style={{ marginTop: "1rem" }}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      );

    case "experience":
      return (
        <div>
          <h2>Work Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} style={{ marginBottom: "1.5rem" }}>
              <h3>
                {exp.position} @ {exp.company}
              </h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  marginBottom: "0.5rem",
                }}
              >
                {exp.duration}
              </p>
              <ul>
                {exp.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
              {exp.technologies && (
                <p style={{ marginTop: "0.5rem" }}>
                  <span className="highlight">Technologies:</span>{" "}
                  {exp.technologies.join(", ")}
                </p>
              )}
            </div>
          ))}
        </div>
      );

    case "education":
      return (
        <div>
          <h2>Education</h2>
          {education.map((edu) => (
            <div key={edu.id} style={{ marginBottom: "1rem" }}>
              <h3>{edu.degree}</h3>
              <p style={{ color: "var(--text-secondary)" }}>
                {edu.institution}
              </p>
              <p style={{ color: "var(--text-secondary)" }}>{edu.duration}</p>
              {edu.description && (
                <p style={{ marginTop: "0.5rem" }}>{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      );

    case "skills":
      return (
        <div>
          <h2>Skills</h2>
          {skills.map((skillCategory, idx) => (
            <div key={idx} style={{ marginBottom: "1rem" }}>
              <h3>{skillCategory.category}</h3>
              <p>{skillCategory.items.join(" • ")}</p>
            </div>
          ))}
        </div>
      );

    case "contact":
      return (
        <div>
          <h2>Get In Touch</h2>
          <ul>
            <li>
              📧 Email:{" "}
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </li>
            <li>
              💼 LinkedIn:{" "}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile
              </a>
            </li>
            <li>
              🐙 GitHub:{" "}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                @yourusername
              </a>
            </li>
          </ul>
        </div>
      );

    case "clear":
      return null;

    case "":
      return null;

    default:
      return (
        <div>
          <p className="error">Command not found: {command}</p>
          <p>
            Type <span className="highlight">help</span> for available commands.
          </p>
        </div>
      );
  }
};
