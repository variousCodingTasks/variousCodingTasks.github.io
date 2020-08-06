import { render } from "react-dom";
import React, { Component } from "react";

import PageTemplate from "../PageTemplate";
import StarRating from "./StarRating";

const title = "Technical Skills";

class TechSkillsSection extends Component {
  render() {
    return (
      <PageTemplate sectionIndex={this.props.sectionIndex}>
        <section>
          <h1 className="title">{title}</h1>
          <h3 className="secondaryTitle">{"Programming Languages:"}</h3>
          <ul className="list-group progListUL">
            <li className="listItemNoBullet sameLineItems">
              <span className="fab fa-python"></span>
              <span className="progLSpaces">{"Python"}</span>
              <StarRating rating={5} />
            </li>
            <li className="listItemNoBullet sameLineItems">
              <span className="fab fa-java"></span>
              <span className="progLSpaces">{"Java"}</span>
              <StarRating rating={4} />
            </li>
            <li className="listItemNoBullet sameLineItems">
              <span className="cIcon">{"C"}</span>
              <span className="progLSpaces">{"C/C++"}</span>
              <StarRating rating={4} />
            </li>
            <li className="listItemNoBullet sameLineItems">
              <span className="fab fa-js"></span>
              <span className="progLSpaces">{"JavaScript"}</span>
              <StarRating rating={4} />
            </li>
            <li className="listItemNoBullet sameLineItems">
              <span className="fab fa-html5"></span>
              <span className="progLSpaces">{"HTML"}</span>
              <StarRating rating={4} />
            </li>
          </ul>
          <h3 className="secondaryTitle">{"Libraries and Frameworks:"}</h3>
          <ul>
            <li className="listItem">
              {
                "Python: Django, Django Rest Framework, NumPy, pandas, Jupyter, matplotlib, scikit-learn"
              }
            </li>
            <li className="listItem">
              {"JavaScript Ecosystem: Node.js, React.js, D3.js, npm, webpack"}
            </li>
            <li className="listItem">
              {
                "Data Stuff: SQL(MySQL, SQLite, MS-SQL), Excel and VBA, MongoDB, JSON, XML and more"
              }
            </li>
            <li className="listItem">
              {
                "Programming and Software Engineering Knowledge: data structures, algorithm design and analysis, oop, functinal and\
                 procedural programming, concurrent programming, GUI design"
              }
            </li>
            <li className="listItem">
              {
                "IT: networking, IT and DevOps, Unix/Linux, windows server administration, infrastructure and\
                hardware configuration."
              }
            </li>
          </ul>
          <h3 className="secondaryTitle">{"I know finance as well..."}</h3>
          <ul>
            <li className="listItem">
              {
                "complex asset valuation, financial modelling and analysis, financial data,\
                  computational finance, fintech, middle office and back office operations,\
                  risk modeling and management, and I know how to use the computer stuff in\
                  order to enhance the finance stuff..."
              }
            </li>
            <li className="listItem">
              {
                "I am very experienced with a wide range of financial assets classes: interest rate derivatives,\
                 FX derivatives (forwards, futures, NDFs and options), sovereign and corporate bonds and more."
              }
            </li>
          </ul>
        </section>
      </PageTemplate>
    );
  }
}

export default TechSkillsSection;
