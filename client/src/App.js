import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoMatch from "./pages/NoMatch";
import MainSearch from "./pages/MainSearch";
// import Search from "./pages/Search";
// import movieAPI from "./utils/movieAPI";
// import DisplayResults from "./components/DisplayResults";
// import Results from "./components/Results";
import InfoPage from "./components/InfoPage";
// import MovieInfo from "./components/MovieInfo";
import API from "./utils/API";
import Profile from "./pages/Profile";

class App extends Component {
  state = {
    user: null,
    search: ""
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    API.getUser()
      .then(res => {
        console.log("res:", res);
        this.setState({
          user: res.data
        });
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   const search = this.state.search;
  //   console.log(search);
  //   movieAPI.searchFor(search)
  //     .then(res => {
  //       this.setState({
  //         results: res.data
  //       })
  //       // console.log(this.state.results);
  //     })
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <div>
        <Router>
          <div className="container">
            <Header
              search={this.state.search}
              handleInputChange={this.handleInputChange}
              handleSubmit={this.handleSubmit}
              user={this.state.user} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/search/:search" component={MainSearch} />
              <Route exact path="/search/movie/:id" component={InfoPage} />
              <Route exact path="/search/tv/:id" component={InfoPage} />
              <Route exact path="/profile" component={Profile} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}

export default App;
