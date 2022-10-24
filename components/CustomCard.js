import React from "react";
import styles from "../styles/Card.module.css";
const CustomCard = (props) => {
  return (
    <section className={styles.card}>
      <img
        src={props.src}
        alt={props.title}
        className={styles["card-img"]}
      ></img>
      <p className={styles["card-txt"]}>{props.title}</p>
    </section>
  );
};

export default CustomCard;
