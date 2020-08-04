import { render } from "react-dom";
import React, { Component } from "react";

import { withRouter } from "react-router";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { isMobile } from "react-device-detect";

import NavBar from "./NavBar";
import BottomNavBar from "./BottomNavBar";
import { ROUTES } from "./App";

var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;

class PageTemplate extends Component {
  constructor(props) {
    super(props);
    this.backgroundDivRef = React.createRef();

    this.nextSection = this.nextSection.bind(this);
    this.prevSection = this.prevSection.bind(this);
    this.handleWheel = this.handleWheel.bind(this);
    this.handleKeyPressed = this.handleKeyPressed.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
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

  handleKeyPressed(event) {
    if (event.which === 39) this.nextSection();
    else if (event.which === 37) this.prevSection();
  }

  handleTouchStart(event) {
    /*console.log("start", event.touches[0].clientX, event.touches[0].clientY);*/
    touchstartX = event.touches[0].clientX;
    touchstartY = event.touches[0].clientY;
  }

  handleTouchEnd(event) {
    /*console.log(
      "end",
      event.changedTouches[0].clientX,
      event.changedTouches[0].clientY
    );*/
    touchendX = event.changedTouches[0].clientX;
    touchendY = event.changedTouches[0].clientY;
    this.handleGesture();
  }

  handleGesture() {
    const threshold = 30;
    let dx = touchstartX - touchendX,
      dy = touchstartY - touchendY;
    if (Math.abs(dy) < threshold) {
      if (dx > threshold) this.nextSection();
      //console.log("swiped left");
      else if (dx < -threshold) this.prevSection(); //console.log("swiped right");
    }
  }

  handleMouseMove(e) {
    const windowWidth = window.innerWidth / 1.5;
    const windowHeight = window.innerHeight / 1.5;

    const mouseX = e.clientX / windowWidth;
    const mouseY = e.clientY / windowHeight;
    this.backgroundDivRef.current.style.transform = `translate(-${mouseX}%, -${mouseY}%)`;
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPressed, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPressed, false);
  }

  render() {
    const sectionIndex = this.props.sectionIndex;
    const items = React.Children.toArray(this.props.children);
    return (
      <div
        className="mainWindow"
        onWheel={(e) => this.handleWheel(e)}
        onTouchStart={(e) => this.handleTouchStart(e)}
        onTouchEnd={(e) => this.handleTouchEnd(e)}
        onMouseMove={isMobile ? () => false : (e) => this.handleMouseMove(e)}
      >
        <NavBar sectionIndex={sectionIndex} />
        {isMobile ? (
          <div className="swipeIcon">
            <span className={"glyphicon glyphicon-hand-up"}>{"swipe"}</span>
          </div>
        ) : (
          ""
        )}

        <div
          className="d-flex justify-content-center mainWindowContainer"
          id="mainWindowCon"
        >
          <div
            className={
              isMobile ? "sectionDiv sectionDivMobileMarginTop" : "sectionDiv"
            }
            id="secionDivComp"
          >
            <div className="centralDiv">
              {!isMobile ? (
                <div
                  className="glyphicon glyphicon-chevron-left arrowLeft"
                  onClick={this.prevSection}
                ></div>
              ) : (
                ""
              )}
              <div className="innerDiv customScrollbarDiv">
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
              {!isMobile ? (
                <div
                  className="glyphicon glyphicon-chevron-right arrowRight"
                  onClick={this.nextSection}
                ></div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <BottomNavBar />
        {isMobile ? (
          ""
        ) : (
          <div
            className="backgroundContainer"
            ref={this.backgroundDivRef}
          ></div>
        )}
      </div>
    );
  }
}

export default withRouter(PageTemplate);
