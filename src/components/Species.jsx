import { IoMdOpen } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import "../styles/Entity.css";
import { species1 as data } from "../TESTDATA.js"; //can use any Person schema data
import { dataServiceContext } from "../services/GetData";
import InfoBoxRow from "../components/InfoBoxRow";
import InfoBoxItem from "../components/InfoBoxItem";
function Species({ currentIndex, apidata, onNameClick }) {
  const [data, setData] = useState(undefined);
  const [homeWorld, setHomeWorld] = useState("");
  const dataService = useContext(dataServiceContext);
  const filmMap = dataService.filmMap;
  const updateHomeworld = () => {
    data &&
      dataService
        .getHomeworld(data.homeworld)
        .then((result) => setHomeWorld(result))
        .catch(() => setHomeWorld(null));
  };
  useEffect(() => {
    updateHomeworld();
  }, [data]);
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
          <InfoBoxItem name="Homeworld" value={homeWorld} />
        </InfoBoxRow>
        <InfoBoxRow>
          <InfoBoxItem name="Skin Colors" value={data.skin_colors} />
          <InfoBoxItem name="Hair Colors" value={data.hair_colors} />
          <InfoBoxItem name="Eye Colors" value={data.eye_colors} />
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

export default Species;
