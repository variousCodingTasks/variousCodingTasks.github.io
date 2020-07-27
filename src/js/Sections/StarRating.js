import { render } from "react-dom";
import React, { Component } from "react";

class StarRating extends Component {
  render() {
    const range5 = [1, 2, 3, 4, 5];
    const rating = this.props.rating;
    return (
      <div>
        {range5.map((index) =>
          index < rating + 1 ? (
            <span className="fa fa-star" key={index}></span>
          ) : (
            <span className="fa fa-star unMarkedStar" key={index}></span>
          )
        )}
      </div>
    );
  }
}

export default StarRating;
