import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiUserCircle } from "react-icons/bi";
import { registerUser } from "../../../store/Actions/userActions";
import { registerUserActions } from "../../../store/Slices/user/registerUserSlice";
import Loader from "../../Loader/Loader";

const RegisterModal = ({ setShowModal }) => {
  const dispatch = useDispatch();

  const [formValidationError, setFormValidationError] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);

  const avatarFileInputRef = useRef(null);

  const { loading, error, success } = useSelector(
    (state) => state.registerUser
  );

  useEffect(() => {
    if (error) {
      //show alert
      dispatch(registerUserActions.clearErrors());
    }

    if (success) {
      dispatch(registerUserActions.resetRegisterUser());
      setShowModal(false);
      //show success alert
    }
  }, [error, success]);

  const registerHandler = (e) => {
    e.preventDefault();
    if (firstName === "" || lastName == "" || email == "") {
      setFormValidationError("Please fill all fields");
      setTimeout(() => {
        setFormValidationError(null);
      }, 5000);
      return;
    }

    if (password !== confirmPassword) {
      setFormValidationError("Password mismatch");
      setTimeout(() => {
        setFormValidationError(null);
      }, 5000);
      return;
    }

    if (!avatarFileInputRef.current.value) {
      setFormValidationError("Please choose a avatar");
      setTimeout(() => {
        setFormValidationError(null);
      }, 5000);
      return;
    }

    const registerForm = new FormData();
    registerForm.append("firstName", firstName);
    registerForm.append("lastName", lastName);
    registerForm.append("userEmail", email);
    registerForm.append("password", password);
    registerForm.append("avatarFile", avatarFile);
    dispatch(registerUser(registerForm));
  };

  const btnText = loading ? "Please wait.." : "Sign Up";

  const onFileInputHandler = () => {
    avatarFileInputRef.current.click();
  };

  const avatarFileChangeHandler = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (l) => {
        setAvatarFile(l.target.result);
      };
    }
  };

  return (
    <>
      {loading && <Loader />}
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl ml-2 font-semibold">Register </h3>
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
            <div className="relative p-7 flex-auto">
              <div className="container px-6">
                <div className="flex justify-center items-center text-gray-800">
                  <div className="w-10/12 md:w-8/12 lg:w-12/12 min-w-max">
                    <form onSubmit={registerHandler}>
                      <div className="mb-6">
                        <input
                          type="text"
                          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="First Name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div className="mb-6">
                        <input
                          type="text"
                          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Last Name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>

                      <div className="mb-6">
                        <input
                          type="email"
                          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Email address"
                          value={email}
                          autoComplete="off"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="mb-6">
                        <input
                          type="password"
                          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Password"
                          value={password}
                          autoComplete="off"
                          onChange={(e) => setPassowrd(e.target.value)}
                        />
                      </div>

                      <div className="mb-6">
                        <input
                          type="password"
                          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Confirm Password"
                          value={confirmPassword}
                          autoComplete="off"
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                      <div className="mb-6">
                        <div
                          className="flex cursor-pointer"
                          onClick={onFileInputHandler}
                        >
                          <div className="w-4/12">
                            {!avatarFile && (
                              <BiUserCircle
                                size={30}
                                className="text-blue-300"
                              />
                            )}
                            {avatarFile && (
                              <img
                                src={avatarFile}
                                height={30}
                                width={35}
                                className="rounded-full"
                              />
                            )}
                          </div>
                          <div className="font-medium text-gray-600 w-5/12">
                            Choose Avatar
                          </div>
                        </div>
                        <div>
                          <input
                            type="file"
                            className="hidden"
                            ref={avatarFileInputRef}
                            onChange={avatarFileChangeHandler}
                            accept="image/*"
                          />
                        </div>
                      </div>

                      {formValidationError && (
                        <div className="text-center">
                          <p className="font-medium text-red-600">
                            {formValidationError}
                          </p>
                        </div>
                      )}

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

export default RegisterModal;
