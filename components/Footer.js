import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["foot-links"]}>
        <h2 className={styles["foot-title"]}>Get To Know Us</h2>
        <a className={styles["foot-link"]}>About Us</a>
        <a className={styles["foot-link"]}>Careers</a>
        <a className={styles["foot-link"]}>Press Releases</a>
      </div>
      <div className={styles.logos}> </div>
    </footer>
  );
};

export default Footer;
