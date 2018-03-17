import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./styles.css";

class CourseButton extends Component {
  render() {
    return (
      <div>
        <button className="coursebutton"><Link to={"/courses/" + this.props.keyName}>{this.props.name}</Link></button>
        <i class="fab fa-android fa-3x" />
      </div>
    );
  }
}

export default CourseButton;
