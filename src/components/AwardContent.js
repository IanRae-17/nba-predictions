import SearchBar from "./SearchBar";
import DefaultImage from "../assets/default_hs.avif";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

import { deletePlayer } from "../slices/predicitonSlice";

function AwardContent({
  header,
  honorableMentions,
  award,
  prediction,
  deletePlayer,
  filter,
}) {
  function handleEdit(player, award, slot) {
    deletePlayer({ award, slot });
    setMainValue(player.name);
  }

  const [mainValue, setMainValue] = useState("");

  return (
    <>
      <div className="award-main-header">
        <h1>{header}</h1>
      </div>
      <div className="award-container">
        <div className="award-header">
          {prediction && !prediction[award]["choice"] ? (
            <SearchBar
              award={award}
              slot="choice"
              value={mainValue}
              filter={filter}
            />
          ) : (
            <div className="player-header">
              <h3>{prediction[award]["choice"].name}</h3>
              <FontAwesomeIcon
                className="player-header-icon"
                icon={faPen}
                onClick={() =>
                  handleEdit(prediction[award]["choice"], award, "choice")
                }
              />
            </div>
          )}
        </div>

        <div className="img-container">
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
          {Array.from({ length: 3 }, (_, index) => (
            <>
              <div className="hm-table-child" key={index}>
                <img
                  className="headshot"
                  src={
                    prediction && !prediction[award]["hm" + String(index + 1)]
                      ? DefaultImage
                      : `https://cdn.nba.com/headshots/nba/latest/1040x760/${
                          prediction[award]["hm" + String(index + 1)].player_id
                        }.png`
                  }
                  alt={"Player Image " + (index + 1)}
                  key={index}
                />
              </div>
              <div className="hm-table-child" key={"child" + index}>
                <div>
                  {prediction &&
                  !prediction[award]["hm" + String(index + 1)] ? (
                    <SearchBar
                      award={award}
                      slot={"hm" + String(index + 1)}
                      value={""}
                      filter={filter}
                    />
                  ) : (
                    <div className="player-header">
                      <h3>
                        {prediction[award]["hm" + String(index + 1)].name}
                      </h3>
                      <FontAwesomeIcon
                        className="player-header-icon"
                        icon={faPen}
                        onClick={() =>
                          handleEdit(
                            prediction[award]["hm" + String(index + 1)].name,
                            award,
                            "hm" + String(index + 1)
                          )
                        }
                      />
                    </div>
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

const mapDispatchToProps = { deletePlayer };

export default connect(mapStateToProps, mapDispatchToProps)(AwardContent);
