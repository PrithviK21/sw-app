import { createContext, useEffect, useState } from "react";
import axios from "axios";
import CannotFunction from "../pages/CannotFunction";
export const dataServiceContext = createContext(undefined);

var baseUrl = "https://swapi.py4e.com/api";

const filmMap = {
  1: "A New Hope",
  2: "Empire Strikes Back",
  3: "Return of the Jedi",
  4: "The Phantom Menace",
  5: "Attack of the Clones",
  6: "Revenge of the Sith",
  7: "The Force Awakens",
};
// provides a map for films. Hardcoded as there are only 7 films, saves on api calls.
function GetData({ children }) {
  const [canFunction, setCanFunction] = useState(true);
  useEffect(() => {
    const checkAPIStatus = async () => {
      try {
        const response = await axios.get(baseUrl);
      } catch (error) {
        console.log("PY4e is down, attempting to use swapi.dev");
        baseUrl = "https://swapi.dev/api";
        try {
          const response = await axios.get(baseUrl);
          console.log("Success, site will use SWAPI.dev");
        } catch (e) {
          console.log("SWAPI is down as well, site cannot function");
          setCanFunction(false);
        }
      }
    };
    checkAPIStatus();
  }, []);

  const dataService = {
    // this func returns an entire page of data, with a max of 10 returned entities
    async getAPIData(category, page = 1) {
      const totalData = await axios.get(`${baseUrl}/${category}?page=${page}`);
      return totalData.data.results;
    },
    // this allows access to filmMap
    filmMap,
    // this returns the homeworld, used in Planets.jsx and Species.jsx
    async getHomeworld(url) {
      const homeworld = await axios.get(url);
      return homeworld.data.name;
    },
  };

  return (
    <dataServiceContext.Provider value={dataService}>
      {canFunction ? children : <CannotFunction />}
    </dataServiceContext.Provider>
  );
}

export default GetData;
