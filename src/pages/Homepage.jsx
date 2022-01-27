import React from "react";
import "../styles/Homepage.css";
// import Categories from "../components/Categories";
import Hero from "../components/Hero";
import saberimg from "../assets/lightsaber.png";
function Homepage() {
  let tempOpacity = (e) => {
    let temp = e.target.style.opacity;
    e.target.style.opacity = 1;
    setTimeout(() => (e.target.style.opacity = temp), 2000);
  };
  return (
    <div className="homepage-cont">
      <Hero />
      <img
        className="saber-arrow"
        src={saberimg}
        onClick={(e) => tempOpacity(e)}
        alt="Yellow lightsabre pointing to dropdown"
      />
      {/* <Categories /> */}
    </div>
  );
}

export default Homepage;
