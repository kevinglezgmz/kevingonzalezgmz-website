import type { NextPage } from "next";
import Head from "next/head";
import HomeSection from "../components/layout/HomeSection";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Created by Kevin Gonzalez" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeSection />
    </>
  );
};

export default Index;
