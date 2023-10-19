function WestStandings() {
  return (
    <div className="table-container">
      <h2>Western Conference</h2>
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

export default WestStandings;

const standings = [
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
