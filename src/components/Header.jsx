import menuIcon from "../assets/menu.png";
import "../styles/Header.css";
import { useState } from "react";

function Header() {
  const [toggled, setToggled] = useState(false);

  return (
    <header className="nav">
      Cantina{" "}
      <img
        className="nav-toggle"
        src={menuIcon}
        onClick={() => setToggled(!toggled)}
      />
      <Dropdown toggled={toggled}>
        <DropdownItem name="People" url="/" />
        <DropdownItem name="Planets" url="/" />
        <DropdownItem name="Films" url="/" />
        <DropdownItem name="Species" url="/" />
        <DropdownItem name="Vehicles" url="/" />
        <DropdownItem name="Starships" url="/" />
      </Dropdown>
    </header>
  );
}

function Dropdown({ toggled, children }) {
  return (
    <div className={`nav-links  ${toggled ? "visible" : ""}`}>
      <ul>{children}</ul>
    </div>
  );
}
//tabindex = -1 prevents tabbing onto the menu when its off screen. This would break the screen width
function DropdownItem({ name, url }) {
  return (
    <a tabIndex={-1} href={url}>
      <li>{name}</li>
    </a>
  );
}

export default Header;
