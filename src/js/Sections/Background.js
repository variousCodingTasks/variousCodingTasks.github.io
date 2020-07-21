import { render } from "react-dom";
import React, { Component } from "react";

import PageTemplate from "../PageTemplate";

import { CSSTransition, TransitionGroup } from "react-transition-group";

const title = "Some background:";

const paragraph1 =
  "I am a seasoned financial services professional, a software engineer, and data enthusiast… I taught myself\
   programming, started with Python and then some more, but as I progressed, I wanted to check out the nuts and\
    bolts (algorithms, data structures, computer organization…), so after some online courses , I decided it was\
     time to make it formal and earn some degrees in Computer science.";
const paragraph2 =
  "I have a solid background in math, statistics, economics, and finance, so I (naturally) love\
                       data in all shapes and sizes: I spend a lot of time examining, modeling, visualizing and processing it and\
                        enjoyed learning the all the technical tools required.";

class BackgroundSection extends Component {
  render() {
    return (
      <PageTemplate sectionIndex={this.props.sectionIndex}>
        <section>
          <h1 className="title">{title}</h1>
          <p className="paragraph">{paragraph1}</p>
          <p className="paragraph">{paragraph2}</p>
        </section>
      </PageTemplate>
    );
  }
}

export default BackgroundSection;
