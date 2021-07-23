import React from "react";
import styles from "./styles.module.scss";

interface ResumeDate {
  name: string;
  role: string;
  experience: string;
}

export const Home = (resumeData: ResumeDate) => {
  return (
    <div className={styles.outer_container}>
      <div className={styles.body}>
        <p className={styles.textStyling}>Just cakes</p>
      </div>
    </div>
  );
};
