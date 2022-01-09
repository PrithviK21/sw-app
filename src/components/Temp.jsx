import axios from "axios";
import { useState, useEffect } from "react";
const baseURL = "https://swapi.dev/api/planets/1";

function Temp() {
  const [planet, setPlanet] = useState({});
  useEffect(() => {
    async function fetchPlanet() {
      let response = await axios.get(baseURL);
      setPlanet(response.data);
    }
    fetchPlanet();
  }, []);

  return (
    <div className="info">
      <p>{"Name: " + planet.name}</p>
      <p>{"Diameter: " + planet.diameter}</p>
      <p>{"Climate: " + planet.climate}</p>
      <div>
        {planet.films &&
          planet.films.map((film) => (
            <a href={film} target="_blank">
              {film}
            </a>
          ))}
      </div>
    </div>
  );
}

export default Temp;
