import SearchBar from "./SearchBar";
import DefaultImage from "../assets/default_hs.avif";
import { connect } from "react-redux";
function AwardContent({
  header,
  mainImage,
  playerName,
  honorableMentions,
  award,
  prediction,
}) {
  return (
    <>
      <div className="award-main-header">
        <h1>{header}</h1>
      </div>
      <div className="award-container">
        <div className="award-header">
          {prediction && !prediction[award]["choice"] ? (
            <SearchBar award={award} slot="choice" />
          ) : (
            <h3>{prediction[award]["choice"].name}</h3>
          )}
        </div>

        <div className="img-container">
          {" "}
          {console.log(prediction[award])}
          <img
            src={
              prediction && !prediction[award]["choice"]
                ? DefaultImage
                : `https://cdn.nba.com/headshots/nba/latest/1040x760/${prediction[award]["choice"].player_id}.png`
            }
            alt="Player Image"
          />
        </div>
      </div>
      <div className="award-container">
        <div className="award-header right">
          <h2>Honorable Mentions</h2>
        </div>
        <div className="hm-table">
          {honorableMentions &&
            Object.entries(honorableMentions).map(([key, value], index) => (
              <>
                <div className="hm-table-child">
                  <img
                    className="headshot"
                    src={
                      prediction && !prediction[award]["hm" + String(index + 1)]
                        ? DefaultImage
                        : `https://cdn.nba.com/headshots/nba/latest/1040x760/${
                            prediction[award]["hm" + String(index + 1)]
                              .player_id
                          }.png`
                    }
                    alt={key}
                  />
                </div>
                <div className="hm-table-child">
                  <div>
                    {prediction &&
                    !prediction[award]["hm" + String(index + 1)] ? (
                      <SearchBar
                        award={award}
                        slot={"hm" + String(index + 1)}
                      />
                    ) : (
                      <h3>
                        {prediction[award]["hm" + String(index + 1)].name}
                      </h3>
                    )}
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return { prediction: state.prediction };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AwardContent);
