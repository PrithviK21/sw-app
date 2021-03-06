import { useState, useEffect, useContext } from "react";
import "../styles/Entity.css";
// import { ship1 as data } from "../TESTDATA.js"; //can use any Person schema data
import { dataServiceContext } from "../services/GetData";
import InfoBoxRow from "../components/InfoBoxRow";
import Tooltip from "./Tooltip";
import InfoBoxItem from "../components/InfoBoxItem";
function Starship({ currentIndex, apidata, onNameClick }) {
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
          <Tooltip />
        </h1>
      </div>
      <div className="entity-info">
        <InfoBoxRow>
          <InfoBoxItem name="Model" value={data.model} />
          <InfoBoxItem name="Manufacturer" value={data.manufacturer} />
        </InfoBoxRow>
        <InfoBoxRow>
          <InfoBoxItem name="Cost" value={data.cost_in_credits} />
          <InfoBoxItem name="Length" value={data.length} />
          <InfoBoxItem name="Crew" value={data.crew} />
        </InfoBoxRow>
        <InfoBoxRow>
          <InfoBoxItem name="Class" value={data.starship_class} />
          <InfoBoxItem name="Cargo Capacity" value={data.cargo_capacity} />
          <InfoBoxItem name="Capacity" value={data.passengers} />
        </InfoBoxRow>
        <InfoBoxRow>
          <InfoBoxItem
            name="Films"
            value={data.films.map((item) => filmMap[item.at(-2)])}
          />
        </InfoBoxRow>
      </div>
    </div>
  ) : null;
}

export default Starship;
