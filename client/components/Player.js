import React from "react";

const Player = () => {
  return (
    <div id="player-container">
      <div id="player-controls">
        <div className="back">
          <img src="/back.png" />
        </div>
        <div className="play-pause">
          <img src="/play.png" />
        </div>
        <div className="next">
          <img src="/forward.png" />
        </div>
      </div>
    </div>
  );
};

export default Player;
