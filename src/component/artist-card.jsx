import React from "react";
import "./artist-card.css";

function ArtistCard(props) {
  console.log(props);
  return (
    <div className="col-3">
      <div className="item">
        <img src={props.img} className="img"></img>
        <h1 className="titulo">{props.titulo}</h1>
      </div>
    </div>
  );
}

export default ArtistCard;
