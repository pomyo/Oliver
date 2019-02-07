import React from "react";
import { Col } from 'reactstrap';

const Card = props => (
    <Col>
        <div className='card'>
            <div className='card-content'>
                <div className='card-icon'><i className={props.iconClass}></i></div>
                <div className='card-title'>{props.title}</div>
                <div className='card-description'>{props.description}</div>
            </div>
        </div>
    </Col>
);

export default Card;