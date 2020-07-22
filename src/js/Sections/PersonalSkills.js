import { render } from "react-dom";
import React, { Component } from "react";

import PageTemplate from "../PageTemplate";

const title = "Personal Skills";

const paragraph1 =
  "I have well developed problem solving skills, business acumen, anlytical thinking and quantitative skills.\
  I am an autodidact and a quick learner, I pay great attention to details and I focs on the whole picture. \
  I worked in teams and led teams, I like to learn from colleagues, and when possible, I like to teach others\
  from my experience. I can work under pressure and uncertainty. My knowledge and experience are multidisciplinary,\
  and when required, I can become a specialist in any field...";

class PersonalSkillsSection extends Component {
  render() {
    return (
      <PageTemplate sectionIndex={this.props.sectionIndex}>
        <section>
          <h1 className="title">{title}</h1>
          <p className="paragraph">{paragraph1}</p>
          <h1 className="title">
            {
              "Please find below a link to my linkedin profile, If you'd like to contact me."
            }
          </h1>
        </section>
      </PageTemplate>
    );
  }
}

export default PersonalSkillsSection;
