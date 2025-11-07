import { useEffect, useState } from "react";
import styles from "./ContactModal.module.scss";
import { personalInfo } from "../data/portfolio";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const contactDetails = {
    emails: [
      { label: "Primary", value: "rajcadhikari@gmail.com" },
      { label: "Personal", value: "chandulaadhikari@gmail.com" },
      { label: "University", value: "e19008@eng.pdn.ac.lk" },
    ],
    phones: [
      { label: "Mobile 1", value: "+94 711530046" },
      { label: "Mobile 2", value: "+94 742921558" },
    ],
    address:
      "No. 11/3, Galwala Road, 3rd mile post, Ampitiya, Kandy, Sri Lanka",
    socials: [
      {
        icon: "💼",
        label: "LinkedIn",
        value: "linkedin.com/in/chandula-adhikari",
        url: personalInfo.linkedin,
      },
      {
        icon: "🐙",
        label: "GitHub",
        value: "github.com/chandula00",
        url: personalInfo.github,
      },
      {
        icon: "💬",
        label: "Discord",
        value: "Discord Profile",
        url: "http://discordapp.com/users/1029326061760163840",
      },
      {
        icon: "🐦",
        label: "Twitter",
        value: "@Janith_Chand",
        url: "https://twitter.com/Janith_Chand",
      },
    ],
  };

  return (
    <div className={styles.modal__backdrop} onClick={handleBackdropClick}>
      <div
        className={`${styles.modal__container} ${
          isMaximized ? styles["modal__container--maximized"] : ""
        } ${isMinimized ? styles["modal__container--minimized"] : ""}`}
      >
        {/* macOS Terminal Window Header */}
        <div className={styles.modal__header}>
          <div className={styles.modal__controls}>
            <button
              className={`${styles.modal__control} ${styles["modal__control--close"]}`}
              onClick={onClose}
              aria-label="Close"
              title="Close"
            />
            <button
              className={`${styles.modal__control} ${styles["modal__control--minimize"]}`}
              onClick={handleMinimize}
              aria-label={isMinimized ? "Restore" : "Minimize"}
              title={isMinimized ? "Restore" : "Minimize"}
            />
            <button
              className={`${styles.modal__control} ${styles["modal__control--maximize"]}`}
              onClick={handleMaximize}
              aria-label={isMaximized ? "Restore" : "Maximize"}
              title={isMaximized ? "Restore" : "Maximize"}
            />
          </div>
          <div className={styles.modal__title}>
            <span className={styles.modal__prompt}>chandula@terminal: </span>
            <span className={styles.modal__path}>~/contact</span>
          </div>
        </div>

        <div className={styles.modal__content}>
          {/* Terminal Command Header */}
          <div className={styles.modal__command}>
            <span className={styles.modal__prompt_line}>$ </span>
            <span className={styles.modal__command_text}>
              cat contact-info.txt
            </span>
          </div>

          {/* Email Section */}
          <div className={styles.modal__section}>
            <h3 className={styles.modal__section_title}>
              <span className={styles.modal__comment}># </span>
              EMAIL ADDRESSES
            </h3>
            <div className={styles.modal__list}>
              {contactDetails.emails.map((email, idx) => (
                <a
                  key={idx}
                  href={`mailto:${email.value}`}
                  className={styles.modal__item}
                >
                  <span className={styles.modal__label}>{email.label}:</span>
                  <span className={styles.modal__value}>{email.value}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Phone Section */}
          <div className={styles.modal__section}>
            <h3 className={styles.modal__section_title}>
              <span className={styles.modal__comment}># </span>
              PHONE NUMBERS
            </h3>
            <div className={styles.modal__list}>
              {contactDetails.phones.map((phone, idx) => (
                <a
                  key={idx}
                  href={`tel:${phone.value.replace(/\s/g, "")}`}
                  className={styles.modal__item}
                >
                  <span className={styles.modal__label}>{phone.label}:</span>
                  <span className={styles.modal__value}>{phone.value}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Address Section */}
          <div className={styles.modal__section}>
            <h3 className={styles.modal__section_title}>
              <span className={styles.modal__comment}># </span>
              ADDRESS
            </h3>
            <div className={styles.modal__list}>
              <div className={styles.modal__item}>
                <span className={styles.modal__value}>
                  {contactDetails.address}
                </span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className={styles.modal__section}>
            <h3 className={styles.modal__section_title}>
              <span className={styles.modal__comment}># </span>
              CURRENT LOCATION
            </h3>
            <div className={styles.modal__list}>
              <div className={styles.modal__item}>
                <span className={styles.modal__value}>
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className={styles.modal__section}>
            <h3 className={styles.modal__section_title}>
              <span className={styles.modal__comment}># </span>
              SOCIAL MEDIA
            </h3>
            <div className={styles.modal__list}>
              {contactDetails.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modal__item}
                >
                  <span className={styles.modal__label}>{social.label}:</span>
                  <span className={styles.modal__value}>{social.value}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Terminal Prompt at bottom */}
          <div className={styles.modal__terminal_prompt}>
            <span className={styles.modal__prompt_line}>$ </span>
            <span className={styles.modal__cursor}>_</span>
          </div>
        </div>
      </div>
    </div>
  );
}
