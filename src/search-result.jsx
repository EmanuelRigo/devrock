import React, { Component } from "react";
import ArtistCard from "./component/artist-card";

class SearchResult extends Component {
  state = {
    artist: [
      {
        name: "Allie X",
        match: "1",
        url: "https://www.last.fm/music/Allie+X",
        image: "./images/AllieX.jpg",
      },
      {
        name: "Lorde",
        mbid: "8e494408-8620-4c6a-82c2-c2ca4a1e4f12",
        match: "0.827789",
        url: "https://www.last.fm/music/Lorde",
        image: "./images/lorde.jpg",
      },
      {
        name: "Billie Eilish",
        match: "0.811899",
        url: "https://www.last.fm/music/Billie+Eilish",
        image: "./images/billieeilish.jpg",
      },
      {
        name: "Marina",
        mbid: "fe8ad4d4-391b-4f43-b62f-4d2ed8ab2b5e",
        match: "0.648183",
        url: "https://www.last.fm/music/Marina",
        image:
          "https://lastfm-img2.akamaized.net/i/u/174s/1b8e4148e3b351df942b9d83f55f6f72.png",
      },
      {
        name: "BROODS",
        mbid: "68205c81-9518-4b49-8df7-bd297da67599",
        match: "0.573807",
        url: "https://www.last.fm/music/BROODS",
        image:
          "https://lastfm-img2.akamaized.net/i/u/174s/41eaab105c765d54af66001b084bbe71.png",
      },
      {
        name: "Declan Mckenna",
        match: "0.525606",
        url: "https://www.last.fm/music/Declan+Mckenna",
        image:
          "https://lastfm-img2.akamaized.net/i/u/174s48f29ff0e05f470a2865ba82dacffdfcc.png",
      },
      {
        name: "Susanne Sundfør",
        mbid: "f3f9e76a-0685-4a9a-97d1-6fa2b50f9fba",
        match: "0.463562",
        url: "https://www.last.fm/music/Susanne+Sundf%C3%B8r",
        image:
          "https://lastfm-img2.akamaized.net/i/u/174s/13aleea42dfde1e4382097daf5197432.png",
      },
      {
        name: "iamamiwhoami",
        mbid: "9aaa99df-9383-47df-92af-8bb5e5595815",
        match: "0.457291",
        url: "https://www.last.fm/music/iamamiwhoami",
        image:
          "https://lastfm-img2.akamaized.net/i/u/174s/3c0acc3e6472e97ac787229a02132aa7.png",
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.artist.map((artista, i) => {
            return (
              <ArtistCard img={artista.image} titulo={artista.name} key={i} />
            );
          })}
        </div>
        <h1>{this.props.busqueda}</h1>
      </div>
    );
  }
}

export default SearchResult;
