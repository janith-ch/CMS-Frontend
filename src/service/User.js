/** @format */
import { USER, DELETE_USER } from "./handler/Endpoints";
import { Axios } from "./handler/Index";
export const getUserList = (s) => {
  return Axios.post(`${USER}=${s}`);
};
export const deleteUser = (id) => {
  return Axios.delete(`${DELETE_USER}/${id}`);
};
