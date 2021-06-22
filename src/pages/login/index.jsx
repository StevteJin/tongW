import React, {
  useState,
  useEffect,
  useLayoutEffect,
  lazy,
  Suspense,
} from "react";
import $ from "jquery";
import { useMappedState, useDispatch } from "redux-react-hook";
import { useLocation } from "react-router-dom";
import "./style.scss";

function Login() {
  const dispatch = useDispatch();
  const active_name = useMappedState((state) => state.nav_active);
  const { pathname } = useLocation(); //存储当前路由地址`
  console.log("我是哪一个", pathname, active_name);

  useEffect(() => {}, []);

  return <div>我是登录页</div>;
}

export default Login;
