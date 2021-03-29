import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="side-bar">
      <h2>mooZka</h2>
      <div className="nav-items">
        <Link to="/artists" className="link">
          Artists
        </Link>
        <Link to="/albums" className="link">
          Albums
        </Link>
        <Link to="/songs" className="link">
          Songs
        </Link>
        {/* <Link to="/playlists" className="link">
          Playlists
        </Link> */}
      </div>
    </div>
  );
};

export default SideBar;
