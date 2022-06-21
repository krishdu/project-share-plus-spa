import Image from "next/image";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import userIcon from "../../../public/assets/user_icon.png";

const PostCard = ({ post }) => {
  const userAvatar = post.avatar ? post.avatar : userIcon;

  return (
    <div className="flex flex-col" key={post.postId}>
      <div className="bg-white mt-6 rounded-md p-4">
        <div className="flex items-center space-x-2">
          <img
            src={userAvatar}
            height={40}
            width={40}
            className="rounded-full"
          />
          <div>
            <p className="font-medium"> {post.owner} </p>
            <p className="text-xs text-gray-500">
              {new Date(post?.createDate)?.toLocaleString()}
            </p>
          </div>
        </div>
        {/* If Any Image/Video */}
        <p className="py-4">{post.description}</p>
        {post.image != null && (
          <div className="relative h-60 md:h-60 bg-white">
            <Image src={post.image} layout="fill" objectFit="cover" />
          </div>
        )}
      </div>
      {/* Footer */}
      <div className="flex items-center justify-center bg-white p-2">
        <div className="flex items-center space-x-2 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FiThumbsUp className="h-4 " />
          <p className="text-xs sm:text-base"> Impressive </p>
        </div>
        <div className="flex items-center space-x-2 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FaRegCommentAlt className="h-4 " />
          <p className="text-xs sm:text-base"> Comment </p>
        </div>
        <div className="flex items-center space-x-2 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <RiShareForwardLine className="h-4 " />
          <p className="text-xs sm:text-base"> Share </p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
