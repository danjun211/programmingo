import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Main, Questionare, Courses } from "./views";
import "./App.css";

class App extends Component {
  


  render() {
    return <div>
        <link href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" rel="stylesheet" />
        <Route exact path="/" component={Main} />
        <Route path="/courses/:id" component={Courses} />
        <Route path="/questionare/:categoryId/" component={Questionare} />
      </div>;
  }
}

export default App;
