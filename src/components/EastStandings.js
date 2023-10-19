function EastStandings() {
  return (
    <div className="table-container">
      <h2>Eastern Conference</h2>
      <div>
        <table>
          <tbody>
            {standings.map((standing) => (
              <tr>{standing}</tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EastStandings;

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
