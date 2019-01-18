import React, { Component } from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import './app.css';
// import Login from '../components/features/login';
import Home from '../components/pages/home'

class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
