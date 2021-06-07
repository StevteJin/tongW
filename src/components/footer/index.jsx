import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Footer() {
  const top_count = useMappedState((state) => state.top_navigation_count);

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
  useEffect(() => {}, [top_count]);

  return (
    <div className="footer_box">
      <div className="footer">
        <ul>
          {footerName.map((item, index) => {
            return <li key={index}>{item.value}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
export default Footer;
