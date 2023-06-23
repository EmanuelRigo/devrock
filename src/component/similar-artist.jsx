import React from "react";
import ArtistCard from "./artist-card";

class SimilarArtist extends React.Component {
  render() {
    return (
      <>
        <div className="row centrar">
          <div className="col-md-12">
            <h4>Similar Artist</h4>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <ArtistCard img="./images/lorde.jpg" titulo="Cerati" />
          </div>
          <div className="col-md-3">
            {" "}
            <ArtistCard img="./images/lorde.jpg" titulo="Cerati" />
          </div>
          <div className="col-md-3">
            {" "}
            <ArtistCard img="./images/lorde.jpg" titulo="Cerati" />
          </div>
          <div className="col-md-3">
            <ArtistCard img="./images/lorde.jpg" titulo="Cerati" />
          </div>
        </div>
      </>
    );
  }
}

export default SimilarArtist;
