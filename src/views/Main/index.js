import React, { Component } from "react";
import CourseButton from "../../components/CourseButton";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import "./styles.css";

class Main extends Component {
  state = {};

  categoryNames = {
    _c1_: "카테고리1",
    _c2_: "카테고리2",
    _c3_: "카테고리3"
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
        return <CourseButton keyName={courseKey} name={this.categoryNames[courseKey]} />;
      });
    }
  };

  render() {
    console.log("did render");
    const { courses } = this.state;
    // 함수명에 _(언더스코어) 쓰는 이유? 리액트 자체 함수와 나의 함수를 구분하기 위해서
    // return (
    //   <div className={movies ? "App" : "App--loading"}>
    //     {movies ? this._renderCourses() : "Loading"}
    //   </div>
    // );
    return (
      <div className="Main">
        <Nav />
        {this._renderCourses()}
        <Footer />
      </div>
    );
  }
}

export default Main;
