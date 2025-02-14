import styles from "./Roadmap.module.css";

const Roadmap = () => {
  return (
    <div className={styles.roadmapSection}>
      <div className="mt-5 flex justify-center">
      <h2 className={styles.title}>Roadmap</h2>
      </div>
      <div className={styles.timeline}>
        <div className={`${styles.timelineItem} ${styles.right}`}>
          <h3 className={styles.subHeadline}>Sub Headline</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            lectus nulla at volutpat diam ut venenatis tellus in.
          </p>
        </div>
        <div className={`${styles.timelineItem} ${styles.left}`}>
          <h3 className={styles.subHeadline}>Sub Headline</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            lectus nulla at volutpat diam ut venenatis tellus in.
          </p>
        </div>
        <div className={`${styles.timelineItem} ${styles.right}`}>
          <h3 className={styles.subHeadline}>Sub Headline</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            lectus nulla at volutpat diam ut venenatis tellus in.
          </p>
        </div>
        <div className={`${styles.timelineItem} ${styles.left}`}>
          <h3 className={styles.subHeadline}>Sub Headline</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            lectus nulla at volutpat diam ut venenatis tellus in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
