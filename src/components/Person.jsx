import { useEffect, useState, useContext } from "react";
import "../styles/Entity.css";
// import { person1 as data } from "../TESTDATA.js"; //can use any Person schema data
import InfoBoxRow from "./InfoBoxRow";
import InfoBoxItem from "./InfoBoxItem";
function Person({ currentIndex, apidata }) {
  // console.log(apidata);
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
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png"
            alt="Person goes here"
          />
          <h1 className="entity-name">{data.name}</h1>
        </div>
      </div>
      <div className="entity-info">
        <InfoBoxRow>
          <InfoBoxItem name="Height" value={data.height + "cm"} />
          <InfoBoxItem name="Hair color" value={data.hair_color} />
          <InfoBoxItem name="Eye color" value={data.eye_color} />
        </InfoBoxRow>
        <InfoBoxRow>
          <InfoBoxItem name="Gender" value={data.gender} />
          <InfoBoxItem name="Birth Year" value={data.birth_year} />
        </InfoBoxRow>
        <InfoBoxRow>
          <InfoBoxItem name="Homeworld" value={data.homeworld} />
        </InfoBoxRow>
        <InfoBoxRow>
          <InfoBoxItem name="Films" value={data.films} />
        </InfoBoxRow>
      </div>
    </div>
  ) : null;
}

export default Person;
