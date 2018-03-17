import React, { Component } from "react";
import { Button } from "reactstrap";
import "./styles.css";

class Course extends Component {
  render() {
    return <Button color="warning">{this.props.name}</Button>;
  }
}

export default Course;
