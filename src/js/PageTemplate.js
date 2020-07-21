import { render } from "react-dom";
import React, { Component } from "react";

import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import NavBar from "./NavBar";
import BottomNavBar from "./BottomNavBar";
import { ROUTES } from "./App";

class PageTemplate extends Component {
  render() {
    const sectionIndex = this.props.sectionIndex;
    const items = React.Children.toArray(this.props.children);
    return (
      <div className="mainWindow">
        <NavBar />
        <div className="d-flex justify-content-center mainWindowContainer">
          <div className="d-flex justify-content-center align-items-center sectionDiv">
            <Link
              to={
                ROUTES[
                  sectionIndex === 0 ? ROUTES.length - 1 : sectionIndex - 1
                ]["path"]
              }
            >
              <div className="glyphicon glyphicon-chevron-left arrowLeft"></div>
            </Link>

            <div className="innerDiv">
              <PerfectScrollbar className="scroller">
                <div className="conatiningDiv">
                  {items.map((item, index) => (
                    <CSSTransition
                      in
                      key={index}
                      classNames="fade"
                      appear={true}
                      timeout={1000}
                    >
                      {item}
                    </CSSTransition>
                  ))}
                </div>
              </PerfectScrollbar>
            </div>

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
