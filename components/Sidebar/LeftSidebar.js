import React from "react";
import Image from "next/image";
import { ImUsers } from "react-icons/im";
import LeftSidebarItem from "./LeftSidebarItem";
import { useSelector } from "react-redux";
import userIcon from "../../public/assets/user_icon.png";

const LeftSidebar = () => {
  const { user } = useSelector((state) => state.user);
  const userAvatar = user.avatar ? user.avatar : userIcon;

  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[320px]">
      <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
        {userAvatar && (
          <Image
            src={userAvatar}
            alt="brand logo"
            height="50"
            width="50"
            className="rounded-full cursor-pointer"
          />
        )}
        <p className="hidden: sm:inline-flex font-medium"> {user.firstName} </p>
      </div>

      <LeftSidebarItem Icon={ImUsers} Value="Friends" />
    </div>
  );
};

export default LeftSidebar;
