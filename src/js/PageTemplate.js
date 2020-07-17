import { render } from "react-dom";
import React, { Component } from "react";

import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import NavBar from "./NavBar";
import BottomNavBar from "./BottomNavBar";
import { ROUTES } from "./App";

class PageTemplate extends Component {
  render() {
    const sectionIndex = this.props.sectionIndex;
    return (
      <div className="mainWindow">
        <NavBar />
        <div className="mainWindowContainer">
          <div className="sectionDiv">
            <Link
              to={
                ROUTES[
                  sectionIndex === 0 ? ROUTES.length - 1 : sectionIndex - 1
                ]["path"]
              }
            >
              <div className="glyphicon glyphicon-chevron-left arrowLeft"></div>
            </Link>

            <div className="innerDiv">{this.props.children}</div>

            <Link to={ROUTES[(sectionIndex + 1) % ROUTES.length]["path"]}>
              <div className="glyphicon glyphicon-chevron-right arrowRight"></div>
            </Link>
          </div>
        </div>
        <BottomNavBar />
      </div>
    );
  }
}

export default PageTemplate;
