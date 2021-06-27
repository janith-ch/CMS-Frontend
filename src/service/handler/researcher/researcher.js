import { ADD_RESEARCHER } from "./endpoints";

export const addResearcher = (user) => {
  return Axios.post(`${ADD_RESEARCHER}`, user);
};
