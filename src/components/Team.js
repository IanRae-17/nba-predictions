import SearchBar from "./SearchBar";

function Team({ header, players }) {
  return (
    <>
      <div className="award-main-header">
        <h1>{header}</h1>
      </div>
      <div className="team-container">
        {Object.entries(players).map(([name, image]) => (
          <div className="team-player">
            <img className="team-image" src={image} />
            <SearchBar />
          </div>
        ))}
      </div>
    </>
  );
}

export default Team;
