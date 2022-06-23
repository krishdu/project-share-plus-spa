const ACCESS_TOKEN = "ACCESS_TOKEN";
/**
 * @description get access token from local storag
 */
export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};

/**
 * @description set AccessToken to local storage
 * @param  {} jwtToken
 */
export const setAccessToken = (jwtToken) => {
  localStorage.setItem(ACCESS_TOKEN, jwtToken);
};

/**
 * @description set AccessToken to local storage
 * @param  {} jwtToken
 */
export const removeAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN);
};
