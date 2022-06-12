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
    //need to add loading dispatch
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
    console.log(data);
    setAccessToken(data.jwtToken);
    dispatch(userActions.loadUserSuccess(data.user));
  } catch (error) {
    // need to add dispatch for error
    console.log(error);
  }
};
