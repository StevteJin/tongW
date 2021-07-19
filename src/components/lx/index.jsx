import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";
import {
  getStatisticByPAlarm
} from "../../api/mainApi";

function Lx() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const title = "今日报警类型统计";
  const fenleiData = [
    { name: "车辆超速", value: "5" },
    { name: "车辆超高", value: "1" },
    { name: "车辆违停", value: "7" },
  ];

  useEffect(() => {
    getStatisticByPAlarm();
  }, [top_count]);

  return (
    <div className="fen_box1">
      <div className="fen_t">
        <span className="fen_close"></span>
        <span className="fen_title">{title}</span>
      </div>
      <div className="fen_c">
        {fenleiData.map((item, index) => {
          return (
            <div key={index} className="fen_cbox">
              <div className="name">{item.name}</div>
              <div className="value">{item.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Lx;
