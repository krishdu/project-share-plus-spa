import Head from "next/head";
import Header from "../components/Header";
import LeftSidebar from "../components/Sidebar/LeftSidebar";
import RightSidebar from "../components/Sidebar/RightSidebar.js";
import PreLoginHome from "../components/PreLoginHome/PreLoginHome";
import Feed from "../components/Feeds/Feed";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../store/Actions/userActions";
import Loader from "../components/Loader/Loader";

export default function Home() {
  const dispatch = useDispatch();
  const { isAutheticated, loading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <div>
      <Head>
        <title>Project Share+</title>
        <meta
          name="description"
          content="Project share+, more than just project"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading && <Loader />}

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
