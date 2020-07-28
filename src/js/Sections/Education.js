import { render } from "react-dom";
import React, { Component } from "react";

import PageTemplate from "../PageTemplate";

const title = "Education";

class EducationSection extends Component {
  render() {
    return (
      <PageTemplate sectionIndex={this.props.sectionIndex}>
        <section>
          <h1 className="title">{title}</h1>
          <h3 className="secondaryTitle progListUL">{"Degrees"}</h3>
          <ul>
            <li className="listItem">
              {
                "M.Sc. Computer Science, OMSCS, Georgia Institute of Technology, 2022 (expected)"
              }
            </li>
            <li className="listItem">
              {"B.Sc. Computer Science, the Open University of Israel, 2019"}
            </li>
            <li className="listItem">
              {
                "M.B.A. Summa cum laude, Finance, Coller School of Management, Tel-Aviv University, 2015"
              }
            </li>
            <li className="listItem">
              {
                "B.A., Double Major in Economics and Management, Tel-Aviv University, 2010"
              }
            </li>
          </ul>
          <h3 className="secondaryTitle">{"Additional Courses"}</h3>
          <ul>
            <li className="listItem">
              {
                "The Open University of Israel: Introduction to Artificial Intelligence"
              }
            </li>
            <li className="listItem">
              {
                "Tel-Aviv University: Advanced Topics in Data Mining and Knowledge Discovery"
              }
            </li>
            <li className="listItem">
              <h4 className="listItem">{"Coursera:"}</h4>
              <ul>
                <li className="listItem">{"Programming for Everybody"}</li>
                <li className="listItem">{"Python Data Structures"}</li>
                <li className="listItem">{"Using Databases with Python"}</li>
                <li className="listItem">
                  {"Using Python to Access Web Data"}
                </li>
              </ul>
            </li>
            <li className="listItem">
              <h4 className="listItem">{"Udacity:"}</h4>
              <ul>
                <li className="listItem">{"Intro to Machine Learning"}</li>
                <li className="listItem">{"Data Wrangling with MongoDB"}</li>
                <li className="listItem">{"Intro to Java"}</li>
                <li className="listItem">{"Design of Computer Programs"}</li>
              </ul>
            </li>
          </ul>
        </section>
      </PageTemplate>
    );
  }
}

export default EducationSection;
