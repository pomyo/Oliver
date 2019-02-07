import React from "react";
import {  Row } from "reactstrap";
import Card from "../common/card";

const DisplayFeatures = props => (
  <Row className="display-features">
      <Card
        iconClass="far fa-money-bill-alt fa-2x"
        title="Keep More Of Your Money"
        description="Stop overpaying and get suggestions on where to trim costs."
      />

      <Card
        iconClass="fas fa-chart-line fa-2x"
        title="Create Saving Goals"
        description="Easily set a goal for that next big purchase or expense."
      />

      <Card
        iconClass="fas fa-laptop fa-2x"
        title="See Everything In One Place"
        description="No more switching between applications or banks."
      />
  </Row>
);

export default DisplayFeatures;
