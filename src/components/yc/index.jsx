import React, { useState, useEffect } from "react";
import * as echarts from "echarts";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Yc() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const title = "今日人员异常出入统计";
  let initCharty = () => {
    let element = document.getElementById("mainy");
    let myChart = echarts.init(element);
    //环形图参数
    let option = {
      tooltip: {
        trigger: "axis",
      },

      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "00:00",
          "03:00",
          "06:00",
          "09:00",
          "12:00",
          "15:00",
          "18:00",
          "21:00",
          "24:00",
        ],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "公司人数",
          type: "line",
          stack: "总量",
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "非公司人数",
          type: "line",
          stack: "总量",
          data: [220, 182, 191, 234, 290, 330, 310],
        },
      ],
    };
    myChart.setOption(option);
  };

  useEffect(() => {
    initCharty();
  }, [top_count]);

  return (
    <div className="yc_box">
      <div className="yc_t">
        <span className="yc_close"></span>
        <span className="yc_title">{title}</span>
      </div>
      <div>
        <div className="yc_tu">
          <div id={"mainy"} style={{ height: 200 }}></div>
        </div>
      </div>
    </div>
  );
}
export default Yc;
