import { render } from "react-dom";
import React, { Component } from "react";

import PageTemplate from "../PageTemplate";

const title = "Technical Skills";

class TechSkillsSection extends Component {
  render() {
    return (
      <PageTemplate sectionIndex={this.props.sectionIndex}>
        <section>
          <h1 className="title">{title}</h1>
          <h3 className="secondaryTitle">{"Programming Languages:"}</h3>
          <ul>
            <li className="listItemNoBullet sameLineListItem">
              <span className="fab fa-python"></span>
              {" Python"}
            </li>
            <li className="listItemNoBullet sameLineListItem">
              <span className="fab fa-java"></span>
              {" Java"}
            </li>
            <li className="listItemNoBullet sameLineListItem">{" C/C++"}</li>
            <li className="listItemNoBullet sameLineListItem">
              <span className="fab fa-js"></span>
              {" JavaScript"}
            </li>
            <li className="listItemNoBullet sameLineListItem">
              <span className="fab fa-html5"></span>
              {" HTML"}
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
                "Programming and Software Engineering Knowledge: data structures, algorithm design and analysis, oop, functinal programming,\
                concurrent programming, networking, IT and DevOps, Unix/Linux, GUI design"
              }
            </li>
          </ul>
          <h3 className="secondaryTitle">{"I know finance as well..."}</h3>
          <ul>
            <li className="listItem">
              {
                "complex asset valuation, financial modelling and analysis, financial data,\
                  computational finance, fintech, middle office and back office operations,\
                  risk modeling, and I know how to use the computer stuff in order to enhance the finance stuff..."
              }
            </li>
          </ul>
        </section>
      </PageTemplate>
    );
  }
}

export default TechSkillsSection;
