import React from "react";
import "./home.less";
import image from "../images/hero-image.png";
import calculator from "../images/calculator.png";
import timer from "../images/timer.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <img src={image}></img>
      <div className="panel">
        <div>
          <img src={calculator}></img><br/>
          <Link to="/calculator">计算器</Link>
        </div>
        <div>
          <img src={timer}></img><br/>
          <Link to="/timer">倒计时器</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
