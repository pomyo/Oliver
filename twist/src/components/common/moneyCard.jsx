import React from "react";
import { Col } from "reactstrap";

// const upOrDown = (indicator) => {
    // if(indicator > 1) 
// }

const MoneyCard = props => (
    <Col>
      <div className='moneyCard' onClick={props.setActive} name={props.title.toLowerCase()}>
        <h1 className="moneyCard-title" name={props.title.toLowerCase()}>{props.title}</h1>
        <h5 className="moneyCard-amount" name={props.title.toLowerCase()}>{props.amount}</h5>
      </div>
    </Col>
);

export default MoneyCard;
