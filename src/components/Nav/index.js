import React, { Component } from "react";
import { Button } from "reactstrap";
import "./styles.css";

class Nav extends Component {
  render() {
    return <div className="nav">
        <div className="logo">
          <h3>Programmingo</h3>
        </div>
        <Button color="warning" className="login_btn">
          로그인
        </Button>
      </div>;
  }
}

export default Nav;
