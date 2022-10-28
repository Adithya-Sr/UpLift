import React, { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
const index = () => {
  return (
    <Fragment>
      <Head>
        <title>UpLift</title>
        <meta
          name="description"
          content="An initiative to give your startups a better reach"
        />
      </Head>
      <section>
        <section className={styles.hero}>
          <div className={styles["hero-text-cont"]}>
            <h1 className={styles["hero-heading"]}>
              Get Your Startup Recognized
            </h1>
            <h2 className={styles.hlt}>Today</h2>
            <div className={styles["hero-txt"]}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                vero sequi ullam numquam voluptate eum veritatis unde, autem
                odit iste. Error nulla molestiae veritatis vero. Facilis neque
                temporibus dolor officiis.
              </p>
            </div>
          </div>
          <img
            src="./assets/hero-img.jpg"
            alt="startup"
            className={styles["hero-img"]}
          />
        </section>
        <Link href="/create-startup">Create Startup</Link>
      </section>
    </Fragment>
  );
};

export default index;
