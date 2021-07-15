import React, { useState, useEffect } from "react";
import * as echarts from "echarts";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Wj() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const title = "今日园区违纪统计";
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
      name: "未戴安全帽",
      value: "9",
      classCall: "call1",
    },
    {
      name: "未戴口罩",
      value: "28",
      classCall: "call2",
    },
    {
      name: "脱岗",
      value: "1",
      classCall: "call3",
    },
    {
      name: "睡岗",
      value: "0",
      classCall: "call4",
    },
    {
      name: "其他",
      value: "3",
      classCall: "call5",
    }
  ];

  let initChart = () => {
    let element = document.getElementById("main");
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
              offset: 0,
              color: "#ae64ff", // 0% 处的颜色
            },
            {
              offset: 0.51,
              color: "#830eff", // 100% 处的颜色
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
              offset: 0.21,
              color: "#ff91b0", // 0% 处的颜色
            },
            {
              offset: 0.58,
              color: "#ff4fae", // 100% 处的颜色
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
        }
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
          data: [
            { value: 42 },
            { value: 37 },
            { value: 23 },
            { value: 12 },
            { value: 11 }
          ],
        },
      ],
    };
    myChart.setOption(option);
  };

  useEffect(() => {
    initChart();
  }, [top_count]);

  return (
    <div className="mj_box9">
      <div className="mj_t">
        <span className="mj_close"></span>
        <span className="mj_title">{title}</span>
      </div>
      <div className="bread_box">
        <div className="bg_box">
          {/* 饼图在这里 */}
          <div id={"main"} className="tu" style={{ height: 130 }}></div>
          <div className="bread_title">
            <div className="bread_t">41</div>
            <div className="bread_b">违纪总数</div>
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
                <div className="bg_bot">{item.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Wj;
