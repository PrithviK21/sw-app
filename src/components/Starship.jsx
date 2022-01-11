import { Link } from "react-router-dom";
import "../styles/Person.css";
import { ship1 as data } from "../TESTDATA.js"; //can use any Person schema data
import InfoBoxRow from "../components/InfoBoxRow";
import InfoBoxItem from "../components/InfoBoxItem";
function Starship() {
  return (
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
          <InfoBoxItem name="Class" value={data.starship_class} />
        </InfoBoxRow>
        <InfoBoxRow>
          <InfoBoxItem name="Cargo Capacity" value={data.cargo_capacity} />
          <InfoBoxItem name="Passengers" value={data.passengers} />
        </InfoBoxRow>
        <InfoBoxRow>
          <InfoBoxItem name="Films" value={data.films} />
        </InfoBoxRow>
      </div>
    </div>
  );
}

export default Starship;
