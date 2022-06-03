import Image from "next/image";
import React from "react";
import { HiOutlineSearch, HiOutlineHome } from "react-icons/hi";
import { FiTrendingUp } from "react-icons/fi";
import { FaRegHandshake } from "react-icons/fa";
import { AiFillBell, AiFillMessage } from "react-icons/ai";
import { RiLogoutCircleLine } from "react-icons/ri";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16">
      {/* left */}
      <div className="flex min-w-fit">
        <Image
          src="/brand_logo_v1.png"
          alt="brand logo"
          height="55"
          width="200"
          className="rounded-full"
        />
        {/* <div
          className="flex items-center space-x-2 px-2 ml-2 rounded-full 
                        bg-gray-100   text-gray-500"
        >
          <HiOutlineSearch size={20} />
          <input
            className="hidden lg:inline-flex bg-transparent focus:outline-none"
            type="text"
            placeholder="Search Projects"
          />
        </div> */}
      </div>

      {/* Center */}
      <div className="flex flex-grow justify-center mx-2">
        <div className="flex items-center">
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <HiOutlineHome className="mx-auto" size={25} title="Home" />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <FiTrendingUp className="mx-auto" size={25} title="Trending" />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <FaRegHandshake className="mx-auto" size={25} title="Hire Me" />
          </div>
        </div>
      </div>

      {/* Right  */}
      <div className="flex items-center justify-end min-w-fit space-x-2">
        <Image
          src={session?.user.image}
          alt="avatar"
          height="50"
          width="50"
          className="rounded-full cursor-pointer"
        />

        <p className="hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs">
          {session?.user.name.split(" ")[0]}
        </p>

        <AiFillMessage
          size={20}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full
                     p-2 cursor-pointer hover:bg-gray-300"
        />

        <AiFillBell
          size={20}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full
                     p-2 cursor-pointer hover:bg-gray-300"
        />
        <RiLogoutCircleLine
          size={20}
          onClick={signOut}
          className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full
                     p-2 cursor-pointer hover:bg-gray-300"
        />
      </div>
    </div>
  );
};

export default Header;
