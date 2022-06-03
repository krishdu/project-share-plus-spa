import React from "react";
import CreatePost from "../Feeds/CreatePost";
import Post from "../Feeds/Posts/Post.js";

const Feed = () => {
  return (
    <div className="flex-grow h-screen pt-6 mr-6  overflow-y-auto no-scrollbar">
      <div className="mx-auto max-w-md md:max-w-xl lg:max-w-2xl">
        {/* create project component  */}
        <CreatePost />
        {/* posts */}
        <Post />
      </div>
    </div>
  );
};

export default Feed;
