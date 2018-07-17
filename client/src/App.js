import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoMatch from "./pages/NoMatch";
import MainSearch from "./pages/MainSearch";
import InfoPage from "./pages/InfoPage";
import API from "./utils/API";
import Profile from "./pages/Profile";
import FindFriends from "./pages/FindFriends";
// import Feed from "./pages/Feed";

// const activeUser = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     fetch("/auth/check", {
//       credentials: "include"
//     })
//     .thenthis.isAuthenticated = true;
//   },
//   logout(cb) {
//     this.isAuthenticated = false;
//   }
// }

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

  logoutUser = () => {
    API.logoutUser()
      .then(res => {
        this.setState({
          user: null
        });
        console.log("User logged out")
      });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };



  render() {
    return (
      <div>
        <Router>
          <div>
            {/* <div id="headerContainer"> */}
            <Header
              search={this.state.search}
              handleInputChange={this.handleInputChange}
              handleSubmit={this.handleSubmit}
              user={this.state.user}
              logout={this.logoutUser}
            />
            {/* </div> */}
            <div className="container" id="mainArea">
              <Switch>
                <Route exact path="/" render={props => <Home user={this.state.user} {...props} />} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/search/:search" component={MainSearch} />
                <Route exact path="/search/movie/:id" render={props => <InfoPage user={this.state.user} {...props} />} />
                <Route exact path="/search/tv/:id" render={props => <InfoPage user={this.state.user} {...props} />} />
                <Route exact path="/profile" render={props => <Profile user={this.state.user} {...props} />} />
                <Route exact path="/findfriends" render={props => <FindFriends user={this.state.user} {...props} />} />
                {/* <PrivateRoute exact path="/profile" component={Profile} />
                <PrivateRoute exact path="/findfriends" component={FindFriends} /> */}
                <Route component={NoMatch} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>

    );
  }
}

export default App;

// const checkAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       checkAuth.isAuthenticated ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: "/login",
//             state: { from: props.location }
//           }}
//         />
//       )
//     }
//   />
// );