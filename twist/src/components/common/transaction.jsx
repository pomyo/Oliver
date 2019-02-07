import React from "react";
import { Row, Col } from 'reactstrap';

const TransactionComponent = props => (
    <Row>
        <Col>
        <div className="border transaction-row">
            <div className="trans-description">{props.description}</div>
            <div className="trans-amount">{"$" + props.amount.toFixed(2)}</div>
            <div className="trans-date">{props.date}</div>
            <div></div>
        </div>
        </Col>
    </Row>
);


export default TransactionComponent;