import { render } from "react-dom";
import React, { Component } from "react";

import PageTemplate from "../PageTemplate";

const title = "Personal and Soft Skills";

const paragraph1 =
  "I have well developed problem solving skills, business acumen, anlytical thinking and quantitative skills.\
  I am an autodidact and a quick learner, I pay great attention to details and I focus on the whole picture.";

const paragraph2 =
  "I can work under pressure and uncertainty. My knowledge and experience are multidisciplinary,\
  and when required, I can become a specialist in any field...";

const paragraph3 =
  "I like to keep things tidy and in order, in both my physical and virtual environments.";

const paragraph4 =
  "I worked in teams and led teams, I like to learn from colleagues, and when possible, I like to teach others\
  from my experience. I like to be around people who are smarter and wiser than me.";

class PersonalSkillsSection extends Component {
  render() {
    return (
      <PageTemplate sectionIndex={this.props.sectionIndex}>
        <section>
          <h1 className="title">{title}</h1>
          <h3 className="secondaryTitle">{"General:"}</h3>
          <p className="paragraph">{paragraph1}</p>
          <p className="paragraph">{paragraph2}</p>
          <p className="paragraph">{paragraph3}</p>
          <h3 className="secondaryTitle">{"Personal:"}</h3>
          <p className="paragraph">{paragraph4}</p>
        </section>
      </PageTemplate>
    );
  }
}

export default PersonalSkillsSection;
