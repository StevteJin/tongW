import React, { useState, useEffect } from "react";
import * as echarts from "echarts";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Rucar() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const title = "近24小时入园车辆统计";
  let initCharty = () => {
    let element = document.getElementById("mainy");
    let myChart = echarts.init(element);
    let option = {
      xAxis: {
        type: "category",
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
        splitLine: {
          //网格线
          show: true,
          lineStyle: {
            type: "dashed", //网格线样式
            width: 0.2,
            color: ["#fff", "#fff"],
          },
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

        left: "10%",

        right: "4%",

        bottom: "20%",
      },
      series: [
        {
          data: [5, 10, 12, 155, 100, 60, 148, 52, 17],
          type: "line",
          smooth: true, //圆润
          symbol: "none", //不要圈
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgb(20,229,235,0.4)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "transparent", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#14E5EB ", // 0% 处的颜色
                },
                {
                  offset: 0.5,
                  color: "#14E5EB ", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#14E5EB ", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
          areaStyle: {},
        },
      ],
    };
    myChart.setOption(option);
  };

  useEffect(() => {
    initCharty();
  }, [top_count]);

  return (
    <div className="rucar">
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
export default Rucar;
