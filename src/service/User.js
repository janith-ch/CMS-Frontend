/** @format */
import {
  USER,
  DELETE_USER,
  ADD_USER,
  SINGLE_USER,
  UPDATE_USER,
} from "./handler/Endpoints";
import { Axios } from "./handler/Index";
export const getUserList = (s) => {
  return Axios.post(`${USER}=${s}`);
};
export const deleteUser = (id) => {
  return Axios.delete(`${DELETE_USER}/${id}`);
};
export const addUser = (user) => {
  return Axios.post(`${ADD_USER}`, user);
};
export const getSingleUser = (id) => {
  return Axios.get(`${SINGLE_USER}${id}`);
};
export const updateUser = (id, user) => {
  return Axios.put(`${UPDATE_USER}${id}`, user);
};
