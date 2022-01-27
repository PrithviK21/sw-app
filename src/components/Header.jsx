import menuIcon from "../assets/menu.png";
import "../styles/Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
  const [toggled, setToggled] = useState(false);
  const [changedColor, setChangedColor] = useState(false);
  const toggleColors = () => {
    if (changedColor) {
      document.documentElement.style.setProperty("--yellow", "#ffd369");
      document.documentElement.style.setProperty("--alt-yellow", "#ffe919");
    } else {
      document.documentElement.style.setProperty("--yellow", "#ce0000");
      document.documentElement.style.setProperty("--alt-yellow", "#d03434");
    }
    try {
      document.querySelector(".saber-arrow").classList.toggle("red-arrow");
    } catch (e) {
      console.log("NOT ON HOMEPAGE");
    }
    setChangedColor(!changedColor);
  };
  return (
    <header className="nav">
      <button onClick={toggleColors}>
        {changedColor ? "Dark Side" : "Light Side"}
      </button>
      <Link to="/">Cantina</Link>
      <GiHamburgerMenu
        className="nav-toggle"
        src={menuIcon}
        onClick={() => setToggled(!toggled)}
      />
      <Dropdown toggled={toggled} onClick={() => setToggled(!toggled)}>
        <DropdownItem name="People" url="/person" />
        <DropdownItem name="Planets" url="/planet" />
        <DropdownItem name="Films" url="/film" />
        <DropdownItem name="Species" url="/species" />
        <DropdownItem name="Vehicles" url="/vehicle" />
        <DropdownItem name="Starships" url="/starship" />
        <DropdownItem name="About" url="/about" />
      </Dropdown>
    </header>
  );
}

function Dropdown({ toggled, children, onClick }) {
  return (
    <div onClick={onClick} className={`nav-links  ${toggled ? "visible" : ""}`}>
      <ul>{children}</ul>
    </div>
  );
}
//tabindex = -1 prevents tabbing onto the menu when its off screen. This would break the screen width
function DropdownItem({ name, url }) {
  return (
    <Link to={url}>
      <li>{name}</li>
    </Link>
  );
}

export default Header;
