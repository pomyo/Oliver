import React from "react";
import { Button } from './input';
import { Row, Col } from 'reactstrap';

const HeadLiner = props => (
    <Row className="headline">
      <Col>
        <div className="big-pitch">{props.headline}</div>
        <div className="small-pitch">{props.slogan}</div>
        <Button btnClass="btn1" name="Learn More" />
        {/* <Button btnClass="btn1" name="Login" /> */}
      </Col>
    </Row>
  );

export default HeadLiner;