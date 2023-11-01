import SearchBar from "./SearchBar";
import DefaultImage from "../assets/default_hs.avif";
import { connect } from "react-redux";

import { deletePlayer } from "../slices/predicitonSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

function Team({ header, award, prediction, deletePlayer, filter }) {
  function handleEdit(player, award, slot) {
    console.log(player, award, slot);
    deletePlayer({ award, slot });
    setMainValue(player.name);
  }

  const [mainValue, setMainValue] = useState("");

  return (
    <div className="team-title-container">
      <div className="award-main-header">
        <h1>{header}</h1>
      </div>
      <div className="team-container">
        {Array.from({ length: 5 }, (_, index) => (
          <div className="team-player" key={index}>
            <img
              className="team-image"
              src={
                prediction && !prediction[award][index]
                  ? DefaultImage
                  : `https://cdn.nba.com/headshots/nba/latest/1040x760/${prediction[award][index].player_id}.png`
              }
              alt="Player Image"
            />
            {prediction && !prediction[award][index] ? (
              <SearchBar
                award={award}
                slot={index}
                value={mainValue}
                filter={filter}
              />
            ) : (
              <div className="player-header">
                <h3>{prediction[award][index].name}</h3>
                <FontAwesomeIcon
                  className="player-header-icon"
                  icon={faPen}
                  onClick={() =>
                    handleEdit(prediction[award][index], award, index)
                  }
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { prediction: state.prediction };
};

const mapDispatchToProps = { deletePlayer };

export default connect(mapStateToProps, mapDispatchToProps)(Team);
