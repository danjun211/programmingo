import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Button } from "reactstrap";
import "./styles.css";
import "./courselist.css";

class Courses extends Component {

  

  render() {
    console.log(this.props.match.params.id);
    return (
      <div className="wrapper">
        <Nav />
        <div>
            <div className="courselist">
              <div className="courselist_header">
                <div className="header_column">
                  <i className="fas fa-plug fa-3x" />
                </div>
                <div className="header_column">
                  <h1>기초1</h1>
                  <span>1/3 레슨 시작</span>
                </div>
                <div className="header_column">시험보고 건너뛰기</div>
              </div>
              <div className="courselist_body">
                <div className="body_column">
                  <div className="body_column_title">
                    <h3>1/3 레슨</h3>
                  </div>
                  <div className="body_column_middle">
                    <span>blah balh</span>
                  </div>
                  <div className="body_column_bottom">
                    <div className="body_column_btn">시 작</div>
                  </div>
                </div>
                <div className="body_column">
                  <div className="body_column_title">
                    <h3>2/3 레슨</h3>
                  </div>
                  <div className="body_column_middle">
                    <span>blah balh</span>
                  </div>
                  <div className="body_column_bottom">
                    <div className="body_column_btn">잠 김</div>
                  </div>
                </div>
                <div className="body_column">
                  <div className="body_column_title">
                    <h3>3/3 레슨</h3>
                  </div>
                  <div className="body_column_middle">
                    <span>blah balh</span>
                  </div>
                  <div className="body_column_bottom">
                    <div className="body_column_btn">잠 김</div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Courses;
