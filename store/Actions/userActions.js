import axios from "axios";
import { userActions } from "../Slices/user/userSlice";
import { setAccessToken, getAccessToken } from "../../utils/local-storage.js";

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
    dispatch(userActions.loadUserFail(error.response.data.message));
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
    dispatch(userActions.loadUserFail(error.response.data.message));
  }
};
