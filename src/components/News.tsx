import { useEffect, useRef, useState } from "react";
import type { NewsItem } from "../types";
import styles from "./News.module.scss";

interface NewsFeedProps {
  items: NewsItem[];
  /** How many entries to show before the "show all" toggle appears. */
  initialCount?: number;
}

export function NewsFeed({ items, initialCount = 5 }: NewsFeedProps) {
  const [showAll, setShowAll] = useState(false);
  const feedRef = useRef<HTMLDivElement>(null);
  const visible = showAll ? items : items.slice(0, initialCount);
  const hidden = items.length - visible.length;

  // The page-level scroll observer only picks up elements present at mount, so
  // entries revealed by the toggle need their own observer to become visible.
  useEffect(() => {
    const feed = feedRef.current;
    if (!feed) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-animate-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const nodes = feed.querySelectorAll(".scroll-animate-left");
    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [showAll]);

  return (
    <div className={styles.news}>
      <div className={styles.news__feed} ref={feedRef}>
        {visible.map((item, index) => (
          <article
            key={item.id}
            className={`${styles.news__item} ${
              item.highlight ? styles["news__item--highlight"] : ""
            } scroll-animate-left scroll-animate-delay-${(index % 3) + 1}`}
          >
            <div className={styles.news__meta}>
              <span className={styles.news__date}>{item.date}</span>
              <span className={styles.news__category}>{item.category}</span>
              {item.highlight && <span className={styles.news__new}>New</span>}
            </div>

            <h3 className={styles.news__title}>{item.title}</h3>

            {item.description && (
              <p className={styles.news__description}>{item.description}</p>
            )}

            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.news__link}
              >
                open {item.urlLabel ?? "link"}
              </a>
            )}
          </article>
        ))}
      </div>

      <div className={styles.news__prompt}>
        {hidden > 0 ? (
          <button
            onClick={() => setShowAll(true)}
            className={styles.news__link}
            style={{ marginTop: 0 }}
          >
            tail -n {hidden} news.log
          </button>
        ) : (
          <>
            <span>$ end of news.log </span>
            <span className={styles.news__cursor}>_</span>
          </>
        )}
      </div>
    </div>
  );
}
