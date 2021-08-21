import React from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { brown, green } from "@material-ui/core/colors";

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
          <a
            className={styles.contactLink}
            target="blank"
            title="Chat with us on Whatsapp"
            href=" https://wa.me/918851856358"
          >
            Click to chat with us on Whatsapp{" "}
            <WhatsAppIcon fontSize="inherit" style={{ color: green[500] }} />
          </a>
        </motion.h5>
        <h6> </h6>
        <motion.h5 initial={{ x: -100 }} animate={{ x: -10 }}>
          Address : Vasant Apartment, Gurugram
        </motion.h5>
        <div className={styles.contactLink}>Order Now :</div>
        <a
          className={styles.contactLink}
          target="blank"
          title="Zomato link to Just Cakes"
          href="https://www.zomato.com/ncr/just-cakes-1-sector-14-gurgaon/"
        >
          <img
            className={styles.imageSize}
            alt="Zomato link to Just Cakes"
            src="https://img.icons8.com/doodle/48/000000/zomato.png"
          />
        </a>
        &nbsp;
        <a
          className={styles.contactLink}
          target="blank"
          title="Swiggy link to Just Cakes"
          href="https://www.swiggy.com/restaurants/just-cakes-sector-14-gurgaon-386611"
        >
          <img
            className={styles.imageSize}
            alt="Swiggy link to Just Cakes"
            src="https://img.icons8.com/doodle/48/000000/swiggy.png"
          />
        </a>
        <div>
          <div className={styles.contactLink}>Follow us on :</div>
          <a
            className={styles.contactLink}
            target="blank"
            title="FB link to Just Cakes"
            href="https://www.facebook.com/JustCakesGurugram/"
          >
            <FacebookIcon fontSize="large" style={{ color: brown[500] }} />
          </a>
          &nbsp;
          <a
            title="Instagram link to Just Cakes"
            className={styles.contactLink}
            target="blank"
            href="https://instagram.com/justcakes_gurgaon?igshid=1a1zqr707fl9w"
          >
            <InstagramIcon fontSize="large" style={{ color: brown[500] }} />
          </a>
          <div className={styles.footer}>
            *Extra charges will be applied on delivery
          </div>
        </div>
      </div>
    </div>
  );
};
