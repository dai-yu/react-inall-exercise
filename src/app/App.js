import React, { Component } from "react";
import "./app.less";
import { Route, BrowserRouter, NavLink, Switch } from "react-router-dom";
import Home from "./Home";
import Timer from "./Timer/Timer";
import Calculator from "./Calculator/Calculator";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div className="nav">
            <div className="but">
              <NavLink to="/">HOME</NavLink>
              <NavLink to="/calculator">在线计算器</NavLink>
              <NavLink to="/timer">在线倒计时器</NavLink>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/calculator" component={Calculator} />
            <Route path="/timer" component={Timer} />
            <Route component={Home}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
