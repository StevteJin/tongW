import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Mj() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const title = "今日门禁人员统计";
  const mjData1 = [
    {
      name: "门禁刷脸总数",
      value: "4,143",
    },
    {
      name: "门禁点刷脸均数",
      value: 38,
    },
  ];

  const mjData2 = [
    {
      name: "门岗1",
      value: "1,490",
    },
    {
      name: "门岗2",
      value: "843",
    },
    {
      name: "门岗3",
      value: "387",
    },
    {
      name: "门岗4",
      value: "319",
    },
  ];

  useEffect(() => {}, [top_count]);

  return (
    <div className="mj_box">
      <div className="mj_t">
        <span className="mj_close"></span>
        <span className="mj_title">{title}</span>
      </div>
      <div className="mj_p">
        {mjData1.map((item, index) => {
          return (
            <div key={index} className="mj_pbox">
              <div className="mj_pname">{item.name}</div>
              <div className="mj_pvalue">{item.value}</div>
            </div>
          );
        })}
      </div>
      <div>{/* 饼图 */}</div>
    </div>
  );
}
export default Mj;
