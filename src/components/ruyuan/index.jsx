import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Ruyuan() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const title = "今日入园人数统计";
  const num1 = "2";
  const num2 = "5";
  const num3 = "5";
  const num4 = "2";
  const ruData = [
    { name: "公司人数", value: "2,289" },
    { name: "供应商人数", value: "101" },
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
        <img className="ru_tou" src={require("../../assets/tongwei/rutou.png").default} alt="" />
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
      <div>
        {ruData.map((item, index) => {
          return (
            <div key={index}>
              <div>{item.name}</div>
              <div>{item.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Ruyuan;
