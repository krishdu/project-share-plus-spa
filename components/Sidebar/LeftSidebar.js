import React from "react";
import Image from "next/image";
import { ImUsers } from "react-icons/im";
import LeftSidebarItem from "./LeftSidebarItem";
import { useSession } from "next-auth/react";

const LeftSidebar = () => {
  const { data: session } = useSession();

  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[320px]">
      <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
        <Image
          src={session?.user.image}
          alt="brand logo"
          height="50"
          width="50"
          className="rounded-full cursor-pointer"
        />
        <p className="hidden: sm:inline-flex font-medium"> Krishnendu </p>
      </div>

      <LeftSidebarItem Icon={ImUsers} Value="Friends" />
    </div>
  );
};

export default LeftSidebar;
