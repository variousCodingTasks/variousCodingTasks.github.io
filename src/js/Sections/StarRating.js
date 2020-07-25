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
            <span class="fa fa-star"></span>
          ) : (
            <span class="fa fa-star unMarkedStar"></span>
          )
        )}
      </div>
    );
  }
}

export default StarRating;
