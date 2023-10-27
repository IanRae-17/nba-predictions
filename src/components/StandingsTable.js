import teamImages from "../assets/team_logos";

console.log(teamImages);

function StandingsTable({ header, standings }) {
  return (
    <div className="table-container">
      <div className="header">
        <h2>{header}</h2>
      </div>
      <div>
        <table>
          <tbody>
            {standings.map((standing, index) => (
              <tr key={index}>
                <td className="img-container">
                  <img src={teamImages[standing]} />
                </td>
                <td>{standing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StandingsTable;

const standings = [
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
