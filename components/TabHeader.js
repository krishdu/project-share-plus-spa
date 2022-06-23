import Head from "next/head";
import React from "react";

const TabHeader = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Project share+, more than just project"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default TabHeader;
