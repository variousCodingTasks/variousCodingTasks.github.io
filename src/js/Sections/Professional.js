import { render } from "react-dom";
import React, { Component } from "react";

import PageTemplate from "../PageTemplate";

const title = "Work Experience";

const traditionParagraph1 =
  "I am in charge of the electronic trading platform project, including the\
    design and testing of new features with the R&D team. My role involves finance\
    , IT and software. I also work with data and quantitative finance.\
    I operate the trading platform on a daily basis and manage the trading activity\
    and the backend side, I also provide technical support.";

const traditionParagraph2 =
  "Besides e-trading, I try to solve operatinal problems with code: whenever I face\
    a new problem, I learn the tools needed and implement the solution. I built\
    pricing tools, data processing and visualiztion tools and transaction processing\
    tools. I also like to automate any process I find to be boring and repetitive.\
    I use any technologies or tools I find suitable, but mainly Python, SQL, Excel\
    and VBA, Javasript and more.";

const softwareStartup =
  "I established and led a team of six members who were responsible for monitoring, operating and\
  installing the production servers. The team worked alongside the R&D team in order to test new\
  features. The role involved working with data and analyzing it in real time in order to detect\
  anomalies or irregularities.";

const project1 =
  "-Web application for trade documentation and pricing: \
   I used React.js and Django web framework, I also used DRF to create a RESTful\
   API for frontend-backend communication and MySQL for DB. I deployed\
   the application NGINX web server and uWSGI.";

const project2 =
  "-Desktop application for financial instruments pricing: \
   I used Python and Python Tkinter for GUI and logic development and the built-in SQLite for\
   data management. I connected the app to Bloomberg's API for external data feed.";

class ProfesionalSection extends Component {
  render() {
    return (
      <PageTemplate sectionIndex={this.props.sectionIndex}>
        <section>
          <h1 className="title">{title}</h1>
          <h3 className="secondaryTitle">
            {"TFS - Analyst and E-trading - 2011 until the present day:"}
          </h3>
          <p className="paragraph">{traditionParagraph1}</p>
          <p className="paragraph">{traditionParagraph2}</p>
          <h3 className="secondaryTitle">
            {"Software Startup - R&D DevOps Team Manager - 2010-2011:"}
          </h3>
          <p className="paragraph">{softwareStartup}</p>
          <h3 className="secondaryTitle">{"Most Recent Projects"}</h3>
          <p className="listItem">{project1}</p>
          <p className="listItem">{project2}</p>
        </section>
      </PageTemplate>
    );
  }
}

export default ProfesionalSection;
