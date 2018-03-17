import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Button } from "reactstrap";
import "./styles.css";
import "./courselist.css";

class Courses extends Component {
  render() {
    return (
      <div class="wrapper">
        <Nav />
        <div>
          <body>
            <div class="courselist">
            <div class="courselist_header">
            <div class="header_column">
            <i class="fas fa-plug fa-3x"></i>
            </div>
            <div class="header_column">
            <h1>기초1</h1>
            <span>1/3 레슨 시작</span>
            </div>
           <div class="header_column">
            시험보고 건너뛰기
           </div>
          </div>
          <div class="courselist_body">
            <div class="body_column">
              <div class="body_column_title">
                <h3>1/3 레슨</h3>
              </div>
              <div class="body_column_middle">
                <span>blah balh</span>
              </div>
              <div class="body_column_bottom">
                <div class="body_column_btn">시  작</div>
              </div>
            </div>
            <div class="body_column">
              <div class="body_column_title">
                <h3>2/3 레슨</h3>
              </div>
              <div class="body_column_middle">
                <span>blah balh</span>
              </div>
              <div class="body_column_bottom">
                <div class="body_column_btn">잠  김</div>
              </div>
            </div>
            <div class="body_column">
              <div class="body_column_title">
                <h3>3/3 레슨</h3>
              </div>
              <div class="body_column_middle">
                <span>blah balh</span>
              </div>
              <div class="body_column_bottom">
                <div class="body_column_btn">잠  김</div>
              </div>
            </div>
          </div>
      </div>
  </body>
  </div>    
        <Footer />
      </div>
    );
  }
}

export default Courses;
