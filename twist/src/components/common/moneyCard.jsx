import React from "react";
import { Col } from "reactstrap";

// const upOrDown = (indicator) => {
    // if(indicator > 1) 
// }

const MoneyCard = props => (
    <Col>
      <div className='moneyCard' onClick={props.onClick}>
        <h1 className="moneyCard-title">{props.title}</h1>
        <h5 className="moneyCard-amount">{props.amount}</h5>
        </div>
    </Col>
);

export default MoneyCard;
