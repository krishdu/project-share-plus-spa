import React, { Fragment } from "react";
import TopContributor from "./TopContributor.js";
const TopContributors = () => {
  return (
    <Fragment>
      {/* will use map later to show top 10 */}
      <TopContributor
        name="John Doe"
        src="https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <TopContributor
        name="Lorem Ipsume"
        src="https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <TopContributor
        name="Ramesh Rabin"
        src="https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
    </Fragment>
  );
};

export default TopContributors;
