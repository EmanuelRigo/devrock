import { Component } from "react";
import SearchBar from "./component/search-bar";
import "./page-artist.css";
import SimilarArtist from "./component/similar-artist";

class PageArtist extends Component {
  state = {};

  handleChange = (e) => {
    console.log(e, "soy el hanle dese");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <SearchBar
          onChange={this.handleChange}
          busqueda={this.state.busqueda}
        />
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <img
                src="./images/iamamiwhoami.jpg"
                className="pic-artist"
                alt=""
              />
              <h3>Cerati</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in
                rerum tempore aut suscipit pariatur consequuntur placeat modi
                libero natus, aliquid ut porro facilis ea! Alias voluptatum
                sequi distinctio exercitationem!
              </p>
            </div>
          </div>
          <SimilarArtist />
        </div>
      </>
    );
  }
}

export default PageArtist;
