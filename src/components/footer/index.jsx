import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Footer() {
  const dispatch = useDispatch();
  const bot_real_index = useMappedState((state) => state.bot_index);
  const real_nav_active = useMappedState((state) => state.nav_active);
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
  const handle_top = (item, index) => {
    console.log("点的哪个", index, item.value);
    dispatch({ type: "handleTop", bot_index: index });
    dispatch({ type: "changeActive", nav_active: item.name });
  };
  useEffect(() => {}, [bot_real_index, real_nav_active]);

  return (
    <div className="footer_box">
      <div className="footer">
        <ul>
          {footerName.map((item, index) => {
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
