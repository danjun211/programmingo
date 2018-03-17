import React, { Component } from "react";
import CourseButton from "../../components/CourseButton";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import "./styles.css";

class Main extends Component {
  state = {};

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
    return fetch(
      "https://yts.am/api/v2/list_movies.json?sort_by=download_count"
    ) // fetch() ajax Request... 영화 API를 불러온다. fetch: 뭔가를 잡는다
      .then(response => response.json()) // Promise 객체가 리턴된다. Promise.json()을 리턴하면 json으로 변환하여 리턴
      .then(json => {
        console.log(json);
        return json.data.movies;
      }) // json을 출력
      .catch(err => console.log(err)); // 오류가 발생하면 오류 메세지 출력
  };

  _renderCourses = () => {
    // console.log(this.state);
    // const courses = this.state.courses.map(course => {
    //   return <Course name={course.name} />;
    // });
    // return courses;
    return (
      <div className="course-box">
        <CourseButton name="카테고리1" />
        <CourseButton name="카테고리2" />
        <CourseButton name="카테고리3" />
      </div>
    );
  };

  render() {
    console.log("did render");
    const { movies } = this.state;
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
