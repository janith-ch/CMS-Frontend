import { ADD_PDF, ADD_WORKSHOP } from "./endpoints";
import { Axios } from "../handler/Index";

export const addWorkshop = (workshop) => {
  return Axios.post(`${ADD_WORKSHOP}`, workshop);
};

export const addPdf = (uploadFile) => {
  return Axios.post(`${ADD_PDF}`, uploadFile);
};
