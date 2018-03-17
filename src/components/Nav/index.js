import React, { Component } from "react";
import { Button } from "reactstrap";
import "./styles.css";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="logo">Programmingo</div>
        <Button color="warning">로그인</Button>
        <Button color="warning">회원가입</Button>
      </div>
    );
  }
}

export default Nav;
