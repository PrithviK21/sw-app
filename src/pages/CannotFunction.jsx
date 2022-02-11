import { Link } from "react-router-dom";

// Just a copy of the hero page with different text
function CannotFunction() {
  return (
    <div>
      <div className="hero">
        <div className="scrawl">
          <p className="sw-text">So sorry!</p>
        </div>
        <div className="landing-text">
          <h1>
            <span className="sw-text"></span>
          </h1>
          <p className="cantfunc-text">
            {`This site makes use of SWAPI. There are two sources with the right schema, swapi.py4e.com and swapi.dev.

            Sadly neither of these are functioning at the moment (it happens). 
            
            Please try again later!
            Thank you,
            Prithvi K`}
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default CannotFunction;
