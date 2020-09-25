import React from "react";
import { Link } from "react-router-dom";
import "./Timer.css";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setTime: "",
      valueText: 0,
      button: "Start",
    };
  }

  buttonAction() {
    if (this.state.button === "Start") {
      const time = parseInt(this.state.setTime);
      this.setState({
        valueText: time,
      });
      this.setState({
        button: "End",
      });
      var mytime = setInterval(myAction.bind(this), 1000);
    }
    if (this.state.button === "End") {
      this.setState({
        button: "Start",
      });
    }
    function myAction() {
      this.setState({
        valueText: this.state.valueText - 1,
      });
      if (this.state.valueText === 0 || this.state.button === "Start") {
        this.setState({
          button: "Start",
          valueText: 0,
        });
        clearInterval(mytime);
      }
    }
  }

  handleChange = (event) => {
    this.setState({
      setTime: event.target.value,
    });
  };
  render() {
    return (
      <div className="timerpage">
        <h1>在线倒计时器</h1>
        <div className="timer">
          <div className="control">
            <label>设置时间</label>
            <input
              type="text"
              value={this.state.setTime}
              onChange={this.handleChange}
            ></input>
            <br />
            <button type="button" onClick={() => this.buttonAction()}>
              {this.state.button}
            </button>
          </div>
          <div>
            <input type="text" value={this.state.valueText+"  Seconds"} readOnly className="showdatabar"/>
          </div>
        </div>
        <Link to="/">
          <span>返回主页</span>
        </Link>
      </div>
    );
  }
}
