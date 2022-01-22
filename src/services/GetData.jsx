import { createContext, useContext } from "react";
import axios from "axios";

export const dataServiceContext = createContext(undefined);

const baseUrl = "https://swapi.py4e.com/api";
// provides a map for films. Hardcoded as there are only 7 films, saves on api calls.
const filmUrl = "https://swapi.py4e.com/api/films/";
const filmMap = {
  [filmUrl + "1/"]: "A New Hope",
  [filmUrl + "2/"]: "Empire Strikes Back",
  [filmUrl + "3/"]: "Return of the Jedi",
  [filmUrl + "4/"]: "The Phantom Menace",
  [filmUrl + "5/"]: "Attack of the Clones",
  [filmUrl + "6/"]: "Revenge of the Sith",
  [filmUrl + "7/"]: "The Force Awakens",
};
function GetData({ children }) {
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
      {children}
    </dataServiceContext.Provider>
  );
}

export default GetData;
