import React, { Component } from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import { Button } from "reactstrap";
import "./styles.css";

class Courses extends Component {
  render() {
    return (
      <div class="wrapper">
        <Nav />
        <div>문제풀자!!</div>
        <Footer />
      </div>
    );
  }
}

export default Courses;
