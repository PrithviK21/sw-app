import axios from "axios";
import { useState, useEffect, useContext, useRef } from "react";
import { dataServiceContext } from "../services/GetData";
const baseURL = "https://swapi.dev/api/planets/1";

function Temp() {
  const [planet, setPlanet] = useState({});
  const [data, setData] = useState(null);
  const planetService = useContext(dataServiceContext);
  // const planet = useRef({});
  // useEffect(() => {
  //   async function fetchPlanet() {
  //     let response = await axios.get(baseURL);
  //     setPlanet(response.data);
  //   }
  //   fetchPlanet();
  // }, []);

  useEffect(() => {
    if (planetService !== undefined) {
      planetService.getAPIData("films").then((result) => {
        setData(result);
        setPlanet(result[0]);
      });
    }
  }, [planetService]);
  console.log(planet);

  function handleChange(bruh) {
    if (bruh.target.value > data.length) {
      bruh.target.value = 0;
    }
    setPlanet(data[bruh.target.value]);
  }
  return (
    planet && (
      <div className="info">
        <input
          max={10}
          min={0}
          type="number"
          name="idek"
          id="idek"
          defaultValue={0}
          onChange={handleChange}
        />
        <p>{"Name: " + planet.title}</p>
        <p>{"Crawl: " + planet.opening_crawl}</p>
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
    )
  );
}

export default Temp;
