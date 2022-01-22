import { useEffect, useState, useContext } from "react";
import "../styles/Entity.css";
// import { person1 as data } from "../TESTDATA.js"; //can use any Person schema data
import { IoMdOpen } from "react-icons/io";
import InfoBoxRow from "./InfoBoxRow";
import InfoBoxItem from "./InfoBoxItem";
import { dataServiceContext } from "../services/GetData";

function Person({ currentIndex, apidata, onNameClick }) {
  // console.log(apidata);
  // data holds the current page's data
  const [data, setData] = useState(undefined);
  // homeworld holds the current entity's homeworld, fetched from the api link
  const [homeWorld, setHomeWorld] = useState("");
  // pulling in the dataservice from context to access API and film map
  const dataService = useContext(dataServiceContext);
  const filmMap = dataService.filmMap;
  // helper function, can be replaced with arrow func in [data] callback
  const updateHomeworld = () => {
    data &&
      dataService
        .getHomeworld(data.homeworld)
        .then((result) => setHomeWorld(result));
  };
  // updates the homeworld whenever the data changes
  useEffect(() => updateHomeworld(), [data]);
  useEffect(() => {
    setData(apidata[0]);
  }, [apidata]);
  useEffect(() => {
    setData(apidata ? apidata[currentIndex] : null);
  }, [currentIndex]);

  return data ? (
    <div className="entity-cont">
      <div className="entity-img">
        <div>
          <h1 className="entity-name" onClick={() => onNameClick(data.name)}>
            {data.name}{" "}
            <div className="tooltip">
              Click to search on wookieepedia
              <IoMdOpen />
            </div>
          </h1>
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
          <InfoBoxItem name="Homeworld" value={homeWorld} />
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

export default Person;
