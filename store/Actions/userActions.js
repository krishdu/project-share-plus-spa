import axios from "axios";
import { userActions } from "../Slices/user/userSlice";
import { setAccessToken, getAccessToken } from "../../utils/local-storage.js";
import { registerUserActions } from "../Slices/user/registerUserSlice";

/**
 * @description reducer action to login user
 * @param  {} userEmail
 * @param  {} password
 */
export const loginUser = (userEmail, password) => async (dispatch) => {
  try {
    dispatch(userActions.loadUserRequest());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${process.env.BACKEND_URL}/api/v1/authenticate`,
      { userEmail, password },
      config
    );

    setAccessToken(data.jwtToken);
    dispatch(userActions.loadUserSuccess(data.user));
  } catch (error) {
    const errorResponse =
      error?.response?.data?.message || "Something went wrong!";
    dispatch(userActions.loadUserFail(errorResponse));
  }
};

/**
 * @description If jwt present then login
 */
export const loadUser = () => async (dispatch) => {
  try {
    dispatch(userActions.loadUserRequest());

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
      `${process.env.BACKEND_URL}/api/v1/user/me`,
      config
    );
    dispatch(userActions.loadUserSuccess(data));
  } catch (error) {
    //console.log(error);
    const errorResponse =
      error?.response?.data?.message || "Something went wrong!";
    dispatch(userActions.loadUserFail(errorResponse));
  }
};

/**
 * @description reducer action to register user
 * @param  {} userDetails
 */
export const registerUser = (userDetails) => async (dispatch) => {
  try {
    dispatch(registerUserActions.registerUserRequest());

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.post(
      `${process.env.BACKEND_URL}/api/v1/user/new`,
      userDetails,
      config
    );
    console.log(data);
    dispatch(
      registerUserActions.registerUserSuccess({ user: data, success: true })
    );
  } catch (error) {
    console.error(error);
    const errorResponse =
      error?.response?.data?.message || "Something went wrong!";
    dispatch(registerUserActions.registerUserFail(errorResponse));
  }
};
