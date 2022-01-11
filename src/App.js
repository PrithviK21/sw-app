import "./App.css";
import Header from "./components/Header";
import Temp from "./components/Temp";
import Homepage from "./pages/Homepage";
import Person from "./components/Person";
import Planet from "./components/Planet";
import Film from "./components/Film";
import Vehicle from "./components/Vehicle";
import Starship from "./components/Starship";
import Species from "./components/Species";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Temp /> */}
        <Route path="/" element={<Homepage />} />
        <Route path="person" element={<Person />} />
        <Route path="planet" element={<Planet />} />
        <Route path="film" element={<Film />} />
        <Route path="vehicle" element={<Vehicle />} />
        <Route path="starship" element={<Starship />} />
        <Route path="species" element={<Species />} />
      </Routes>
    </div>
  );
}

export default App;
