import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { IoMdOpen } from "react-icons/io";
import "../styles/Entity.css";
// import { planet1 as data } from "../TESTDATA.js"; //can use any Person schema data
import { dataServiceContext } from "../services/GetData";
import InfoBoxRow from "../components/InfoBoxRow";
import InfoBoxItem from "../components/InfoBoxItem";
function Planet({ currentIndex, apidata, onNameClick }) {
  const [data, setData] = useState(undefined);
  const filmMap = useContext(dataServiceContext).filmMap;
  useEffect(() => setData(apidata[0]), [apidata]);
  useEffect(() => {
    setData(apidata ? apidata[currentIndex] : null);
  }, [currentIndex]);
  return data ? (
    <div className="entity-cont">
      <div className="entity-img">
        <h1 className="entity-name" onClick={() => onNameClick(data.name)}>
          {data.name}
          <div className="tooltip">
            Click to search on wookieepedia
            <IoMdOpen />
          </div>
        </h1>
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
          <InfoBoxItem
            name="Films"
            value={data.films.map((item) => filmMap[item])}
          />
        </InfoBoxRow>
      </div>
    </div>
  ) : null;
}

export default Planet;
