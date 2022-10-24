import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a className={styles["foot-link"]}>Contact Us</a>
      <a className={styles["foot-link"]}>About</a>
    </footer>
  );
};

export default Footer;
