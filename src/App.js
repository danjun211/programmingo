import React, { Component } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./views/Main";
import { Link } from "react-router";
import { Button } from "reactstrap";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div class="wrapper">
        <Nav />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
