import "./App.css";
import Header from "./components/Header";
import Temp from "./components/Temp";
import Homepage from "./pages/Homepage";
import Entity from "./pages/Entity";
import { Routes, Route } from "react-router-dom";
import E404 from "./pages/E404";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Temp /> */}
        {/* <Route path="temp" element={<Temp />} /> */}
        <Route path="/" element={<Homepage />} />
        <Route path="person" element={<Entity page="people" />} />
        <Route path="planet" element={<Entity page="planets" />} />
        <Route path="film" element={<Entity page="films" />} />
        <Route path="vehicle" element={<Entity page="vehicles" />} />
        <Route path="starship" element={<Entity page="starships" />} />
        <Route path="species" element={<Entity page="species" />} />
        <Route path="*" element={<E404 />} />
      </Routes>
    </div>
  );
}

export default App;
