import React, { Component } from "react";
import ArtistCard from "./component/artist-card";

class SearchResult extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <ArtistCard titulo="pear jam" img="./images/pearljam.jpeg" />
          <ArtistCard titulo="green day" img="./images/greenday.jpeg" />
        </div>
        <h1>{this.props.busqueda}</h1>
      </div>
    );
  }
}

export default SearchResult;
