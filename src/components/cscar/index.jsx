import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";
import { Progress } from "antd";

function Cscar() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const title = "今日超速车辆统计";
  const plxData = [
    { name: "刘维维（川A31ZZ3）", value: "5", pic: "plx_h", ser: "1" },
    { name: "周猷（川JHU157）", value: "4", pic: "plx_l", ser: "2" },
    { name: "李孝勇（川AL942W）", value: "4", pic: "plx_l", ser: "3" },
    { name: "李靖翔（川A468JQ）", value: "3", pic: "plx_l", ser: "4" },
    { name: "史玉龙（川A71Y2E）", value: "3", pic: "plx_l", ser: "5" },
  ];

  useEffect(() => {}, [top_count]);

  return (
    <div className="cscar">
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
                {/* <div className="plx_right">{item.value}</div> */}
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
export default Cscar;
