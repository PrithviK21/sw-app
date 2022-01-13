import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Entity.css";
import { ship1 as data } from "../TESTDATA.js"; //can use any Person schema data
import InfoBoxRow from "../components/InfoBoxRow";
import InfoBoxItem from "../components/InfoBoxItem";
function Starship({ currentIndex, apidata }) {
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
          src="https://64.media.tumblr.com/cdd22d181a0ec1c9a0788bb44e38c5fe/tumblr_ohcuovgfma1ujrjg9o1_1280.jpg"
          alt="Person goes here"
        />
        <h1 className="entity-name">{data.name}</h1>
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
          <InfoBoxItem name="Films" value={data.films} />
        </InfoBoxRow>
      </div>
    </div>
  ) : null;
}

export default Starship;
