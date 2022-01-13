import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Entity.css";
import { vehicle1 as data } from "../TESTDATA.js"; //can use any Person schema data
import InfoBoxRow from "../components/InfoBoxRow";
import InfoBoxItem from "../components/InfoBoxItem";
function Vehicle({ currentIndex, apidata }) {
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
          src="https://cdnb.artstation.com/p/assets/images/images/003/383/187/large/adrian-cornea-2016-04-15-jawa-sandcrawler-detailed.jpg?1473115737&dl=1"
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
          <InfoBoxItem name="Class" value={data.vehicle_class} />
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

export default Vehicle;
