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
      <div>
        <img src={require("../../assets/tongwei/rutou.png").default} alt="" />
        <div>
          <div>入园区总人数</div>
          <div>
            <span>{num1}</span>
            <span>{num2}</span>
            <span>{num3}</span>
            <span>{num4}</span>
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
