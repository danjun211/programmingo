import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import "./index.css";
import App from "./App";
import Main from "./components/Main";
import Courses from "./components/Courses";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="home" component={Main} />
      <Route path="courses/:id" component={Courses} />
    </Route>
  </Router>,
  document.getElementById("root")
);
