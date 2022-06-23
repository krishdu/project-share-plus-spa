import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../store/Actions/userActions";
import { userActions } from "../../../store/Slices/user/userSlice";
import Loader from "../../Loader/Loader";
import { alertService } from "../../../utils/Alert/alert.service";

const LoginModal = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const { loading } = useSelector((state) => state.user);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  const btnText = loading ? "Please wait.." : "Sign in";
  useEffect(() => {
    if (error) {
      alertService.error(error, {
        autoClose: true,
        keepAfterRouteChange: false,
      });
      dispatch(userActions.clearErrors());
    }
  }, [error]);

  return (
    <>
      {loading && <Loader />}
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl ml-2 font-semibold">Login </h3>
              <button
                className="p-1 ml-auto  border-0 float-right leading-none outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className=" text-black h-6 w-6 text-4xl font-semibold block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="container px-3">
                <div className="flex justify-center items-center flex-wrap text-gray-800">
                  <div className="w-4/12 md:w-4/12 lg:w-4/12 mb-12 md:mb-0 ml-4">
                    <img
                      src="../../../assets/login-min.jpg"
                      className="w-50"
                      alt="Phone image"
                    />
                  </div>
                  <div className="w-10/12 md:w-8/12 lg:w-5/12 lg:ml-20">
                    <form onSubmit={loginHandler}>
                      <div className="mb-6">
                        <input
                          type="text"
                          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="mb-6">
                        <input
                          type="password"
                          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassowrd(e.target.value)}
                        />
                      </div>

                      <div className="flex justify-between items-center mb-6">
                        <a
                          href="#!"
                          className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                        >
                          Forgot password?
                        </a>
                      </div>

                      <button
                        type="submit"
                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        {btnText}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default LoginModal;
