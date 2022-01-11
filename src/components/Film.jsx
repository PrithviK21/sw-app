import { Link } from "react-router-dom";
import "../styles/Person.css";
import { film1 as data } from "../TESTDATA.js"; //can use any Person schema data
import InfoBoxRow from "../components/InfoBoxRow";
import InfoBoxItem from "../components/InfoBoxItem";
function Film() {
  return (
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
  );
}

export default Film;
