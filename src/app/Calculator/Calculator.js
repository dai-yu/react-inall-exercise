import React from "react";
import { Link } from "react-router-dom";
import "./Calculator.css";

const KEYVALUE = [
  "+",
  "-",
  "*",
  "7",
  "8",
  "9",
  "4",
  "5",
  "6",
  "1",
  "2",
  "3",
  "0",
  "Clear",
  "=",
];

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueText: "0",
    };
  }

  handleValueInput(value) {
    let oldvalue = this.state.valueText;
    let rev = this.checkClickValue(oldvalue, value);
    let newValue = {};
    newValue.valueText = rev;
    this.setState(newValue);
  }

  checkClickValue(oldvalue, value) {
    switch (value) {
      case "=":
        const calculator = this.state.valueText.split(" ");
        switch (calculator[1]) {
          case "+":
            return parseInt(calculator[0]) + parseInt(calculator[2]);
          case "-":
            return parseInt(calculator[0]) - parseInt(calculator[2]);
          case "*":
            return parseInt(calculator[0]) * parseInt(calculator[2]);
        }
        return resultbefore;
      case "Clear":
        oldvalue = "0";
        return oldvalue;
      case "+":
      case "-":
      case "*":
        return oldvalue + " " + value + " ";
      default:
        if (oldvalue === "0") {
          oldvalue = "";
        }
        return oldvalue + value;
    }
  }

  render() {
    let buttonlist = [];
    KEYVALUE.forEach((data) => {
      buttonlist.push(
        <button
          className="button"
          key={data}
          onClick={this.handleValueInput.bind(this, data)}
        >
          {data}
        </button>
      );
    });
    return (
      <div className="page">
        <h1>在线计算器</h1>
        <div className="calculator">
          <div className="showdatabar">
            <input type="text" value={this.state.valueText} readOnly />
          </div>
          <div className="buttonlist">{buttonlist}</div>
        </div>
        <Link to="/">
          <span>返回主页</span>
        </Link>
      </div>
    );
  }
}
