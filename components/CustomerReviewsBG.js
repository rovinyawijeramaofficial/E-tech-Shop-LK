import React from "react";
import styles from "./CustomerReviewsBG.module.css";

const CustomerReviewsBG = ({ children }) => {
  return (
    <div className={`${styles.backgroundContainer} hidden sm:block`}>
      {children}
    </div>
  );
};

export default CustomerReviewsBG;