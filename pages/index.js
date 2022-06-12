import Head from "next/head";
import Header from "../components/Header";
import LeftSidebar from "../components/Sidebar/LeftSidebar";
import RightSidebar from "../components/Sidebar/RightSidebar.js";
import PreLoginHome from "../components/PreLoginHome/PreLoginHome";
import Feed from "../components/Feeds/Feed";
import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const { isAutheticated } = useSelector((state) => state.user);

  // useEffect(() => {
  //   //load user using JWT
  // }, []);

  return (
    <div>
      <Head>
        <title>Project Share</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isAutheticated && (
        <Fragment>
          <Header />
          <main className="flex bg-gray-100">
            {/* Left sidebar */}
            <LeftSidebar />
            {/* feed */}
            <Feed />
            {/* Right */}
            <RightSidebar />
          </main>
        </Fragment>
      )}

      {!isAutheticated && <PreLoginHome />}
    </div>
  );
}
