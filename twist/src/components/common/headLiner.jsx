import React from "react";
import { Button } from './input';
import { Row, Col } from 'reactstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import View from '../pages/view';

const view = () => (
  <View />
);

const HeadLiner = props => (
  <div>
    <Row className="headline">
      <Col>
        <div className="big-pitch">{props.headline}</div>
        <div className="small-pitch">{props.slogan}</div>
        <Link to="/view"><Button btnClass="btn1" name="View Summary" /></Link>
      </Col>
    </Row>
  </div>
  );

export default HeadLiner;