import React from "react";

const Nav = props => (
  <div className="navbar">
    <NavLeft />
    {/* <NavRight /> */}
  </div>
);

const NavLeft = props => (
  <div className="nav-left">
    <div className="logo">Oliver</div>
  </div>
);

const NavRight = props => (
  <div className="nav-right">
    <div>Login</div>
  </div>
);

export { Nav, NavLeft, NavRight };
