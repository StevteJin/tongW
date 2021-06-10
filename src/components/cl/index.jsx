import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Cl() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const title = "今日入园车辆统计";
  const num1 = "2";
  const num2 = "5";
  const num3 = "5";
  const num4 = "2";
  const clData = [
    { name: "访客车辆", value: "32", pic: "car1" },
    { name: "物流车辆", value: "67", pic: "car2" },
    { name: "参观接待", value: "15", pic: "car3" },
    { name: "化学品槽车", value: "23", pic: "car4" },
  ];

  useEffect(() => {}, [top_count]);

  return (
    <div className="cl_box">
      <div className="cl_t">
        <span className="cl_close"></span>
        <span className="cl_title">{title}</span>
      </div>
      <div>
        <div className="cl_y">
          <img
            className="cl_tou"
            src={require("../../assets/tongwei/big_car.png").default}
            alt=""
          />
          <div className="cl_con">
            <div className="cl_num">入园车辆总数</div>
            <div className="cl_num_bg_box">
              <span className="cl_num_bg">{num1}</span>
              <span className="cl_num_bg">{num2}</span>
              <span className="cl_num_bg">{num3}</span>
              <span className="cl_num_bg">{num4}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="cl_r">
        {clData.map((item, index) => {
          return (
            <div key={index} className="cl_bot">
              <div className="cl_bot_left">
                <img
                  src={
                    require("../../assets/tongwei/" + item.pic + ".png").default
                  }
                  alt=""
                />
                <span>{item.name}</span>
              </div>
              <div className="cl_bot_right">{item.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Cl;
