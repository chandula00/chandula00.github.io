import React, { useState } from "react";
import { personalInfo } from "../data/portfolio";
import { ContactModal } from "./ContactModal";
import styles from "./HeroTerminal.module.scss";

export const Hero: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.hero__content}>
          {/* Profile Image */}
          <div className={styles.hero__image_container}>
            {personalInfo.image ? (
              <img
                src={personalInfo.image}
                alt={personalInfo.name}
                className={styles.hero__image}
              />
            ) : (
              <div className={styles.hero__image_placeholder}>
                {personalInfo.name.charAt(0)}
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className={styles.hero__text_content}>
            <div className={styles.hero__greeting}>$ whoami</div>
            <h1 className={styles.hero__title}>{personalInfo.name}</h1>
            <h2 className={styles.hero__subtitle}>
              <span className={styles.hero__prompt}>&gt;</span>{" "}
              {personalInfo.title}
            </h2>
            <p className={styles.hero__description}>
              <span className={styles.hero__comment}>//</span>{" "}
              {personalInfo.bio}
            </p>

            <div className={styles.hero__actions}>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.hero__button} ${styles["hero__button--primary"]}`}
              >
                📄 View Resume
              </a>
              <button
                className={`${styles.hero__button} ${styles["hero__button--secondary"]}`}
                onClick={scrollToProjects}
              >
                View Projects
              </button>
              <button
                className={`${styles.hero__button} ${styles["hero__button--secondary"]}`}
                onClick={() => setIsContactModalOpen(true)}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>

        <div className={styles.hero__scroll}>
          <span>$ scroll --down</span>
        </div>
      </section>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};
