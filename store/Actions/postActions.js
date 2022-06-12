import axios from "axios";
import { postActions } from "../Slices/postSlice";
import { setAccessToken, getAccessToken } from "../../utils/local-storage.js";

/**
 * @description create new post reducer action
 * @param  {} postDetails
 */
export const createNewPostAction = (postDetails) => async (dispatch) => {
  try {
    //need to add loading dispatch
    const headers = new Headers({
      "Content-Type": "application/json",
    });

    const accessToken = getAccessToken();

    if (accessToken) {
      headers.append("Authorization", "Bearer " + accessToken);
    }

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
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const accessToken = getAccessToken();

    if (accessToken) {
      config.headers.Authorization = "Bearer " + accessToken;
    }

    const { data } = await axios.get(
      `${process.env.BACKEND_URL}/api/v1/post`,
      config
    );

    dispatch(postActions.getAllPost(data));
  } catch (error) {
    // need to add dispatch for error
    console.log(error);
  }
};
