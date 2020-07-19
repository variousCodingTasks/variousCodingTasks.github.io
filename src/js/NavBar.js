import { render } from "react-dom";
import React, { Component } from "react";

import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navBar">
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
            <span className="cornerIcon">{"{{Ibrahim Biatra}}"}</span>
            <NavLink to="/" className="navBarItem">
              Background
            </NavLink>
            <NavLink to="/techSkills" className="navBarItem">
              Tech_Skills
            </NavLink>
            {/*<NavLink to="/" className="navBarItem">
              Education
            </NavLink>
            <NavLink to="/" className="navBarItem">
              Professional
            </NavLink>
            <NavLink to="/" className="navBarItem">
              Personal_Skills
            </NavLink>
            <NavLink to="/" className="navBarItem">
              Courses
          </NavLink>*/}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
