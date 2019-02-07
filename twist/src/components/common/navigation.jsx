import React from "react";
import { Link } from 'react-router-dom';

const Nav = props => (
  <div className="navbar">
    <NavLeft />
    {/* <NavRight /> */}
  </div>
);

const NavLeft = props => (
  <div className="nav-left">
    <div className="logo">Oliver</div>
    <Link to="/home"><div>Home</div></Link>
    {/* <Link to="/view"><div>View</div></Link> */}
  </div>
);

const NavRight = props => (
  <div className="nav-right">
    <div>Login</div>
  </div>
);

export { Nav, NavLeft, NavRight };
