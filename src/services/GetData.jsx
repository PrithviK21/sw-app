import { createContext, useContext } from "react";
import axios from "axios";

export const dataServiceContext = createContext(undefined);

const baseUrl = "https://swapi.py4e.com/api";

function GetData({ children }) {
  const dataService = {
    async getAPIData(category, page = 1) {
      const totalData = await axios.get(`${baseUrl}/${category}?page=${page}`);
      return totalData.data.results;
    },
  };

  return (
    <dataServiceContext.Provider value={dataService}>
      {children}
    </dataServiceContext.Provider>
  );
}

export default GetData;
