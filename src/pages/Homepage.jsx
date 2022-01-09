import React from "react";
import "../styles/Homepage.css";
function Homepage() {
  return (
    <div className="homepage-cont">
      <div className="hero">
        <div className="scrawl">
          <p className="sw-text">Star Wars</p>
          <p>using ReactJS and SWAPI</p>
          <p>By Prithvi K</p>
        </div>
        <div className="landing-text">
          <h1>
            Welcome to the <span className="sw-text">Cantina</span>
          </h1>
          <p>Use this as a resource to learn more about Star Wars</p>
        </div>
      </div>
      <div className="categories">
        <div className="col" xs={24} sm={12} md={8}>
          People
        </div>
        <div className="col" xs={24} sm={12} md={8}>
          Planets
        </div>
        <div className="col" xs={24} sm={12} md={8}>
          Films
        </div>
        <div className="col" xs={24} sm={12} md={8}>
          Species
        </div>
        <div className="col" xs={24} sm={12} md={8}>
          Vehicles
        </div>
        <div className="col" xs={24} sm={12} md={8}>
          Starships
        </div>
      </div>
    </div>
  );
}

export default Homepage;
