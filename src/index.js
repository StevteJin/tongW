import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import { StoreContext } from "redux-react-hook";
import { makeStore } from "./redux/store";
import { Spin } from "antd";
import moment from "moment";
import "moment/locale/zh-cn";
import "normalize.css";
import "animate.css";
import "./index.css";
import { LoadingOutlined } from "@ant-design/icons";
const store = makeStore();
moment.locale("zh-cn");
Spin.setDefaultIndicator(<LoadingOutlined style={{ fontSize: 30 }} spin />);
ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Router>
      <Switch>
        <Route path="/home/:title" component={Home} />
        <Route path="/login" exact component={Login} />
        <Redirect from="/" exact to="/home/person" />
      </Switch>
    </Router>
  </StoreContext.Provider>,
  document.getElementById("root")
);
