import { ADD_RESEARCHER } from "./endpoints";

export const addResearcher = (researchPaper) => {
  return Axios.post(`${ADD_RESEARCHER}`, researchPaper);
};
