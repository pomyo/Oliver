// component bundle for input components like 
// <input> <button> etc.

import React from 'react';

const InputBar = (props) => (
    <input 
        type={props.type}
    />
)

const Button = (props) => (
    <div className={props.btnClass + ' button-default'} onClick={props.handleClick}>{props.name}</div>
)

export { InputBar, Button }
