/** @format */

import { KEYNOTES, KEYNOTES_LIST, DELETE_KEYNOTES } from "./endpoints";
import { Axios } from "../handler/Index";

export const addKeynotes = (keynote) => {
  return Axios.post(`${KEYNOTES}`, keynote);
};
export const getKeynotes = () => {
  return Axios.get(`${KEYNOTES_LIST}`);
};
export const deleteKey = (id) => {
  return Axios.delete(`${DELETE_KEYNOTES}/${id}`);
};
