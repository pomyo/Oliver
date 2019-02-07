import React from 'react';
import { InputBar, Button } from '../common/input';

const Login = () => (
    <div>
        Email Address
        <InputBar type={'text'} />
        Password:
        <InputBar type={'password'} />
        <Button name="Login" />
    </div>
);


export default Login;