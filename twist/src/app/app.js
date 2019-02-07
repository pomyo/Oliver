import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./app.css";
// import Login from '../components/features/login.jsx';
import { Nav } from "../components/common/navigation.jsx";
import Home from "../components/pages/home";
import View from "../components/pages/view";
import "bootstrap/dist/css/bootstrap.min.css";

const view = () => (
  <View />
);

const home = () => (
  <Home />
);


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          {/* <Home /> */}
          {/* <View /> */}
          <Route exact path="/view" component={view} />
          <Route exact path="/home" component={home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
