import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Button } from "reactstrap";
import "./styles.css";

class Courses extends Component {
  render() {
    return (
      <div class="wrapper">
        <Nav />
        <div>문제목록!!</div>
        <Footer />
      </div>
    );
  }
}

export default Courses;
