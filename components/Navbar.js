import React from "react";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <navbar className={styles.nav}>
      <h1 className={styles.brand}>UpLift</h1>
    </navbar>
  );
};
export default Navbar;
