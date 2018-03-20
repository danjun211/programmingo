import React, { Component } from "react";
import CourseButton from "../../components/CourseButton";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import { Jumbotron } from "reactstrap";
import "./styles.css";

class Main extends Component {
  state = {};

  categoryNames = {
    _c1_: "Level 1",
    _c2_: "Level 2",
    _c3_: "Level 3"
  };

  componentWillMount() {
    console.log("will mount");
  }

  componentDidMount() {
    console.log("did mount");
    this._getCourses();
  }

  _getCourses = async () => {
    // async 키워드는 이게 비동기 함수란걸 알려줌.
    const courses = await this._callApi(); // await: this._callApi()가 끝나길 기다리게 함. this._callApi가 끝나면 movies에 리턴값을 담는다.
    this.setState({ courses });
  };

  _callApi = () => {
    return fetch("https://programmingo-korea.firebaseio.com/questionList/.json") // fetch() ajax Request... 영화 API를 불러온다. fetch: 뭔가를 잡는다
      .then(response => response.json()) // Promise 객체가 리턴된다. Promise.json()을 리턴하면 json으로 변환하여 리턴
      .then(json => {
        return json;
      }) // json을 출력
      .catch(err => console.log(err)); // 오류가 발생하면 오류 메세지 출력
  };

  _renderCourses = () => {
    let coursesKeys = null;
    if (this.state.courses) {
      coursesKeys = Object.keys(this.state.courses);
      return coursesKeys.map(courseKey => {
        return (
          <CourseButton
            keyName={courseKey}
            name={this.categoryNames[courseKey]}
          />
        );
      });
    }
  };

  render() {
    console.log("did render");
    const { courses } = this.state;
    return <div>
        <Nav />
        <Jumbotron className="course_wrapper">
          {this._renderCourses()}
        </Jumbotron>
        <Footer />
      </div>;
  }
}

export default Main;
