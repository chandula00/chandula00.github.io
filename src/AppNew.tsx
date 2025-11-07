import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectCard } from "./components/ProjectCard";
import { useTheme } from "./hooks/useTheme";
import {
  personalInfo,
  projects,
  experience,
  education,
  skills,
} from "./data/portfolio";
import styles from "./App.module.scss";
import sectionStyles from "./components/Section.module.scss";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.app}>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main className={styles.main}>
        <Hero />

        {/* About Section */}
        <section
          id="about"
          className={`${sectionStyles.section} ${sectionStyles.about}`}
        >
          <div className={sectionStyles.section__header}>
            <h2 className={sectionStyles.section__title}>About Me</h2>
            <p className={sectionStyles.section__subtitle}>
              Get to know me better
            </p>
          </div>

          <div className={sectionStyles.about__grid}>
            <div className={sectionStyles.about__text}>
              <p>{personalInfo.bio}</p>
              <p>
                I'm passionate about creating beautiful, functional, and
                user-friendly applications. With a strong foundation in both
                frontend and backend technologies, I bring ideas to life through
                clean code and modern design practices.
              </p>
            </div>

            <div className={sectionStyles.about__stats}>
              <div className={sectionStyles.about__stat}>
                <span className={sectionStyles["about__stat-number"]}>3+</span>
                <span className={sectionStyles["about__stat-label"]}>
                  Years Experience
                </span>
              </div>
              <div className={sectionStyles.about__stat}>
                <span className={sectionStyles["about__stat-number"]}>
                  {projects.length}+
                </span>
                <span className={sectionStyles["about__stat-label"]}>
                  Projects Completed
                </span>
              </div>
              <div className={sectionStyles.about__stat}>
                <span className={sectionStyles["about__stat-number"]}>
                  {skills.length}+
                </span>
                <span className={sectionStyles["about__stat-label"]}>
                  Skill Categories
                </span>
              </div>
              <div className={sectionStyles.about__stat}>
                <span className={sectionStyles["about__stat-number"]}>
                  100%
                </span>
                <span className={sectionStyles["about__stat-label"]}>
                  Client Satisfaction
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className={`${sectionStyles.section} ${sectionStyles.experience}`}
        >
          <div className={sectionStyles.section__header}>
            <h2 className={sectionStyles.section__title}>Work Experience</h2>
            <p className={sectionStyles.section__subtitle}>
              My professional journey and achievements
            </p>
          </div>

          <div className={sectionStyles.experience__timeline}>
            {experience.map((exp) => (
              <div key={exp.id} className={sectionStyles.experience__item}>
                <div className={sectionStyles.experience__card}>
                  <div className={sectionStyles.experience__header}>
                    <h3 className={sectionStyles.experience__position}>
                      {exp.position}
                    </h3>
                    <div className={sectionStyles.experience__company}>
                      {exp.company}
                    </div>
                    <div className={sectionStyles.experience__duration}>
                      {exp.duration}
                    </div>
                  </div>

                  <ul className={sectionStyles.experience__description}>
                    {exp.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>

                  {exp.technologies && (
                    <div className={sectionStyles.experience__technologies}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={sectionStyles.experience__tech}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className={sectionStyles.section}
          style={{ background: "var(--surface)" }}
        >
          <div className={sectionStyles.section__header}>
            <h2 className={sectionStyles.section__title}>Featured Projects</h2>
            <p className={sectionStyles.section__subtitle}>
              Some of my recent work and side projects
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "2rem",
              marginTop: "3rem",
            }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Education & Skills Section */}
        <section
          id="skills"
          className={sectionStyles.section}
          style={{ background: "var(--bg)" }}
        >
          <div className={sectionStyles.section__header}>
            <h2 className={sectionStyles.section__title}>Skills & Education</h2>
            <p className={sectionStyles.section__subtitle}>
              My technical expertise and educational background
            </p>
          </div>

          <div style={{ marginTop: "3rem" }}>
            {/* Skills Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2rem",
                marginBottom: "4rem",
              }}
            >
              {skills.map((skillCategory, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "var(--surface)",
                    padding: "2rem",
                    borderRadius: "0.75rem",
                    border: "1px solid var(--border)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "600",
                      color: "var(--accent)",
                      marginBottom: "1rem",
                    }}
                  >
                    {skillCategory.category}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                    }}
                  >
                    {skillCategory.items.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          padding: "0.375rem 0.75rem",
                          background: "var(--surface-alt)",
                          border: "1px solid var(--border)",
                          borderRadius: "9999px",
                          fontSize: "0.875rem",
                          color: "var(--text-secondary)",
                          fontWeight: "500",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div>
              <h3
                style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "var(--text)",
                  marginBottom: "2rem",
                  textAlign: "center",
                }}
              >
                Education
              </h3>
              {education.map((edu) => (
                <div
                  key={edu.id}
                  style={{
                    background: "var(--surface)",
                    padding: "2rem",
                    borderRadius: "0.75rem",
                    border: "1px solid var(--border)",
                    marginBottom: "1rem",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      color: "var(--text)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {edu.degree}
                  </h4>
                  <p
                    style={{
                      color: "var(--accent)",
                      fontWeight: "500",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {edu.institution}
                  </p>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.875rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {edu.duration}
                  </p>
                  {edu.description && (
                    <p
                      style={{
                        color: "var(--text-secondary)",
                        marginTop: "1rem",
                      }}
                    >
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className={sectionStyles.section}
          style={{ background: "var(--surface)" }}
        >
          <div className={sectionStyles.section__header}>
            <h2 className={sectionStyles.section__title}>Get In Touch</h2>
            <p className={sectionStyles.section__subtitle}>
              Let's work together on your next project
            </p>
          </div>

          <div
            style={{
              maxWidth: "600px",
              margin: "3rem auto",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "1.125rem",
                color: "var(--text-secondary)",
                lineHeight: "1.8",
                marginBottom: "2rem",
              }}
            >
              I'm currently available for freelance work and full-time
              opportunities. If you have a project in mind or just want to chat,
              feel free to reach out!
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: "2rem",
              }}
            >
              <a
                href={`mailto:${personalInfo.email}`}
                style={{
                  padding: "1rem 2rem",
                  background: "var(--accent)",
                  color: "white",
                  borderRadius: "0.5rem",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                }}
              >
                📧 Email Me
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "1rem 2rem",
                  background: "var(--surface-alt)",
                  color: "var(--text)",
                  border: "2px solid var(--border)",
                  borderRadius: "0.5rem",
                  fontWeight: "600",
                }}
              >
                🐙 GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "1rem 2rem",
                  background: "var(--surface-alt)",
                  color: "var(--text)",
                  border: "2px solid var(--border)",
                  borderRadius: "0.5rem",
                  fontWeight: "600",
                }}
              >
                💼 LinkedIn
              </a>
            </div>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.875rem",
              }}
            >
              📍 {personalInfo.location}
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            background: "var(--bg)",
            padding: "2rem",
            textAlign: "center",
            borderTop: "1px solid var(--border)",
          }}
        >
          <p style={{ color: "var(--text-secondary)" }}>
            © 2025 {personalInfo.name}. Built with React, TypeScript & SCSS
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
