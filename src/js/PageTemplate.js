import { render } from "react-dom";
import React, { Component } from "react";

import { withRouter } from "react-router";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import NavBar from "./NavBar";
import BottomNavBar from "./BottomNavBar";
import { ROUTES } from "./App";

class PageTemplate extends Component {
  constructor(props) {
    super(props);

    this.nextSection = this.nextSection.bind(this);
    this.prevSection = this.prevSection.bind(this);
    this.handleWheel = this.handleWheel.bind(this);
  }

  nextSection() {
    this.props.history.push(
      ROUTES[(this.props.sectionIndex + 1) % ROUTES.length]["path"]
    );
  }

  prevSection() {
    this.props.history.push(
      ROUTES[
        this.props.sectionIndex === 0
          ? ROUTES.length - 1
          : this.props.sectionIndex - 1
      ]["path"]
    );
  }

  handleWheel(event) {
    console.log(event.target.id);
    if (
      event.target.id == "mainWindowCon" ||
      event.target.id == "secionDivComp"
    ) {
      if (event.nativeEvent.wheelDelta > 0) {
        this.prevSection();
      } else {
        this.nextSection();
      }
    }
  }

  render() {
    const sectionIndex = this.props.sectionIndex;
    const items = React.Children.toArray(this.props.children);
    return (
      <div className="mainWindow" onWheel={(e) => this.handleWheel(e)}>
        <NavBar sectionIndex={sectionIndex} />

        <div
          className="d-flex justify-content-center mainWindowContainer"
          id="mainWindowCon"
        >
          <div
            className="d-flex justify-content-center align-items-center sectionDiv"
            id="secionDivComp"
          >
            <div
              className="glyphicon glyphicon-chevron-left arrowLeft"
              onClick={this.prevSection}
            ></div>

            <PerfectScrollbar className="scroller">
              <div className="innerDiv">
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
              </div>
            </PerfectScrollbar>

            <div
              className="glyphicon glyphicon-chevron-right arrowRight"
              onClick={this.nextSection}
            ></div>
          </div>
        </div>

        <BottomNavBar />
      </div>
    );
  }
}

export default withRouter(PageTemplate);
