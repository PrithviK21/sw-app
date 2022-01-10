import "./App.css";
import Header from "./components/Header";
import Temp from "./components/Temp";
import Homepage from "./pages/Homepage";
import Person from "./pages/Person";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Temp /> */}
      <Homepage />
      {/* <Person /> */}
    </div>
  );
}

export default App;
