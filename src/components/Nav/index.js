import React, { Component } from "react";
import { Button } from "reactstrap";
import "./styles.css";

class Nav extends Component {
  state = {
    isLogined: true
  };

  _login(e) {
    let isLogined = !this.state.isLogined;
    this.setState({
      isLogined
    });
  }

  render() {
    return (
      <div className="nav">
        <div className="logo">
          <h3>Programmingo</h3>
        </div>
        <Button color="warning" className="login_btn" onClick={e => this._login(e)}>
          {this.state.isLogined ? "로그인" : "로그아웃"}
        </Button>
      </div>
    );
  }
}

export default Nav;
