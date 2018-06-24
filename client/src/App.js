import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} /> */}
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}

export default App;
