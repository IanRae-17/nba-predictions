import ContentNav from "./ContentNav";
import WestStandings from "./WestStandings";
import EastStandings from "./EastStandings";

import "../css/standings.css";

import { useState } from "react";

function Standings() {
  const [standingsContent, setStandingsContent] = useState("EAST");

  function renderStandings() {
    if (standingsContent === "EAST") {
      return <EastStandings />;
    } else {
      return <WestStandings />;
    }
  }
  return (
    <div className="standings-container">
      <EastStandings />
      <WestStandings />
      {/* <ContentNav
        headers={["EAST", "WEST"]}
        activePage={standingsContent}
        setActivePage={setStandingsContent}
      />
      {renderStandings()} */}
    </div>
  );
}

export default Standings;
