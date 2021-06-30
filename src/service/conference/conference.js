/** @format */

import { CONFERENCE, SINGLE_CONFERENCE, UPDATE_CONFERENCE } from "./endpoints";
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
export const getSingleConference = (id) => {
  return Axios.get(`${SINGLE_CONFERENCE}/${id}`);
};
export const updateConference = (conference) => {
  return Axios.put(`${UPDATE_CONFERENCE}/`, conference);
};
