import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";
function StartupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.startup.name}</title>
        <meta name="description" content={props.startup.description} />
      </Head>
      <div>
        <div>{props.startup.name}</div>
      </div>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb://localhost:27017/upliftnew"
  );
  const db = client.db();

  const startupsCollection = db.collection("startups");

  const startups = await startupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: startups.map((startup) => ({
      params: { startup: startup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const startupId = context.params.startup;

  const client = await MongoClient.connect(
    "mongodb://localhost:27017/upliftnew"
  );
  const db = client.db();

  const startupsCollection = db.collection("startups");

  const selectedStartup = await startupsCollection.findOne({
    _id: ObjectId(startupId),
  });

  client.close();

  return {
    props: {
      startup: {
        id: selectedStartup._id.toString(),
        name: selectedStartup.name,
        founder: selectedStartup.founder,
        vision: selectedStartup.vision,
        description: selectedStartup.description,
      },
    },
  };
}

export default StartupDetails;
