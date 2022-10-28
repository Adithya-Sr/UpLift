import React, { Fragment } from "react";
import { MongoClient } from "mongodb";
import Link from "next/link";
import Head from "next/head";
const Startups = (props) => {
  console.log(props.startups);
  return (
    <Fragment>
      <Head>
        <title>startups</title>
        <meta name="description" content="view the startups" />
      </Head>
      <section>
        <h1>View Startups</h1>
        <div>
          {props.startups.map((data) => {
            return (
              <div key={data.id}>
                <h1>{data.name}</h1>
                <h2>{data.founder}</h2>
                <p>{data.description}</p>
                <p>{data.vision}</p>
                <Link href={"/startups/" + data.id}>Show Details</Link>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};
export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb://localhost:27017/upliftnew"
  );
  const db = client.db();
  const startups = db.collection("startups");
  const data = await startups.find().toArray();
  client.close();
  return {
    props: {
      startups: data.map((startup) => {
        return {
          name: startup.name,
          founder: startup.founder,
          description: startup.description,
          vision: startup.vision,
          id: startup._id.toString(),
        };
      }),
    },
    revalidate: 1,
  };
};

export default Startups;
