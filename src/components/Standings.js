import ContentNav from "./ContentNav";
import StandingsTable from "./StandingsTable";

import "../css/standings.css";

import { useState } from "react";

function Standings() {
  return (
    <div className="standings-container">
      <StandingsTable
        header={"Eastern Conference"}
        standings={east_standings}
      />
      <StandingsTable
        header={"Western Conference"}
        standings={west_standings}
      />
    </div>
  );
}

export default Standings;

const east_standings = [
  "Boston Celtics",
  "Milwaukee Bucks",
  "Cleveland Cavaliers",
  "Philadelphia 76ers",
  "Atlanta Hawks",
  "New York Knicks",
  "Indiana Pacers",
  "Miami Heat",
  "Brooklyn Nets",
  "Orlando Magic",
  "Chicago Bulls",
  "Detroit Pistons",
  "Toronto Raptors",
  "Washington Wizards",
  "Charlotte Hornets",
];

const west_standings = [
  "Denver Nuggets",
  "Phoenix Suns",
  "Golden State Warriors",
  "Los Angeles Lakers",
  "Sacramento Kings",
  "Memphis Grizzlies",
  "Los Angeles Clippers",
  "Oklahoma City Thunder",
  "Minnesota Timberwolves",
  "New Orleans Pelicans",
  "Dallas Mavericks",
  "Portland Trail Blazers",
  "Houston Rockets",
  "San Antonio Spurs",
  "Utah Jazz",
];
