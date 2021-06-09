import React, { useState, useEffect } from "react";
import * as echarts from "echarts";
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
      value: "1490",
      classCall: "call1",
    },
    {
      name: "门岗2",
      value: "843",
      classCall: "call2",
    },
    {
      name: "门岗3",
      value: "387",
      classCall: "call3",
    },
    {
      name: "门岗4",
      value: "319",
      classCall: "call4",
    },
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
        {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.23,
              color: "#6ccaff", // 0% 处的颜色
            },
            {
              offset: 0.91,
              color: "#1184ff", // 100% 处的颜色
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
              offset: 0.29,
              color: "#21ffde", // 0% 处的颜色
            },
            {
              offset: 0.85,
              color: "#05fbaf", // 100% 处的颜色
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
              offset: 0.29,
              color: "#ae65ff", // 0% 处的颜色
            },
            {
              offset: 0.85,
              color: "#830fff", // 100% 处的颜色
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
          data: [
            { value: 1490 },
            { value: 843 },
            { value: 387 },
            { value: 319 },
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
      <div className="bread_box">
        <div className="bg_box">
          {/* 饼图在这里 */}
          <div id={"main"} className="tu" style={{ height: 130 }}></div>
          <div className="bread_title">
            <div className="bread_t">3039</div>
            <div className="bread_b">门岗刷脸</div>
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
export default Mj;
