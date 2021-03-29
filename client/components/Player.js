import React from "react";
import { connect } from "react-redux";

class Player extends React.Component {
  render() {
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
        {this.props.selectedSong.audioUrl && (
          <audio src={this.props.selectedSong.audioUrl}></audio>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedSong: state.songsData.selectedSong,
});

export default connect(mapStateToProps)(Player);
