import { Hero } from "./components/Hero";
import { ExperienceTree } from "./components/ExperienceTree";
import { ContactModal } from "./components/ContactModal";
import { useTheme } from "./hooks/useTheme";
import { useState } from "react";
import {
  personalInfo,
  projects,
  experience,
  education,
  skills,
  publications,
  achievements,
} from "./data/portfolio";
import styles from "./App.module.scss";
import headerStyles from "./components/HeaderTerminal.module.scss";
import sectionStyles from "./components/SectionTerminal.module.scss";
import projectStyles from "./components/ProjectCardTerminal.module.scss";
import skillsStyles from "./components/SkillsContactTerminal.module.scss";
import terminalStyles from "./components/TerminalWindow.module.scss";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close menu after navigation
    }
  };

  return (
    <div className={styles.app} data-theme={theme}>
      {/* macOS Terminal Window Wrapper */}
      <div className={terminalStyles.terminal_wrapper}>
        <div className={terminalStyles.terminal_window}>
          {/* Terminal Window Header */}
          <div
            className={terminalStyles.terminal_header}
            data-terminal-header="true"
          >
            <div className={terminalStyles.window_controls}>
              <button
                className={`${terminalStyles.control_button} ${terminalStyles["control_button--close"]}`}
                aria-label="Close"
              />
              <button
                className={`${terminalStyles.control_button} ${terminalStyles["control_button--minimize"]}`}
                aria-label="Minimize"
              />
              <button
                className={`${terminalStyles.control_button} ${terminalStyles["control_button--maximize"]}`}
                aria-label="Maximize"
              />
            </div>
            <div className={terminalStyles.window_title}>
              {personalInfo.name.toLowerCase().replace(" ", "-")}
            </div>
            <button
              onClick={toggleTheme}
              className={terminalStyles.theme_toggle}
              aria-label="Toggle theme"
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? "☀" : "🌙"}
            </button>
          </div>

          {/* Terminal Content */}
          <div className={terminalStyles.terminal_content}>
            {/* Terminal Header */}
            <header className={headerStyles.header}>
              <div className={headerStyles.header__container}>
                <div className={headerStyles.header__logo}>
                  {personalInfo.name.split(" ")[0].toLowerCase()}
                </div>

                {/* Hamburger Menu Button */}
                <button
                  className={`${headerStyles.hamburger} ${
                    isMobileMenuOpen ? headerStyles.hamburger__active : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>

                <nav
                  className={`${headerStyles.header__nav} ${
                    isMobileMenuOpen ? headerStyles.header__nav__open : ""
                  }`}
                >
                  <ul className={headerStyles.header__links}>
                    <li>
                      <button
                        onClick={() => scrollToSection("research")}
                        className={headerStyles.header__link}
                      >
                        Research
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection("education")}
                        className={headerStyles.header__link}
                      >
                        Education
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection("publications")}
                        className={headerStyles.header__link}
                      >
                        Publications
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection("experience")}
                        className={headerStyles.header__link}
                      >
                        Experience
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection("projects")}
                        className={headerStyles.header__link}
                      >
                        Projects
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection("skills")}
                        className={headerStyles.header__link}
                      >
                        Skills
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection("achievements")}
                        className={headerStyles.header__link}
                      >
                        Achievements
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => scrollToSection("contact")}
                        className={headerStyles.header__link}
                      >
                        Contact
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>

            <main className={styles.main}>
              {/* Hero Section */}
              <Hero />

              {/* Research Interests Section */}
              <section
                id="research"
                className={`${sectionStyles.section} ${sectionStyles.about}`}
              >
                <div className={sectionStyles.section__header}>
                  <h2 className={sectionStyles.section__title}>
                    Research Interests
                  </h2>
                  <p className={sectionStyles.section__subtitle}>
                    My focus areas and academic pursuits
                  </p>
                </div>

                <div className={sectionStyles.about__grid}>
                  <div className={sectionStyles.about__text}>
                    <p style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
                      My primary research interest is in{" "}
                      <strong style={{ color: "var(--accent-cyan)" }}>
                        computational biology
                      </strong>
                      , focusing on integrating{" "}
                      <strong>molecular biology</strong> with{" "}
                      <strong>deep learning</strong>,{" "}
                      <strong>data science</strong>, and{" "}
                      <strong>computer vision</strong> to develop adaptive
                      Human-AI collaborative systems for healthcare diagnostics
                      and molecular-level analysis.
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        color: "var(--accent-cyan)",
                        marginBottom: "0.5rem",
                        fontWeight: 600,
                      }}
                    >
                      Key Areas:
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.75rem",
                      }}
                    >
                      {personalInfo.researchInterests.map((interest) => (
                        <span
                          key={interest}
                          className={projectStyles.card__tech}
                          style={{
                            fontSize: "0.9rem",
                            padding: "0.5rem 1rem",
                            background: "var(--surface-alt)",
                            border: "1px solid var(--accent)",
                            color: "var(--text)",
                            cursor: "default",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                              "translateY(-2px)";
                            e.currentTarget.style.boxShadow =
                              "0 4px 12px rgba(10, 132, 255, 0.2)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Education Section */}
              <section
                id="education"
                className={`${sectionStyles.section} ${sectionStyles.experience}`}
              >
                <div className={sectionStyles.section__header}>
                  <h2 className={sectionStyles.section__title}>Education</h2>
                  <p className={sectionStyles.section__subtitle}>
                    Academic background and qualifications
                  </p>
                </div>

                <div className={sectionStyles.experience__timeline}>
                  {education.map((edu) => (
                    <div
                      key={edu.id}
                      className={sectionStyles.experience__item}
                    >
                      <div className={sectionStyles.experience__card}>
                        <div className={sectionStyles.experience__logo_header}>
                          {edu.logo && (
                            <img
                              src={edu.logo}
                              alt={edu.institution}
                              className={sectionStyles.experience__logo}
                            />
                          )}
                          <div className={sectionStyles.experience__header}>
                            <h3 className={sectionStyles.experience__position}>
                              {edu.degree}
                            </h3>
                            <div className={sectionStyles.experience__company}>
                              {edu.institution}
                            </div>
                            <div className={sectionStyles.experience__duration}>
                              {edu.duration}
                            </div>
                          </div>
                        </div>
                        {edu.badges && (
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              gap: "0.5rem",
                              marginTop: "1rem",
                              marginBottom: "1rem",
                            }}
                          >
                            {edu.badges.map((badge, idx) => (
                              <span
                                key={idx}
                                style={{
                                  padding: "0.375rem 0.875rem",
                                  background: "rgba(10, 132, 255, 0.1)",
                                  border: "1px solid var(--accent)",
                                  borderRadius: "4px",
                                  color: "var(--accent)",
                                  fontSize: "0.875rem",
                                  fontWeight: "500",
                                  letterSpacing: "0.5px",
                                }}
                              >
                                {badge}
                              </span>
                            ))}
                          </div>
                        )}
                        {edu.description && (
                          <div
                            style={{
                              color: "var(--text)",
                              lineHeight: "1.8",
                              marginTop: "1rem",
                              whiteSpace: "pre-line",
                              padding: "1rem",
                              background: "var(--bg)",
                              borderRadius: "6px",
                              borderLeft: "3px solid var(--accent)",
                            }}
                          >
                            {edu.description}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Publications Section */}
              <section
                id="publications"
                className={`${sectionStyles.section} ${sectionStyles.experience}`}
              >
                <div className={sectionStyles.section__header}>
                  <h2 className={sectionStyles.section__title}>Publications</h2>
                  <p className={sectionStyles.section__subtitle}>
                    Research contributions and academic publications
                  </p>
                </div>

                <div className={sectionStyles.experience__timeline}>
                  {publications.map((pub) => (
                    <div
                      key={pub.id}
                      className={sectionStyles.experience__item}
                    >
                      <div
                        className={sectionStyles.experience__card}
                        style={{
                          cursor: pub.url ? "pointer" : "default",
                          transition: "all 0.3s ease",
                        }}
                        onClick={() =>
                          pub.url && window.open(pub.url, "_blank")
                        }
                        onMouseEnter={(e) => {
                          if (pub.url) {
                            e.currentTarget.style.transform = "translateX(8px)";
                            e.currentTarget.style.borderLeftColor =
                              "var(--accent)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (pub.url) {
                            e.currentTarget.style.transform = "translateX(0)";
                            e.currentTarget.style.borderLeftColor = "";
                          }
                        }}
                      >
                        <div className={sectionStyles.experience__header}>
                          <h3 className={sectionStyles.experience__position}>
                            {pub.title}
                            {pub.url && (
                              <span
                                style={{
                                  marginLeft: "0.5rem",
                                  fontSize: "0.9rem",
                                  color: "var(--accent)",
                                }}
                              >
                                🔗
                              </span>
                            )}
                          </h3>
                          <div className={sectionStyles.experience__company}>
                            {pub.authors}
                          </div>
                          <div className={sectionStyles.experience__duration}>
                            {pub.venue} - {pub.year}
                          </div>
                        </div>
                        <ul className={sectionStyles.experience__description}>
                          {pub.description.map((desc, idx) => (
                            <li key={idx}>{desc}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Experience Section with Tree */}
              <section
                id="experience"
                className={`${sectionStyles.section} ${sectionStyles.experience}`}
              >
                <div className={sectionStyles.section__header}>
                  <h2 className={sectionStyles.section__title}>
                    Professional Experience
                  </h2>
                  <p className={sectionStyles.section__subtitle}>
                    My journey through teaching, research, and industry
                  </p>
                </div>

                <ExperienceTree experiences={experience} />
              </section>

              {/* Projects Section */}
              <section
                id="projects"
                className={`${sectionStyles.section} ${projectStyles.projects}`}
              >
                <div className={sectionStyles.section__header}>
                  <h2 className={sectionStyles.section__title}>
                    Selected Projects
                  </h2>
                  <p className={sectionStyles.section__subtitle}>
                    Research and development work
                  </p>
                </div>

                <div className={projectStyles.projects__grid}>
                  {projects.map((project) => (
                    <div key={project.id} className={projectStyles.card}>
                      <div className={projectStyles.card__header}>
                        <h3 className={projectStyles.card__title}>
                          {project.title}
                        </h3>
                        <span className={projectStyles.card__category}>
                          {project.category}
                        </span>
                      </div>

                      <p className={projectStyles.card__description}>
                        {project.description}
                      </p>

                      <div className={projectStyles.card__technologies}>
                        {project.technologies.map((tech) => (
                          <span key={tech} className={projectStyles.card__tech}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      {(project.githubUrl || project.liveUrl) && (
                        <div className={projectStyles.card__footer}>
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={projectStyles.card__link}
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                              </svg>
                              Code
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`${projectStyles.card__link} ${projectStyles["card__link--secondary"]}`}
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                              </svg>
                              View Project
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Skills Section */}
              <section
                id="skills"
                className={`${sectionStyles.section} ${skillsStyles.skills}`}
              >
                <div className={sectionStyles.section__header}>
                  <h2 className={sectionStyles.section__title}>
                    Technical Skills
                  </h2>
                  <p className={sectionStyles.section__subtitle}>
                    My technical toolkit and capabilities
                  </p>
                </div>

                <div className={skillsStyles.skills__grid}>
                  {skills.map((skillCategory, idx) => (
                    <div
                      key={idx}
                      className={skillsStyles.skills__category}
                      data-category={skillCategory.category}
                    >
                      <h3 className={skillsStyles.skills__category_title}>
                        {skillCategory.category}
                      </h3>
                      <ul className={skillsStyles.skills__list}>
                        {skillCategory.items.map((skill) => (
                          <li key={skill} className={skillsStyles.skills__item}>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Achievements Section */}
              <section
                id="achievements"
                className={`${sectionStyles.section} ${skillsStyles.skills}`}
              >
                <div className={sectionStyles.section__header}>
                  <h2 className={sectionStyles.section__title}>
                    Achievements & Competitions
                  </h2>
                  <p className={sectionStyles.section__subtitle}>
                    Recognition and competitive programming accomplishments
                  </p>
                </div>

                <div className={projectStyles.projects__grid}>
                  {achievements.map((achievement) => {
                    // Parse achievement description for badges
                    const descParts =
                      achievement.description?.split(" | ") || [];
                    const rankInfo = descParts[0]; // e.g., "4th Place National (Out of 400+ teams)"
                    const teamInfo = descParts.length > 1 ? descParts[1] : null; // e.g., "Team: Five4Five"
                    const eventInfo =
                      descParts.length > 2
                        ? descParts[2]
                        : descParts[descParts.length - 1]; // Competition type

                    return (
                      <div
                        key={achievement.id}
                        className={projectStyles.card}
                        style={{
                          cursor: achievement.url ? "pointer" : "default",
                        }}
                        onClick={() =>
                          achievement.url &&
                          window.open(achievement.url, "_blank")
                        }
                      >
                        <div className={projectStyles.card__icon}>
                          {(achievement.id === "ach-1" ||
                            achievement.id === "ach-2" ||
                            achievement.id === "ach-3" ||
                            achievement.id === "ach-4") && (
                            <div
                              style={{
                                fontSize: "2rem",
                                fontFamily: "monospace",
                                color: "var(--accent)",
                              }}
                            >
                              {"</>"}
                            </div>
                          )}
                          {achievement.id === "ach-5" && "💡"}
                          {achievement.id === "ach-6" && "🏆"}
                        </div>
                        <div className={projectStyles.card__header}>
                          <h3 className={projectStyles.card__title}>
                            {achievement.title}
                            {achievement.url && (
                              <span
                                style={{
                                  marginLeft: "0.5rem",
                                  fontSize: "0.9rem",
                                  color: "var(--accent)",
                                }}
                              >
                                🔗
                              </span>
                            )}
                          </h3>
                          <span className={projectStyles.card__category}>
                            {achievement.date}
                          </span>
                        </div>

                        {/* Organization */}
                        <div
                          style={{
                            marginBottom: "1rem",
                            fontSize: "0.9rem",
                            color: "var(--text-secondary)",
                            fontStyle: "italic",
                          }}
                        >
                          Organized by {achievement.organization}
                        </div>

                        {/* Achievement Details */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                          }}
                        >
                          {rankInfo && (
                            <div
                              style={{
                                padding: "0.625rem 1rem",
                                background: "var(--bg)",
                                border: "1px solid var(--accent)",
                                borderRadius: "4px",
                                borderLeft: "3px solid var(--accent)",
                                fontSize: "0.9rem",
                                color: "var(--text)",
                                fontWeight: "600",
                              }}
                            >
                              {rankInfo}
                            </div>
                          )}

                          {teamInfo && teamInfo.includes("Team:") && (
                            <div
                              style={{
                                padding: "0.5rem 1rem",
                                background: "rgba(10, 132, 255, 0.05)",
                                border: "1px solid var(--accent)",
                                borderRadius: "4px",
                                fontSize: "0.85rem",
                                color: "var(--text-secondary)",
                                fontWeight: "500",
                              }}
                            >
                              {teamInfo}
                            </div>
                          )}

                          {eventInfo && (
                            <div
                              style={{
                                padding: "0.5rem 1rem",
                                background: "rgba(10, 132, 255, 0.05)",
                                border: "1px solid var(--accent)",
                                borderRadius: "4px",
                                fontSize: "0.85rem",
                                color: "var(--text-secondary)",
                                fontWeight: "500",
                              }}
                            >
                              {eventInfo}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Contact Section */}
              <section
                id="contact"
                className={`${sectionStyles.section} ${skillsStyles.contact}`}
              >
                <div className={sectionStyles.section__header}>
                  <h2 className={sectionStyles.section__title}>Get In Touch</h2>
                  <p className={sectionStyles.section__subtitle}>
                    Let's collaborate on research or projects
                  </p>
                </div>

                <div className={skillsStyles.contact__container}>
                  <p className={skillsStyles.contact__text}>
                    I'm currently pursuing research opportunities and interested
                    in PhD programs in computational biology. Feel free to reach
                    out for collaboration or discussion!
                  </p>

                  <div className={skillsStyles.contact__methods}>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className={skillsStyles.contact__method}
                    >
                      <span className={skillsStyles.contact__method_icon}>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </span>
                      <div className={skillsStyles.contact__method_label}>
                        Email
                      </div>
                      <div className={skillsStyles.contact__method_value}>
                        {personalInfo.email}
                      </div>
                    </a>

                    <a
                      href={personalInfo.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={skillsStyles.contact__method}
                    >
                      <span className={skillsStyles.contact__method_icon}>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14,2 14,8 20,8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10,9 9,9 8,9" />
                        </svg>
                      </span>
                      <div className={skillsStyles.contact__method_label}>
                        Resume
                      </div>
                      <div className={skillsStyles.contact__method_value}>
                        Download PDF
                      </div>
                    </a>

                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={skillsStyles.contact__method}
                    >
                      <span className={skillsStyles.contact__method_icon}>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </span>
                      <div className={skillsStyles.contact__method_label}>
                        GitHub
                      </div>
                      <div className={skillsStyles.contact__method_value}>
                        View Profile
                      </div>
                    </a>

                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={skillsStyles.contact__method}
                    >
                      <span className={skillsStyles.contact__method_icon}>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </span>
                      <div className={skillsStyles.contact__method_label}>
                        LinkedIn
                      </div>
                      <div className={skillsStyles.contact__method_value}>
                        Connect
                      </div>
                    </a>
                  </div>

                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className={skillsStyles.contact__cta}
                    style={{ border: "none", cursor: "pointer" }}
                  >
                    View All Contact Details
                  </button>
                </div>
              </section>

              {/* Footer */}
              <footer className={skillsStyles.footer}>
                <div className={skillsStyles.footer__content}>
                  <p className={skillsStyles.footer__copyright}>
                    2025 {personalInfo.name}. All rights reserved.
                  </p>
                  <p
                    className={skillsStyles.footer__text}
                    style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}
                  >
                    Last updated: 8th November 2025
                  </p>
                </div>
              </footer>
            </main>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}

export default App;
