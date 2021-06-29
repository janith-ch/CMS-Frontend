/** @format */

import { CONFERENCE } from "./endpoints";
import { Axios } from "../handler/Index";

export const addConference = (conference) => {
  return Axios.post(`${CONFERENCE}`, conference);
};
export const getConference = () => {
  return Axios.get(`${CONFERENCE}`);
};
export const deleteConference = (id) => {
  return Axios.delete(`${CONFERENCE}/${id}`);
};
