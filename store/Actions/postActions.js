import axios from "axios";
import { postActions } from "../Slices/postSlice";

/**
 * @description create new post reducer action
 * @param  {} postDetails
 */
export const createNewPostAction = (postDetails) => async (dispatch) => {
  try {
    //need to add loading dispatch
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${process.env.BACKEND_URL}/api/v1/post`,
      postDetails,
      config
    );
    dispatch(postActions.addPost(data));
  } catch (error) {
    // need to add dispatch for error
    console.log(error);
  }
};

/**
 * @description get all post reducer action
 */
export const getAllPostAction = () => async (dispatch) => {
  try {
    //need to add loading dispatch
    const { data } = await axios.get(`${process.env.BACKEND_URL}/api/v1/post`);
    dispatch(postActions.getAllPost(data));
  } catch (error) {
    // need to add dispatch for error
    console.log(error);
  }
};
