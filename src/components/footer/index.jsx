import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Footer() {
  const dispatch = useDispatch();
  const bot_real_index = useMappedState((state) => state.bot_index);

  const footerName = [
    {
      key: 1,
      value: "园区总览",
    },
    {
      key: 2,
      value: "园区感知",
    },
    {
      key: 3,
      value: "智慧管理",
    },
  ];
  const handle_top = (item, index) => {
    console.log("点的哪个",index, item.value);
    dispatch({ type: "handleTop", bot_index: index });
  };
  useEffect(() => {}, [bot_real_index]);
 
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
