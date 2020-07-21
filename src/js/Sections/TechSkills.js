import { render } from "react-dom";
import React, { Component } from "react";

import PageTemplate from "../PageTemplate";

const title = "Technical Skills";

class BackgroundSection extends Component {
  render() {
    return (
      <PageTemplate sectionIndex={this.props.sectionIndex}>
        <section>
          <h1 calssName="title">{title}</h1>
          <h3>{"Programming Languages:"}</h3>
          <ul>
            <li className="listItem">
              {
                "Python: Did projects at work and during my studies. Great community and ecosystem."
              }
            </li>
            <li className="listItem">
              {
                "Java: Did projects at work and during my studies. Superb standard library!"
              }
            </li>
            <li className="listItem">
              {
                "C/C++: Did a lot of projects during my studies. Lightning fast performance."
              }
            </li>
            <li className="listItem">
              {
                "JavaScript: Some projects at work, very fond of Node.js and React.js!"
              }
            </li>
          </ul>
          <h3>{"Libraries and Frameworks:"}</h3>
          <ul>
            <li className="listItem">{"Python: Django, NumPy, "}</li>
            <li className="listItem">{"Java: "}</li>
            <li className="listItem">{"C/C++: "}</li>
            <li className="listItem">{"JavaScript: "}</li>
          </ul>
        </section>
      </PageTemplate>
    );
  }
}

export default BackgroundSection;
