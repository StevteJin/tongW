import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Ruyuan() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const title = "今日园区人员情况";
  const num1 = "2";
  const num2 = "5";
  const num3 = "5";
  const num4 = "2";
  const ruData = [
    { name: "公司人数", value: "1305" },
    { name: "供应商人数", value: "1085" },
    { name: "访客人数", value: "162" },
  ];

  useEffect(() => {}, [top_count]);

  return (
    <div className="ru_box">
      <div className="ru_t">
        <span className="ru_close"></span>
        <span className="ru_title">{title}</span>
      </div>
      <div className="ru_y">
        <img
          className="ru_tou"
          src={require("../../assets/tongwei/rutou.png").default}
          alt=""
        />
        <div className="ru_con">
          <div className="ru_num">入园区总人数</div>
          <div className="ru_num_bg_box">
            <span className="ru_num_bg">{num1}</span>
            <span className="ru_num_bg">{num2}</span>
            <span className="ru_num_bg">{num3}</span>
            <span className="ru_num_bg">{num4}</span>
          </div>
        </div>
      </div>
      <div className="ru_person">
        {ruData.map((item, index) => {
          return (
            <div key={index} className="per_box">
              <div className="per_left">
                <div className="per_name">{item.name}</div>
                <div className="per_value">{item.value}</div>
              </div>
              <img className="line"
                src={require("../../assets/tongwei/ru_line.png").default}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Ruyuan;
