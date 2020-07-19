import { render } from "react-dom";
import React, { Component } from "react";

import PageTemplate from "../PageTemplate";

import { CSSTransition, TransitionGroup } from "react-transition-group";

class BackgroundSection extends Component {
  render() {
    const items = [
      <h1>this is the main section bbb</h1>,
      <h1>this is the main section</h1>,
      <h1>this is the main section</h1>,
      <h1>this is the main section</h1>,
      <h1>this is the main section</h1>,
    ];
    return (
      /*<PageTemplate sectionIndex={this.props.sectionIndex}>
        <section>
          <h1>this is the main section bbb</h1>
          <h1>this is the main section</h1>
          <h1>this is the main section</h1>
          <h1>this is the main section</h1>
          <h1>this is the main section</h1>
        </section>
    </PageTemplate>*/
      <PageTemplate sectionIndex={this.props.sectionIndex}>
        <TransitionGroup>
          {items.map((item, index) => (
            <CSSTransition key={index} timeout={1000} classNames="transition">
              {item}
            </CSSTransition>
          ))}
        </TransitionGroup>
      </PageTemplate>
    );
  }
}

export default BackgroundSection;
