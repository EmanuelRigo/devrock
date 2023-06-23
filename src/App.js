import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import PageSearchResult from './page-search-result';
import PageHome from './page-home';
import PageArtist from './page-artist';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/busqueda" component={PageSearchResult} />
        <Route exact path="/art" component={PageArtist} />
        <Route path="/" component={PageHome} />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
