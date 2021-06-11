import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";
import { useLocation } from "react-router-dom";

function Footer() {
  const dispatch = useDispatch();
  const bot_real_index = useMappedState((state) => state.bot_index);
  const real_nav_active = useMappedState((state) => state.nav_active);
  const { pathname } = useLocation(); //存储当前路由地址`
  console.log("当前路由", pathname);
  // 导航
  const footerName = [
    {
      key: 1,
      name: "overview",
      value: "园区总览",
    },
    {
      key: 2,
      name: "perception",
      value: "园区感知",
    },
    {
      key: 3,
      name: "management",
      value: "智慧管理",
    },
  ];
  const footerName1 = [
    {
      key: 4,
      name: "cars",
      value: "实时车辆",
    },
    {
      key: 5,
      name: "hvac",
      value: "厂务管理",
    },
    {
      key: 6,
      name: "security",
      value: "园区安防",
    },
  ];
  const handle_top = (item, index) => {
    console.log("点的哪个", index, item.value);
    dispatch({ type: "handleTop", bot_index: index });
    dispatch({ type: "changeActive", nav_active: item.name });
  };
  useEffect(() => {}, [pathname, bot_real_index, real_nav_active]);

  return (
    <div className="footer_box">
      <div className="footer">
        <ul>
          {pathname == "/home/person"
            ? footerName.map((item, index) => {
                return (
                  <li
                    className={bot_real_index == index ? "active_LI" : null}
                    key={index}
                    onClick={() => handle_top(item, index)}
                  >
                    {item.value}
                  </li>
                );
              })
            : footerName1.map((item, index) => {
                return (
                  <li
                    className={bot_real_index == index ? "active_LI" : null}
                    key={index}
                    onClick={() => handle_top(item, index)}
                  >
                    {item.value}
                  </li>
                );
              })}
        </ul>
      </div>
    </div>
  );
}
export default Footer;
