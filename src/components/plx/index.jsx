import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";
import { Progress } from "antd";

function Plx() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const title = "今日报警类型统计";
  const plxData = [
    { name: "陌生人", value: "18", pic: "plx_h", ser: 1 },
    { name: "访客非法闯入", value: "14", pic: "plx_h", ser: 2 },
    { name: "未带口罩", value: "11", pic: "plx_h", ser: 3 },
    { name: "翻越闸机", value: "11", pic: "plx_l", ser: 4 },
    { name: "踩草坪", value: "8", pic: "plx_l", ser: 5 },
    { name: "未戴安全帽", value: "5", pic: "plx_l", ser: 6 },
    { name: "打架斗殴", value: "3", pic: "plx_l", ser: 7 },
    { name: "物品滞留", value: "2", pic: "plx_l", ser: 8 },
    { name: "其他", value: "1", pic: "plx_l", ser: 9 },
  ];

  useEffect(() => {}, [top_count]);

  return (
    <div className="fen_box2">
      <div className="fen_t">
        <span className="fen_close"></span>
        <span className="fen_title">{title}</span>
      </div>
      <div>
        {plxData.map((item, index) => {
          return (
            <div key={index}>
              <div className="plx_top">
                <div className="plx_left">
                  <div className={item.pic == "plx_h" ? "ser" : "noser"}>
                    {item.ser}
                  </div>
                  <span className="num">{item.name}</span>
                </div>
                <div className="plx_right">{item.value}</div>
              </div>
              <div className="plx_bot">
                <Progress percent={30} showInfo={false} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Plx;
