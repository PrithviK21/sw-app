import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Entity.css";
import { species1 as data } from "../TESTDATA.js"; //can use any Person schema data
import InfoBoxRow from "../components/InfoBoxRow";
import InfoBoxItem from "../components/InfoBoxItem";
function Species({ currentIndex, apidata }) {
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
          src="https://upload.wikimedia.org/wikipedia/en/9/9d/Felicity_Jones_as_Jyn_Erso_%282016%29.jpg"
          alt="Person goes here"
        />
        <h1 className="entity-name">{data.name}</h1>
      </div>
      <div className="entity-info">
        <InfoBoxRow>
          <InfoBoxItem name="Type" value={data.classification} />
          <InfoBoxItem
            name="Avg. Height"
            value={
              data.average_height + (data.average_height === "n/a" ? "" : "cm")
            }
          />
          <InfoBoxItem
            name="Avg. Lifespan"
            value={data.average_lifespan + " Years"}
          />
        </InfoBoxRow>
        <InfoBoxRow>
          <InfoBoxItem name="Language" value={data.language} />
          <InfoBoxItem name="Homeworld" value={data.homeworld} />
        </InfoBoxRow>
        <InfoBoxRow>
          <InfoBoxItem name="Skin Colors" value={data.skin_colors} />
          <InfoBoxItem name="Hair Colors" value={data.hair_colors} />
          <InfoBoxItem name="Eye Colors" value={data.eye_colors} />
        </InfoBoxRow>
        <InfoBoxRow>
          <InfoBoxItem name="Films" value={data.films} />
        </InfoBoxRow>
      </div>
    </div>
  ) : null;
}

export default Species;
