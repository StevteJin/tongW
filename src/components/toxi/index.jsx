import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";
import { Progress } from "antd";

function Toxi() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const title = "今日出入口通行分布";
  const plxData = [
    { name: "大门岗", value: "385", pic: "plx_h", ser: "1" },
    { name: "物流门", value: "48", pic: "plx_l", ser: "2" },
  ];

  useEffect(() => {}, [top_count]);

  return (
    <div className="toxi">
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
                {item.pic == "plx_h" ? (
                  <Progress
                    percent={30}
                    strokeColor={{
                      "40%": "#CABC98",
                      "100%": "#E2CC99",
                    }}
                    trailColor={"rgba(0,0,0,0.32)"}
                    strokeWidth={4}
                    showInfo={false}
                  />
                ) : (
                  <Progress
                    percent={20}
                    strokeColor={{
                      "40%": "#73A8FF",
                      "100%": "#5797FF",
                    }}
                    trailColor={"rgba(0,0,0,0.32)"}
                    strokeWidth={4}
                    showInfo={false}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Toxi;
