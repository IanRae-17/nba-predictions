import ContentNav from "./components/ContentNav";
import Nav from "./components/Nav";
import Standings from "./components/Standings";
import "./css/App.css";

// React
import { useState } from "react";

function App() {
  const [awardContent, setAwardContent] = useState("MVP");
  const [allTeamContent, setAllTeamContent] = useState("ALL-NBA");

  return (
    <div className="main-container">
      <Nav />
      <main>
        <Standings />
        {/* 
        <ContentNav
          headers={["MVP", "DPOY", "ROTY", "SMOTY", "MIP", "COTY"]}
          activePage={awardContent}
          setActivePage={setAwardContent}
        />
        <ContentNav
          headers={["ALL-NBA", "ALL-ROOKIE", "ALL-DEF"]}
          activePage={allTeamContent}
          setActivePage={setAllTeamContent}
        /> */}
      </main>
    </div>
  );
}

export default App;
