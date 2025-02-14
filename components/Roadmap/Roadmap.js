import styles from "./Roadmap.module.css";

const Roadmap = () => {
  return (
    <div className={styles.roadmapSection}>
      {/* Roadmap Title */}
      <div className="mt-5 flex justify-center">
        <h2 className={styles.title}>Roadmap</h2>
      </div>

      {/* ✅ Desktop View (Hidden on Mobile) */}
      <div className="hidden md:block">
        <div className={styles.timeline}>
          <div className={`${styles.timelineItem} ${styles.right}`}>
            <h3 className={styles.subHeadline}>Sub Headline</h3>
            <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus in.
            </p>
          </div>
          <div className={`${styles.timelineItem} ${styles.left}`}>
            <h3 className={styles.subHeadline}>Sub Headline</h3>
            <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus in.
            </p>
          </div>
          <div className={`${styles.timelineItem} ${styles.right}`}>
            <h3 className={styles.subHeadline}>Sub Headline</h3>
            <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus in.
            </p>
          </div>
          <div className={`${styles.timelineItem} ${styles.left}`}>
            <h3 className={styles.subHeadline}>Sub Headline</h3>
            <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis tellus in.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Mobile View (Hidden on Desktop) */}
      <div className="flex flex-col md:hidden px-4 space-y-6">
        <div className="bg-white shadow-lg rounded-lg p-4 border-l-4 border-orange-500">
          <h3 className="text-lg font-bold text-gray-800">Sub Headline</h3>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 border-l-4 border-orange-500">
          <h3 className="text-lg font-bold text-gray-800">Sub Headline</h3>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 border-l-4 border-orange-500">
          <h3 className="text-lg font-bold text-gray-800">Sub Headline</h3>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 border-l-4 border-orange-500">
          <h3 className="text-lg font-bold text-gray-800">Sub Headline</h3>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
