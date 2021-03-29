import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AllArtists extends React.Component {
  render() {
    const { allArtists } = this.props;
    return (
      <div className="view">
        <div className="hero">
          <h2>Artists</h2>
          <form className="search">
            <input type="text" placeholder="Search For Artists" />
          </form>
        </div>
        <div className="content">
          {allArtists.length ? (
            <div className="artists">
              {allArtists.map((artist) => {
                return (
                  <Link
                    to={`/artists/${artist.id}`}
                    key={artist.id}
                    className="artist-box"
                  >
                    <img src={artist.artistImage} />
                    <p>{artist.name}</p>
                  </Link>
                );
              })}
            </div>
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allArtists: state.artistData.allArtists,
});

export default connect(mapStateToProps)(AllArtists);
