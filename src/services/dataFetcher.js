const axios = require("axios");

const baseURL = "https://swapi.dev/api/";

async function fetchPlanet(id) {
  let response = await axios.get(baseURL);
  return response.data;
}

const b = fetchPlanet(1);
b.then((a) => console.log(a));

module.exports = fetchPlanet;
