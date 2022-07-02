import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import Loader from "../../components/Loader/Loader";
import TabHeader from "../../components/TabHeader";
import userIcon from "../../public/assets/user_icon.png";
import { loadUser } from "../../store/Actions/userActions";
//import { userActions } from "../../store/Slices/user/userSlice";

const Me = () => {
  const dispatch = useDispatch();
  const { isAutheticated, user, error, loading } = useSelector(
    (state) => state.user
  );
  const userAvatar = user?.avatar ? user.avatar : userIcon;

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      {loading && <Loader />}
      <Fragment>
        {!loading && isAutheticated && (
          <Fragment>
            <TabHeader title="Profile" />
            <Header />
            <div className="bg-gray-100 h-screen">
              <div className="container mx-auto p-5">
                <div className="md:flex no-wrap md:-mx-2 ">
                  <div className="w-full md:w-4/12 md:mx-2">
                    <div className="bg-white p-3 border-t-4 border-green-400">
                      <div className="image overflow-hidden">
                        <img
                          className="h-auto w-full mx-auto rounded-full"
                          src={userAvatar}
                          alt="avatar"
                        />
                      </div>
                      <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                        {user.firstName}
                      </h1>

                      <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li className="flex items-center py-3">
                          <span>Status</span>
                          <span className="ml-auto">
                            <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                              Active
                            </span>
                          </span>
                        </li>
                        <li className="flex items-center py-3">
                          <span>Member since</span>
                          <span className="ml-auto">
                            {" "}
                            {new Date(user?.createDate)?.toLocaleString()}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="my-4"></div>
                  </div>
                  <div className="w-full md:w-9/12 mx-2 h-64">
                    <div className="bg-white p-3 shadow-sm rounded-sm">
                      <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                          <svg
                            className="h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </span>
                        <span className="tracking-wide">About</span>
                      </div>
                      <div className="text-gray-700">
                        <div className="grid md:grid-cols-2 text-sm">
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                              First name
                            </div>
                            <div className="px-4 py-2">{user.firstName}</div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                              Last Name
                            </div>
                            <div className="px-4 py-2">{user.lastName}</div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                              Email.
                            </div>
                            <div className="px-4 py-2">
                              <a
                                className="text-blue-800"
                                href={`mailto:${user.email}`}
                              >
                                {user.userEmail}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="my-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        )}

        {!loading && !isAutheticated && (
          <center>
            <b>Not Authorize to access this resource</b>
          </center>
        )}
      </Fragment>
    </>
  );
};

export default Me;
