import React from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

interface ResumeDate {
  name: string;
  role: string;
  experience: string;
}

export const Home = (resumeData: ResumeDate) => {
  return (
    <div className={styles.outer_container}>
      <div className={styles.body}>
        <motion.p animate={{ scale: 3 }}>Just cakes</motion.p>
      </div>
    </div>
  );
};
