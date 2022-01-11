import React from "react";
import "../styles/Homepage.css";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import saberimg from "../assets/lightsaber.png";
function Homepage() {
  return (
    <div className="homepage-cont">
      <Hero />
      <img className="saber-arrow" src={saberimg} />
      {/* <Categories /> */}
    </div>
  );
}

export default Homepage;
