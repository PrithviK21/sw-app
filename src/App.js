import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Entity from "./pages/Entity";
import { Routes, Route, useLocation } from "react-router-dom";
import E404 from "./pages/E404";
import About from "./pages/About";
function App() {
  let location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/about" && <Header />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="person" element={<Entity page="people" />} />
        <Route path="planet" element={<Entity page="planets" />} />
        <Route path="film" element={<Entity page="films" />} />
        <Route path="vehicle" element={<Entity page="vehicles" />} />
        <Route path="starship" element={<Entity page="starships" />} />
        <Route path="species" element={<Entity page="species" />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<E404 />} />
      </Routes>
    </div>
  );
}

export default App;
