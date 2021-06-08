import React, { useState, useEffect } from "react";
import "swiper/swiper.scss";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Todaynum() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const title = "今日数据统计";
  const todayNum = [
    { name: "园区访客量", value: "79", pic: "t1" },
    { name: "违纪行为总量", value: "65", pic: "t2" },
    { name: "园区陌生人量", value: "14", pic: "t3" },
    { name: "人脸抓拍量", value: "1393", pic: "t4" },
  ];

  useEffect(() => {}, [top_count]);

  return (
    <div className="today_box">
      <div className="top_box">
        <span className="top_close"></span>
        <span className="top_title">{title}</span>
      </div>
      <div className="fang_box">
        {todayNum.map((item, index) => {
          return (
            <div key={index} className="fang">
              <span className="fang_img">
                <img
                  src={
                    require("../../assets/tongwei/" + item.pic + ".png").default
                  }
                  alt=""
                />
              </span>
              <span className="fang_name">{item.name}</span>
              <span className="fang_title">{item.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Todaynum;
