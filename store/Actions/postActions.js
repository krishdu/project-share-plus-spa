import axios from "axios";
import { postActions } from "../Slices/feeds/postSlice";
import { setAccessToken, getAccessToken } from "../../utils/local-storage.js";

/**
 * @description create new post reducer action
 * @param  {} postDetails
 */
export const createNewPostAction = (postDetails) => async (dispatch) => {
  try {
    dispatch(postActions.addGetPostRequest());

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const accessToken = getAccessToken();

    if (accessToken) {
      config.headers.Authorization = "Bearer " + accessToken;
    }

    const { data } = await axios.post(
      `${process.env.BACKEND_URL}/api/v1/post`,
      postDetails,
      config
    );
    dispatch(postActions.addPostSuccess(data));
  } catch (error) {
    const errorResponse =
      error?.response?.data?.message || "Something went wrong!";
    dispatch(postActions.addGetPostFail(errorResponse));
  }
};

/**
 * @description get all post reducer action
 */
export const getAllPostAction = () => async (dispatch) => {
  try {
    dispatch(postActions.addGetPostRequest());

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
    const errorResponse =
      error?.response?.data?.message || "Something went wrong!";
    dispatch(postActions.addGetPostFail(errorResponse));
  }
};
