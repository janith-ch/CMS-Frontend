/** @format */

import {
  ADD_PDF,
  ADD_WORKSHOP,
  VIEW_WORKSHOP,
  DELETE_WORKSHOP,
  AP_WORKSHOP,
  UPDATE,
  EDIT_WORKSHOP,
  APPROVED,
} from "./endpoints";
import { Axios } from "../handler/Index";

export const addWorkshop = (workshop) => {
  return Axios.post(`${ADD_WORKSHOP}`, workshop);
};

export const addPdf = (uploadFile) => {
  return Axios.post(`${ADD_PDF}`, uploadFile);
};
export const getWorkshopList = () => {
  return Axios.get(`${VIEW_WORKSHOP}`);
};
export const getApWorkshopList = () => {
  return Axios.get(`${AP_WORKSHOP}`);
};
export const deleteWorkshop = (id) => {
  return Axios.delete(`${DELETE_WORKSHOP}/${id}`);
};
export const approvedWorkshop = (id, data) => {
  return Axios.put(`${APPROVED}/${id}`, data);
};
export const updateWorkshop = (id, data) => {
  return Axios.put(`${UPDATE}/${id}`, data);
};
export const getSingleWorkshop = (id) => {
  return Axios.get(`${EDIT_WORKSHOP}/${id}`);
};
