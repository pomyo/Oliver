import React from "react";
// import { Button } from '../common/input.jsx';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import HeadLiner from '../common/headLiner.jsx';
import DisplayFeatures from '../features/displayFeatures.jsx';
import { Nav } from '../common/navigation.jsx';

class Home extends React.Component {
  state = {
    headline: "A smarter way to keep track of your money.",
    slogan:   "Know your income, expenses and set saving goals on the fly.",
    quotes: [
              "I’m a great believer in luck, and I find the harder I work the more I have of it. --Thomas Jefferson",
              "Don't tell me what you value, show me your budget, and I'll tell you what you value. --Joe Biden"
            ]
  };

  randomQuote () {
    let randomIndex = Math.floor(Math.random() * this.state.quotes.length);
    return this.state.quotes[randomIndex];
  }

  render () {
    return (
        <Container>
          <HeadLiner 
            headline={this.state.headline} 
            slogan={this.state.slogan}/>
          <DisplayFeatures />
        </Container>
    );
  }
}

export default Home;
