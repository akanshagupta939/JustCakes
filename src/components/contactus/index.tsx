import React from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

interface ResumeDate {
  name: string;
  role: string;
  experience: string;
}

export const ContactUs = (resumeData: ResumeDate) => {
  return (
    <div className={styles.outer_container}>
      <div className={styles.body}>
        <motion.h5 initial={{ x: 100 }} animate={{ x: 10 }}>
          Mobile Number: +91 8860257561
        </motion.h5>
        <h6> </h6>
        <motion.h5 initial={{ x: -100 }} animate={{ x: -10 }}>
          Address : Vasant Apartment, Gurugram
        </motion.h5>
        <a
          className={styles.contactLink}
          target="blank"
          href="https://www.facebook.com/JustCakesGurugram/"
        >
          Join Us on Facebook
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a
          className={styles.contactLink}
          target="blank"
          href="https://instagram.com/justcakes_gurgaon?igshid=1a1zqr707fl9w"
        >
          Sneak Peak on our Instagram Account{" "}
        </a>
      </div>
    </div>
  );
};
