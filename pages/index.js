import React from "react";
import CustomCard from "../components/CustomCard";
import styles from "../styles/Home.module.css";
const index = () => {
  return (
    <section>
      <section className={styles.hero}>
        <div className={styles["hero-text-cont"]}>
          <h1 className={styles["hero-heading"]}>
            Get Your Startup Recognized
          </h1>
          <h2 className={styles.hlt}>Today</h2>
          <div className={styles["hero-txt"]}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis vero
              sequi ullam numquam voluptate eum veritatis unde, autem odit iste.
              Error nulla molestiae veritatis vero. Facilis neque temporibus
              dolor officiis.
            </p>
          </div>
        </div>
        <img
          src="./assets/hero-img.jpg"
          alt="startup"
          className={styles["hero-img"]}
        />
      </section>
      <section className={styles["card-cont"]}>
        <h1 className={styles["card-text"]}> What We Have For Founders</h1>
        <div className={styles.cards}>
          <CustomCard src="./assets/capital.jpg" title="idk"></CustomCard>
          <CustomCard src="./assets/scaleup.jpg" title="idk"></CustomCard>
          <CustomCard src="./assets/relation.jpg" title="idk"></CustomCard>
        </div>
      </section>
      <section className={styles["card-cont"]}>
        <h1 className={styles["card-text"]}> What We Have For Investors</h1>
        <div className={styles.cards}>
          <CustomCard src="./assets/capital.jpg" title="idk"></CustomCard>
          <CustomCard src="./assets/scaleup.jpg" title="idk"></CustomCard>
          <CustomCard src="./assets/relation.jpg" title="idk"></CustomCard>
        </div>
      </section>
    </section>
  );
};

export default index;
