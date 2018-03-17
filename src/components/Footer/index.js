import React, { Component } from "react";
import "./styles.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <div className="footer_column">
            <i className="fas fa-pencil-alt fa-lg" />
            <span>학습</span>
          </div>
          <div className="footer_column">
            <i className="fas fa-user-circle fa-lg" />
            <span>프로필</span>
          </div>
          <div className="footer_column">
            <i className="fas fa-home fa-lg" />
            <span>스토어</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
