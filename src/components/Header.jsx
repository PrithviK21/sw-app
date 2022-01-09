import menuIcon from "../assets/menu.png";
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
      <div className={`nav-links  ${toggled ? "visible" : ""}`}>
        <ul>
          <a href="">
            <li>People</li>
          </a>
          <a href="">
            <li>Planets</li>
          </a>
          <a href="">
            <li>Starships</li>
          </a>
          <a href="">
            <li>Films</li>
          </a>
        </ul>
      </div>
    </header>
  );
}

export default Header;
