import { Link } from "react-router-dom";
import { IoMdOpen } from "react-icons/io";
import { useState, useEffect, useContext } from "react";
import "../styles/Entity.css";
import { vehicle1 as data } from "../TESTDATA.js"; //can use any Person schema data
import InfoBoxRow from "../components/InfoBoxRow";
import { dataServiceContext } from "../services/GetData";
import InfoBoxItem from "../components/InfoBoxItem";
function Vehicle({ currentIndex, apidata, onNameClick }) {
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
          <InfoBoxItem name="Model" value={data.model} />
          <InfoBoxItem name="Manufacturer" value={data.manufacturer} />
        </InfoBoxRow>
        <InfoBoxRow>
          <InfoBoxItem name="Cost" value={data.cost_in_credits} />
          <InfoBoxItem name="Length" value={data.length} />
          <InfoBoxItem name="Crew" value={data.crew} />
        </InfoBoxRow>
        <InfoBoxRow>
          <InfoBoxItem name="Class" value={data.vehicle_class} />
          <InfoBoxItem name="Cargo Capacity" value={data.cargo_capacity} />
          <InfoBoxItem name="Capacity" value={data.passengers} />
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

export default Vehicle;
