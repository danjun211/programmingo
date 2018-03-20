import React, { Component } from "react";
import { Redirect } from "react-router";
import "./styles.css";

class SoEasy extends Component {
  render() {
    return !this.props.isshow ? <div className="soeasy">쏘 이지!</div> : null;
  }
}

export default SoEasy;
