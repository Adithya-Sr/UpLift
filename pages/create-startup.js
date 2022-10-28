import { Fragment, React } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Form from "../components/Form";
import Head from "next/head";
const CreateStartup = () => {
  const router = useRouter();
  const formHandler = async (givenData) => {
    try {
      const resData = await fetch("/api/createstartup", {
        method: "POST",
        body: JSON.stringify(givenData),
        headers: { "content-type": "application/json" },
      });

      const data = await resData;
      console.log(data);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Fragment>
      <Head>
        <title>List-startup</title>
        <meta name="description" content="list your startup here" />
      </Head>
      <h1>Enter The Details Of Your Startup</h1>
      <Form startupForm={formHandler}></Form>
      <Link href="/">Go Back</Link>
    </Fragment>
  );
};

export default CreateStartup;
