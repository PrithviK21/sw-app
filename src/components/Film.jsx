import "../styles/Entity.css";
// import { film1 as data } from "../TESTDATA.js"; //can use any Person schema data
import { useState, useEffect } from "react";
import InfoBoxRow from "../components/InfoBoxRow";
import Tooltip from "./Tooltip";
import InfoBoxItem from "../components/InfoBoxItem";
function Film({ currentIndex, apidata, onNameClick }) {
  const [data, setData] = useState(undefined);
  useEffect(() => setData(apidata[0]), [apidata]);
  useEffect(() => {
    setData(apidata ? apidata[currentIndex] : null);
  }, [currentIndex]);
  return data ? (
    <div className="entity-cont">
      <div className="entity-img">
        <h1 className="entity-name" onClick={() => onNameClick(data.title)}>
          {data.title}
          <Tooltip />
        </h1>
      </div>
      <div className="entity-info">
        <InfoBoxRow>
          <InfoBoxItem name="Episode" value={data.episode_id} />
          <InfoBoxItem name="Release Date" value={data.release_date} />
        </InfoBoxRow>
        <InfoBoxRow>
          <InfoBoxItem name="Director" value={data.director} />
          <InfoBoxItem name="Producer" value={data.producer} />
        </InfoBoxRow>
        <InfoBoxRow>
          <InfoBoxItem name="Opening crawl" value={data.opening_crawl} />
        </InfoBoxRow>
      </div>
    </div>
  ) : null;
}

export default Film;
