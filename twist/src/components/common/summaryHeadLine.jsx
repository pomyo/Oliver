import React from "react";
import { Col } from "reactstrap";

const SummaryHeadLine = props => (
  <Col>
    <h1 className="sum-head-line">Summary for {props.monthYear}</h1>
  </Col>
);

export default SummaryHeadLine;