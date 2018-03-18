import React, { Component } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { Jumbotron, Button, Progress } from "reactstrap";
import "./styles.css";

class Questionare extends Component {
  state = {
    score: 0
  };

  idx = 1;

  componentWillMount() {
    console.log("will mount");
  }

  componentDidMount() {
    console.log("did mount");
    this._getQuestion();
  }

  _getQuestion = async () => {
    // async 키워드는 이게 비동기 함수란걸 알려줌.
    let questionList = await this._callApi(); // await: this._callApi()가 끝나길 기다리게 함. this._callApi가 끝나면 movies에 리턴값을 담는다.
    let reQuestion = {};
    let questionNumber = 0;
    console.log(questionNumber);
    Object.keys(questionList).map((v, i) => {
      let removeUnderbar = parseInt(v.replace(/_/g, ""));
      
      if (i === 0) {
        questionNumber = parseInt(removeUnderbar);
      }
      reQuestion[removeUnderbar] = questionList[v];
    });
    
    questionList = reQuestion;
    this.setState({
      questionList,
      questionNumber: questionNumber,
      question: questionList[questionNumber]
    });
  };

  _callApi = () => {
    let url =
      "https://programmingo-korea.firebaseio.com/questionList/" +
      this.props.match.params.categoryId +
      ".json";
    return fetch(url) // fetch() ajax Request... 영화 API를 불러온다. fetch: 뭔가를 잡는다
      .then(response => response.json()) // Promise 객체가 리턴된다. Promise.json()을 리턴하면 json으로 변환하여 리턴
      .then(json => {
        return json;
      }) // json을 출력
      .catch(err => console.log(err)); // 오류가 발생하면 오류 메세지 출력
  };

  _renderQuestion = () => {
    console.log(this.state);
    switch (this.state.question.Style) {
      case "truefalse":
        return this._renderAnswers();
      case "pick4":
        return this._renderAnswers();
      case "pick2":
        return this._renderAnswers();
      default:
        return <div>문제 유형이 존재하지 않습니다.</div>;
    }
  };

  _increamentScore() {
    let score = this.state.score + 10;
    this.setState({ score: score });
  }

  _checkAnswer(e) {
    if (e.currentTarget.dataset.idx == this.state.question.answer) {
      this.setState({
        questionNumber: ++this.state.questionNumber,
        question: this.state.questionList[this.state.questionNumber]
      });
      this._increamentScore();
    } else {
      // 틀리면 힌트를 보여주고 다음 문제를 주자.
    }
  }

  _renderAnswers() {
    let idx = 0;
    return (
      <Jumbotron>
        <div class="qf">문제: {this.state.question.QuestionName}</div>
        <ul>
          {Object.keys(this.state.question.answerText).map((answerKey, i) => {
            return (
              <li key={i} class="if">
                <input 
                  type="radio"
                  name="answer"
                  data-idx={++idx}
                  value={this.state.question.answerText[answerKey]}
                  onClick={e => this._checkAnswer(e)}
                />
                {this.state.question.answerText[answerKey]}
              </li>
            );
          })}
        </ul>
      </Jumbotron>
    );
  }

  render() {
    return (
      <div className="wrapper">
        <Nav />
        <Progress value={this.state.score} />
        {this.state.questionList ? (
          this._renderQuestion()
        ) : (
          <div>Loading...</div>
        )}
        <Footer />
      </div>
    );
  }
}

export default Questionare;
