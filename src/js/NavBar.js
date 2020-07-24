import { render } from "react-dom";
import React, { Component } from "react";

import { NavLink, Link } from "react-router-dom";

import { ROUTES } from "./App";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-xl navBar">
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="glyphicon glyphicon-align-justify burgerButton"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="nav navbar-nav">
            <span className="cornerIcon">{"{{Ibrahim_B}}"}</span>
            {ROUTES.map(({ path, name, Component }, index) => (
              <NavLink
                key={index}
                to={path}
                className={
                  index === this.props.sectionIndex
                    ? "selectedNavBarItem"
                    : "navBarItem"
                }
              >
                {name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
