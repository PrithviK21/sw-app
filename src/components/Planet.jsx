import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Entity.css";
// import { planet1 as data } from "../TESTDATA.js"; //can use any Person schema data
import InfoBoxRow from "../components/InfoBoxRow";
import InfoBoxItem from "../components/InfoBoxItem";
function Planet({ currentIndex, apidata }) {
  const [data, setData] = useState(undefined);
  useEffect(() => setData(apidata[0]), [apidata]);
  useEffect(() => {
    // console.log(`current page ${currentIndex}`);
    // console.log(totalData);
    //console.log("Data " + data);
    setData(apidata ? apidata[currentIndex] : null);
  }, [currentIndex]);
  return data ? (
    <div className="entity-cont">
      <div className="entity-img">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
          alt="Person goes here"
        />
        <h1 className="entity-name">{data.name}</h1>
      </div>
      <div className="entity-info">
        <InfoBoxRow>
          <InfoBoxItem name="Climate" value={data.climate} />
          <InfoBoxItem name="Terrain" value={data.terrain} />
          <InfoBoxItem name="Gravity" value={data.gravity} />
        </InfoBoxRow>
        <InfoBoxRow>
          <InfoBoxItem name="Population" value={data.population} />
          <InfoBoxItem name="Diameter" value={data.diameter} />
        </InfoBoxRow>
        <InfoBoxRow>
          <InfoBoxItem name="Rotation Period" value={data.rotation_period} />
          <InfoBoxItem name="Orbital Period" value={data.orbital_period} />
        </InfoBoxRow>
        <InfoBoxRow>
          <InfoBoxItem name="Films" value={data.films} />
        </InfoBoxRow>
      </div>
    </div>
  ) : null;
}

export default Planet;
