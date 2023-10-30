import "../css/search_bar.css";
import { useState, useRef, useEffect, useMemo } from "react";

import { setPlayer } from "../slices/predicitonSlice";

import { getPlayersByFilter } from "../utils/playerFilter";

import { connect } from "react-redux";

function SearchBar({ setPlayer, award, slot, value, players, filter }) {
  const [results, setResults] = useState(null);
  const [realValue, setRealValue] = useState(value);

  const filteredPlayers = useMemo(() => {
    return getPlayersByFilter(players, filter);
  }, [players]);

  useEffect(() => {
    if (value && value !== "") {
      if (!realValue.trim()) return setResults(null);

      const filteredValue = filteredPlayers.filter((player) =>
        player.name.toLowerCase().includes(realValue.toLowerCase())
      );

      setResults(filteredValue);
    }
  }, [value]);

  function handleChange(e) {
    let value = e.target.value;

    setRealValue(value);
    if (!value.trim()) return setResults(null);

    const filteredValue = filteredPlayers.filter((player) =>
      player.name.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filteredValue);
  }

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={realValue}
        className="player-input"
        placeholder="Make Your Choice..."
        onChange={handleChange}
      />
      {results && (
        <div className="live-results">
          {results.map((result, index) => (
            <div
              className="live-results-text"
              onClick={() => setPlayer({ award, slot, result })}
              key={index}
            >
              {result.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    prediction: state.prediction,
    players: state.player,
  };
};

const mapDispatchToProps = {
  setPlayer,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
