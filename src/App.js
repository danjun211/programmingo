import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Main, Questionare, Courses } from "./views";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/courses" component={Courses} />
        <Route path="/questionare" component={Questionare} />
      </div>
    );
  }
}

export default App;
