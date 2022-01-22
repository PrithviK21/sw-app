import { Link } from "react-router-dom";

// Just a copy of the hero page with different text
function E404() {
  return (
    <div>
      <div className="hero">
        <div className="scrawl">
          <p className="sw-text">error 404</p>
        </div>
        <div className="landing-text">
          <h1>
            <span className="sw-text"></span>
          </h1>
          <p>
            The wrong URL is a pathway to many pages some consider to be
            unnatural
          </p>
          <br />
          <Link to="/">
            <span className="sw-text e404-btn">return (of the jedi)</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default E404;
