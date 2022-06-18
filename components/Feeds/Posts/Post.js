import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostAction } from "../../../store/Actions/postActions.js";
import PostCard from "./PostCard.js";

const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);

  useEffect(() => {
    dispatch(getAllPostAction());
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <PostCard post={post} key={post.postId} />
      ))}
    </div>
  );
};

export default Post;
