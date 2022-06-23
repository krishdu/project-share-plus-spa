import Header from "../components/Header";
import LeftSidebar from "../components/Sidebar/LeftSidebar";
import RightSidebar from "../components/Sidebar/RightSidebar.js";
import PreLoginHome from "../components/PreLoginHome/PreLoginHome";
import Feed from "../components/Feeds/Feed";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../store/Actions/userActions";
import { userActions } from "../store/Slices/user/userSlice";
import Loader from "../components/Loader/Loader";

import Alert from "../utils/Alert/Alert";
import TabHeader from "../components/TabHeader";

let loadUserAttempt = 2;

export default function Home() {
  const dispatch = useDispatch();
  const { isAutheticated, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (loadUserAttempt > 0) {
      dispatch(loadUser());
      loadUserAttempt--;
    }
    if (error) {
      dispatch(userActions.clearErrors());
    }
  }, [error]);

  return (
    <div>
      <TabHeader title="Project Share+" />

      {loading && <Loader />}
      <Alert />
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
