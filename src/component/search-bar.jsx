import React from "react";
import "./search-bar.css";

class SearchBar extends React.Component {
  state = {
    busqueda: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.name, "me apretaron");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name);
  };
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-2">
            log
            <img src="" alt="" />
          </div>
          <div className="col-md-4">
            <form
              name="form"
              className="form-inline"
              onSubmit={this.handleSubmit}
            >
              <div className="busqueda">
                <input
                  name="busqueda"
                  type="text"
                  id="buscar"
                  value={this.props.busqueda}
                  placeholder="banda"
                  onChange={this.props.onChange}
                />
              </div>
            </form>
          </div>
        </div>
        <hr />
      </>
    );
  }
}

export default SearchBar;
