import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./styles.css";

class CourseButton extends Component {
  render() {
    return <div className="course_wrapper">
        <button className="circle">
          <Link className="link" to={process.env.PUBLIC_URL + "/courses/" + this.props.keyName}>
            <span className="course_text">{this.props.name}</span>
          </Link>
        </button>
        <i class="fab fa-android fa-3x" />
      </div>;
  }
}

export default CourseButton;
