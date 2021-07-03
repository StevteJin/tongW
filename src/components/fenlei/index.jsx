import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Fenlei() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  // const title = "各栋建组人数";
  // const fenleiData = [
  //   { name: "A1东区", value: "433" },
  //   { name: "A1西区", value: "2,124" },
  //   { name: "A1办公区", value: "353" },
  //   { name: "食堂", value: "1624" },
  //   { name: "动力站", value: "219" },
  //   { name: "室外", value: "268" },
  // ];

  const title = "今日人员分类统计";
  const fenleiData = [
    { name: "排班数", value: "4" },
    { name: "在岗人数", value: "2,124" },
    { name: "请假人数", value: "35" },
    { name: "白班人数", value: "1624" },
    { name: "夜班人数", value: "219" },
    { name: "行政人数", value: "268" },
  ];

  useEffect(() => {}, [top_count]);

  return (
    <div className="fen_box">
      <div className="fen_t">
        <span className="fen_close"></span>
        <span className="fen_title">{title}</span>
      </div>
      <div className="fen_c">
        {fenleiData.map((item, index) => {
          return (
            <div key={index} className="fen_cbox">
              <div className="value">{item.value}</div>
              <div className="name">{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Fenlei;
