import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import LoginModal from "./Modal/LoginModal";

const Navbar = () => {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a
            className="hidden font-bold text-2xl lg:text-4xl md:block"
            href="/"
          >
            Project Share+
          </a>

          <div>
            <ul className="inline-flex">
              <li
                className={router.pathname == "/" ? "font-bold text-red" : ""}
              >
                <Link href="/">
                  <a className="px-4 hover:text-blue-800">Home</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname == "/about" ? "font-bold text-red" : ""
                }
              >
                <Link href="/about">
                  <a className="px-4 hover:text-blue-800">About</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname == "/login" ? "font-bold text-red" : ""
                }
              >
                <a
                  className="px-4 hover:text-blue-800 cursor-pointer"
                  onClick={() => setShowModal(true)}
                >
                  Login
                </a>
              </li>
            </ul>
          </div>

          {showModal && <LoginModal setShowModal={setShowModal} />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
