import { render } from "react-dom";
import React, { Component } from "react";

import { Link } from "react-router-dom";

class BottomNavBar extends Component {
  render() {
    return (
      <div className="fixed-bottom bottomNavBar">
        <div
          className="bottomNavBarItem"
          onClick={() =>
            window.open("https://www.linkedin.com/in/ibrahim-biatra/", "_blank")
          }
        >
          <span className="fab fa-linkedin"></span>
        </div>
        <div
          className="bottomNavBarItem"
          onClick={() =>
            window.open("https://github.com/variousCodingTasks", "_blank")
          }
        >
          <span className="fab fa-github"></span>
        </div>
        <div
          className="bottomNavBarItem"
          onClick={() =>
            window.open(
              "https://github.com/variousCodingTasks/variousCodingTasks.github.io",
              "_blank"
            )
          }
        >
          {"site_repository"}
        </div>
      </div>
    );
  }
}

export default BottomNavBar;
