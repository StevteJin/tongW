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
    let option = {
      xAxis: {
        type: "category",
        data: ["张无忌", "令狐冲", "杨过", "张三丰", "独孤求败"],
        splitLine: {
          //网格线
          show: true,
          lineStyle: {
            type: "dashed", //网格线样式
            width: 0.2,
            color: ["#fff", "#fff"],
          },
        },
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          interval: 0,
          textStyle: {
            color: "#fff",
            fontSize: 10,
          },
        }
      },
      yAxis: {
        type: "value",
        splitLine: {
          //网格线
          show: true,
          lineStyle: {
            type: "dashed", //网格线样式
            width: 0.2,
            color: ["#fff", "#fff"],
          },
        },
      },
      grid: {
        top: "10%",

        left: "12%",

        right: "4%",

        bottom: "20%",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70],
          type: "bar",
          barWidth: 10,
          showBackground: false,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#83bff6" },
              { offset: 0.5, color: "#188df0" },
              { offset: 1, color: "#188df0" },
            ]),
          },
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
