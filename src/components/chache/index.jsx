import React, { useState, useEffect } from "react";
import * as echarts from "echarts";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Chache() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const title = "今日无人叉车统计";
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
      name: "正常运行",
      value: "28",
      classCall: "call1",
    },
    {
      name: "正在充电",
      value: "25",
      classCall: "call2",
    },
    {
      name: "故障调试",
      value: "2",
      classCall: "call3",
    },
  ];

  let initChart = () => {
    let element = document.getElementById("mainx");
    let myChart = echarts.init(element);
    //环形图参数
    let option = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "center",
      },
      color: [
        {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.15,
              color: "#00faa8", // 0% 处的颜色
            },
            {
              offset: 0.88,
              color: "#24ffe4", // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
        {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.15,
              color: "#46b8ff", // 0% 处的颜色
            },
            {
              offset: 0.68,
              color: "#136eff", // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
        {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.12,
              color: "#ffd148", // 0% 处的颜色
            },
            {
              offset: 0.88,
              color: "#ffa334", // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      ],
      series: [
        {
          name: "今日门禁人员统计",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "40",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [{ value: 28 }, { value: 25 }, { value: 2 }],
        },
      ],
    };
    myChart.setOption(option);
  };

  useEffect(() => {
    initChart();
  }, [top_count]);

  return (
    <div className="chache">
      <div className="mj_t">
        <span className="mj_close"></span>
        <span className="mj_title">{title}</span>
      </div>
      <div className="bread_box">
        <div className="bg_box">
          {/* 饼图在这里 */}
          <div id={"mainx"} className="tu" style={{ height: 130 }}></div>
          <div className="bread_title">
            <div className="bread_t">55</div>
            <div className="bread_b">叉车总数</div>
          </div>
        </div>
        <div className="bg_right">
          {mjData2.map((item, index) => {
            return (
              <div key={index} className="bg_r_box">
                <div className="bg_top">
                  <div className={item.classCall}></div>
                  <span className="huan_name">{item.name}</span>
                </div>
                <br />
                <div className="bg_bot">{item.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Chache;
