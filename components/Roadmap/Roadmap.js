import { useEffect, useState } from "react";
import styles from "./Roadmap.module.css";

const Roadmap = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const roadmapItems = [
    {
      title: "Sub Headline",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus in.",
    },
    {
      title: "Sub Headline",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus in.",
    },
    {
      title: "Sub Headline",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus in.",
    },
    {
      title: "Sub Headline",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus in.",
    },
  ];

  return (
    <div className={styles.roadmapSection}>
      <div className="mt-5 flex justify-center">
        {/* Separate Title Styles for Desktop & Mobile */}
        <h2 className={isMobile ? styles.mobileTitle : styles.desktopTitle}>Roadmap</h2>
      </div>

      {/* Desktop View (Hidden on Mobile) */}
      {!isMobile && (
        <div className={styles.timeline}>
          {roadmapItems.map((item, index) => (
            <div key={index} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.right : styles.left}`}>
              <div className={styles.timelineContent}>
                <h3 className={styles.subHeadline}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mobile View (Hidden on Desktop) */}
      {isMobile && (
        <div className={styles.mobileTimeline}>
          {roadmapItems.map((item, index) => (
            <div key={index} className={styles.mobileTimelineItem}>
              <div className={styles.timelineDot} />
              <div className={styles.mobileTimelineContent}>
                <h3 className={styles.subHeadline}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Roadmap;
