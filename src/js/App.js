import { render } from "react-dom";
import React, { Component } from "react";

import { BrowserRouter, HashRouter, Route } from "react-router-dom";

import BackgroundSection from "./Sections/Background";
import ProfesionalSection from "./Sections/Professional";
import EducationSection from "./Sections/Education";
import TechSkillsSection from "./Sections/TechSkills";
import PersonalSkillsSection from "./Sections/PersonalSkills";

export const ROUTES = [
  { path: "/", name: "Intro", Component: BackgroundSection },
  {
    path: "/professional",
    name: "Professional",
    Component: ProfesionalSection,
  },
  { path: "/education", name: "Education", Component: EducationSection },
  { path: "/techSkills", name: "Technical", Component: TechSkillsSection },
  {
    path: "/personalSkills",
    name: "Personal",
    Component: PersonalSkillsSection,
  },
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
            render={(props) => <Component sectionIndex={index} />}
          />
        ))}
      </HashRouter>
    );
  }
}

export default MainApp;
