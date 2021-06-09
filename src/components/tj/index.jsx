import React, { useState, useEffect } from "react";
import * as echarts from "echarts";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Tj() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const title = "统计";

  let initChart1 = () => {
    let element = document.getElementById("main1");
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

  let initChart2 = () => {
    let element = document.getElementById("main2");
    let myChart = echarts.init(element);
    //环形图参数
    let option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
      ],
    };
    myChart.setOption(option);
  };

  let initChart3 = () => {
    let element = document.getElementById("main3");
    let myChart = echarts.init(element);
    //环形图参数
    let option = {
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          areaStyle: {},
        },
      ],
    };
    myChart.setOption(option);
  };

  useEffect(() => {
    initChart1();
    initChart2();
    initChart3();
  }, [top_count]);

  return (
    <div className="tj_box">
      <div className="tj_tu">
        <div className="tj_t">
          <span className="tj_close"></span>
          <span className="tj_title">近24小时人脸抓拍统计</span>
        </div>
        <div className="tu tu1">
          <div id={"main1"} style={{ height: 200 }}></div>
        </div>
      </div>
      <div className="tj_tu">
        <div className="tj_t">
          <span className="tj_close"></span>
          <span className="tj_title">近24H园区访客统计</span>
        </div>
        <div className="tu tu2">
          <div id={"main2"} style={{ height: 200 }}></div>
        </div>
      </div>
      <div className="tj_tu">
        <div className="tj_t">
          <span className="tj_close"></span>
          <span className="tj_title">近24H园区人流量统计</span>
        </div>
        <div className="tu3">
          <div id={"main3"} style={{ height: 200 }}></div>
        </div>
      </div>
    </div>
  );
}
export default Tj;
