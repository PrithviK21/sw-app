import "../styles/Entity.css";
// import { film1 as data } from "../TESTDATA.js"; //can use any Person schema data
import { useState, useEffect } from "react";
import InfoBoxRow from "../components/InfoBoxRow";
import InfoBoxItem from "../components/InfoBoxItem";
function Film({ currentIndex, apidata }) {
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
          src="https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
          alt="Person goes here"
        />
        <h1 className="entity-name">{data.title}</h1>
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
