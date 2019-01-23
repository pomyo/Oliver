import React from "react";
import { Nav, NavLeft, NavRight } from "../common/navigation";
import BigMoneyTag from '../common/bigMoney';
import { Container, Row, Col } from "reactstrap";
// import LineChart from "../common/lineChart.js";

class View extends React.Component {
  state = {
    
  };

  render() {
    return (
      <div>
        <Nav />
        <Container>
            Summary for January 2019
            <BigMoneyTag />    
        </Container>
      </div>
    );
  }
}

export default View;
