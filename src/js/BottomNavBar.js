import { render } from "react-dom";
import React, { Component } from "react";

import { Link } from "react-router-dom";

class BottomNavBar extends Component {
  render() {
    return (
      <div className="bottomNavBar">
        <div
          className="bottomNavBarItem"
          onClick={() =>
            window.open("https://www.linkedin.com/in/ibrahim-biatra/", "_blank")
          }
        >
          {"linkedin"}
        </div>
        <div
          className="bottomNavBarItem"
          onClick={() =>
            window.open("https://github.com/variousCodingTasks", "_blank")
          }
        >
          {"github"}
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
