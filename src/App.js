import Awards from "./components/Awards";
import Nav from "./components/Nav";
import Teams from "./components/Teams";
import Standings from "./components/Standings";
import "./css/App.css";

function App() {
  return (
    <div className="main-container">
      <Nav />
      <main>
        {/* <Standings /> */}
        <Awards />
        <Teams />
      </main>
    </div>
  );
}

export default App;
