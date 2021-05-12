/** @format */
import { USER } from "./handler/Endpoints";
import { Axios } from "./handler/Index";
export const getUserList = (s) => {
  return Axios.post(`${USER}=${s}`);
};
