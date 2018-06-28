import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoMatch from "./pages/NoMatch";
import movieAPI from "./utils/movieAPI";
import DisplayResults from "./components/DisplayResults";
import Results from "./components/Results";


class App extends Component {
  state = {
    user: null,
    search: "",
    results: []
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const search = this.state.search;
    console.log(search);
    movieAPI.searchFor(search)
      .then(res => {
        this.setState({
          results: res.data
        })
        console.log(this.state.results);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Header
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit} />
        {this.state.results.length ? 
        (<DisplayResults>
          {this.state.results.map(title => (
            <Results
            showTitle={title.name}
            movieTitle={title.title}
            media={title.media_type}
            overview={title.overview} />
          ))}
          </DisplayResults>) :
          (<Router>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                {/* <Route exact path="/search" render={(props) => <DisplayResults results={this.state.results} />} /> */}
                <Route component={NoMatch} />
              </Switch>
            </div>
          </Router>)}
      </div>

    );
  }
}

export default App;
