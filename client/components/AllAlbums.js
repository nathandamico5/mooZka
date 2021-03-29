import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class AllAlbums extends React.Component {
  render() {
    const { albums } = this.props;
    return (
      <div className="view">
        <div className="hero">
          <h2>Albums</h2>
          <form className="search">
            <input type="text" placeholder="Search For Albums" />
          </form>
        </div>
        <div className="content">
          {albums.length ? (
            <div className="albums">
              {albums.map((album) => {
                return (
                  <Link
                    to={{
                      pathname: `/albums/${album.id}/${album.slug}`,
                      state: { album },
                    }}
                    key={album.id}
                    className="album-box"
                  >
                    <img src={album.artworkUrl} />
                    <p>{album.name}</p>
                    <small>{album.artist.name}</small>
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
  albums: state.albumData.allAlbums,
});

export default connect(mapStateToProps)(AllAlbums);
