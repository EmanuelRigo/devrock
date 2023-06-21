import { Component } from "react";
import SearchBar from "./component/search-bar";
import SearchResult from "./search-result";

class PageSearchResult extends Component {
  state = {};

  handleChange = (e) => {
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
        <SearchResult busqueda={this.state.busqueda} />
      </>
    );
  }
}

export default PageSearchResult;
