import "./App.css";
import Header from "./components/Header";
import Temp from "./components/Temp";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Temp /> */}
      <Homepage />
    </div>
  );
}

export default App;
