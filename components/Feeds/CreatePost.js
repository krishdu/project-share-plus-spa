import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { IoMdPhotos } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { createNewPostAction } from "../../store/Actions/postActions";
import { postActions } from "../../store/Slices/feeds/postSlice";
import userIcon from "../../public/assets/user_icon.png";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";

const CreatePost = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { loading, error, success } = useSelector((state) => state.post);

  const userAvatar = user.avatar ? user.avatar : userIcon;

  const postTextInputRef = useRef(null);
  const postFileInputRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const onFileInputHandler = () => {
    postFileInputRef.current.click();
  };

  const imageChangeHandler = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (l) => {
        setImageToPost(l.target.result);
      };
    }
  };

  const removeImagehandler = () => {
    setImageToPost(null);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!postFileInputRef.current.value) return;

    const formData = new FormData();
    formData.append("file", imageToPost);
    formData.append("description", postTextInputRef.current.value);

    //call api
    dispatch(createNewPostAction(formData));
    console.log("successfully submitted");
  };

  useEffect(() => {
    if (error) {
      //show alert
      dispatch(postActions.clearErrors());
    }

    if (success) {
      dispatch(postActions.resetAddPost());
    }
  }, [error, success]);

  return (
    <div className="bg-white rounded-md shadow-md text-gray-500 p-2">
      {loading && <Loader />}
      <div className="flex p-4 space-x-2 items-center">
        {userAvatar && (
          <Image
            src={userAvatar}
            alt="avatar"
            height="40"
            width="40"
            className="rounded-full cursor-pointer"
          />
        )}
        <form className="flex flex-1">
          <input
            type="text"
            ref={postTextInputRef}
            placeholder={`What's on you mind, ${user.firstName}`}
            className="rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4"
          />
          <button hidden onClick={formSubmitHandler}></button>
        </form>
      </div>
      {imageToPost && (
        <div
          onClick={removeImagehandler}
          className="flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transition duration-150 cursor-pointer"
        >
          <img src={imageToPost} className="h-10 object-contain" />
          <RiDeleteBin6Line className="h-8 hover:text-red-500" />
        </div>
      )}
      <div className="flex justify-evenly py-2">
        <div
          className="flex items-center p-1 space-x-1 flex-grow justify-center
        hover:bg-gray-100 rounded-md hover:cursor-pointer"
          onClick={onFileInputHandler}
        >
          <IoMdPhotos size={20} className="text-green-500 " />
          <p className="font-semibold text-gray-600"> Photo</p>
          <input
            type="file"
            onChange={imageChangeHandler}
            ref={postFileInputRef}
            accept="image/*"
            hidden
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
