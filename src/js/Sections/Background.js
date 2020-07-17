import { render } from "react-dom";
import React, { Component } from "react";

import PageTemplate from "../PageTemplate";

class BackgroundSection extends Component {
  render() {
    return (
      <PageTemplate sectionIndex={this.props.sectionIndex}>
        <section>
          <h1>this is the main section bbb</h1>
          <h1>this is the main section</h1>
          <h1>this is the main section</h1>
        </section>
      </PageTemplate>
    );
  }
}

export default BackgroundSection;
