import menuIcon from "../assets/menu.png";
import "../styles/Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [toggled, setToggled] = useState(false);

  return (
    <header className="nav">
      <Link to="/">Cantina</Link>
      <img
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
