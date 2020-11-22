import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Main from './atoms/pages/main';
import Second from './atoms/pages/second';
import Third from './atoms/pages/third';
import Last from './atoms/pages/last';
import Four from './atoms/pages/four';
import Five from './atoms/pages/five';
import {
  BrowserRouter as Router,
  Switch,
  Route,
}
from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
      <Route path="/sexto" component={Last}/>
        <Route path="/cuarto" component={Four} />
        <Route path="/tercero" component={Third} />
        <Route path="/Quinto" component={Five} />
        <Route path="/segundo" component={Second} />
        <Route exact path="/" component={Main} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);