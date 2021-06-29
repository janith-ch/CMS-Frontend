/** @format */

import { ADD_WORKSHOP } from "./endpoints";
import { Axios } from "../handler/Index";

export const addWorkshop = (user) => {
  return Axios.post(`${ADD_WORKSHOP}`, user);
};
