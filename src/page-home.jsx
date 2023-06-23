import React from "react";
import "./page-home.css";
class PageHome extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <div className="logo">
              <h1>LOGO</h1>
            </div>
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
              <div className="actions">
                <button className="btng">Search Similar Artist</button>
                <button className="btng">Let'sRock</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHome;
