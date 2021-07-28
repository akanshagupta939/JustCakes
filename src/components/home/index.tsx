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
        <div className={styles.textStyling}>
          <p>Just Cakes</p>
          <p className={styles.textStyling_subheader}>Your home bakery</p>
        </div>
      </div>
    </div>
  );
};
