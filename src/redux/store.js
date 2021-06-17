import { createStore } from "redux";
import reducer from "./reducers";

export function makeStore() {
  return createStore(reducer, {
    userData: {},
    configList:{},
    bot_index: 0, //模块选择的下标
    nav_active: "overview", //导航
  });
}
