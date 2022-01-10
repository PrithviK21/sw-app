import { Link } from "react-router-dom";
import "../styles/Person.css";
import { data } from "../TESTDATA.js"; //can use any Person schema data

function Person() {
  return (
    <div className="person-cont">
      <div className="person-img">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png"
          alt="Person goes here"
        />
        <h1 className="person-name">{data.name}</h1>
      </div>
      <div className="person-info">
        <InfoBoxRow>
          <InfoBoxItem name="Height" value={data.height} />
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
  );
}

function InfoBoxRow({ children }) {
  return <div className="info-box">{children}</div>;
}

function InfoBoxItem({ name, value }) {
  return (
    <div className="info-box-item">
      {/* Checks if the passed value is a list, if so, renders a list box */}
      {Array.isArray(value) ? (
        <div className="info">
          {value.map((item) => (
            <>
              <a href={item}>{item}</a>
              <hr />
            </>
          ))}
        </div>
      ) : (
        <>
          <div className="info">{value}</div>
          <hr />
        </>
      )}
      <div className="info-name">{name}</div>
    </div>
  );
}

export default Person;
