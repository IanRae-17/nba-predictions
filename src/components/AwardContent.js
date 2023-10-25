import SearchBar from "./SearchBar";

function AwardContent({ header, mainImage, playerName, honorableMentions }) {
  return (
    <>
      <div className="award-main-header">
        <h1>{header}</h1>
      </div>
      <div className="award-container">
        <div className="award-header">
          <SearchBar />
        </div>

        <div className="img-container">
          <img src={mainImage} />
        </div>
      </div>
      <div className="award-container">
        <div className="award-header right">
          <h2>Honorable Mentions</h2>
        </div>
        <div className="hm-table">
          {honorableMentions &&
            Object.entries(honorableMentions).map(([key, value]) => (
              <>
                <div className="hm-table-child">
                  <img className="headshot" src={value} alt={key} />
                </div>
                <div className="hm-table-child">
                  <div>
                    <SearchBar />
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
}

export default AwardContent;
