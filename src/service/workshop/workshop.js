import { ADD_WORKSHOP } from "./endpoints";

export const addWorkshop = (user) => {
  return Axios.post(`${ADD_WORKSHOP}`, user);
};
