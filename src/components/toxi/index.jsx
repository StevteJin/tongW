import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";
import { Progress } from "antd";

function Toxi() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const title = "今日出入口通行分布";
  const plxData = [
    { name: "出入口1", value: "18", pic: "plx_h" },
    { name: "出入口2", value: "14", pic: "plx_l" },
    { name: "出入口3", value: "11", pic: "plx_l" },
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
                  <img
                    src={
                      require("../../assets/tongwei/" + item.pic + ".png")
                        .default
                    }
                    alt=""
                  />
                  <span>{item.name}</span>
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
export default Toxi;
