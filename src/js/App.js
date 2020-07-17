import { render } from "react-dom";
import React, { Component } from "react";

import { BrowserRouter, HashRouter, Route } from "react-router-dom";

import BackgroundSection from "./Sections/Background";
import TechSkillsSection from "./Sections/TechSkills";

export const ROUTES = [
  { path: "/", name: "Background", Component: BackgroundSection },
  { path: "/techSkills", name: "TechSkills", Component: TechSkillsSection },
];

class MainApp extends Component {
  render() {
    return (
      <HashRouter>
        {ROUTES.map(({ path, name, Component }, index) => (
          <Route
            key={path}
            exact
            path={path}
            render={() => <Component sectionIndex={index} />}
          ></Route>
        ))}
      </HashRouter>
    );
  }
}

export default MainApp;
