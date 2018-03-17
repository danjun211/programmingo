import React, { Component } from "react";
import "./styles.css";

class CourseButton extends Component {
  render() {
    return (
      <div>
        <button className="coursebutton">{this.props.name}</button>
        <i class="fab fa-android fa-3x" />
      </div>
    );
  }
}

export default CourseButton;
