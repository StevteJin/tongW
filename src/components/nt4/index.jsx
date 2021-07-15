import React, { useState, useEffect } from "react";
import * as echarts from "echarts";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";
import { useLocation } from "react-router-dom";

function Nt4() {
  const top_count = useMappedState((state) => state.top_navigation_count);
  const { pathname } = useLocation(); //存储当前路由地址`
  const title = "统计";
  const nt2 = [
    {
      name: "招标部",
      value: "42",
      classCall: "call1",
    },
    {
      name: "采购部",
      value: "37",
      classCall: "call2",
    },
    {
      name: "计划部",
      value: "23",
      classCall: "call3",
    },
    {
      name: "信息部",
      value: "12",
      classCall: "call4",
    },
    {
      name: "生产部",
      value: "11",
      classCall: "call5",
    },
    {
      name: "其他",
      value: "37",
      classCall: "call6",
    },
  ];

  //近24小时人脸抓拍统计
  let initChart1 = () => {
    let element = document.getElementById("main1");
    let myChart = echarts.init(element);
    let option = {
      tooltip: {
        trigger: "axis",
      },
      // legend: {
      //   data: ['公司人数', '非公司人数'],
      //   textStyle: {
      //     color: "#fff",
      //     fontSize: 10,
      //   },
      // },
      grid: {
        left: "8%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
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
        },
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

        left: "5%",

        right: "5%",

        bottom: "10%",
      },
      series: [
        {
          name: "公司人数",
          type: "line",
          stack: "总量",
          data: [400, 15, 17, 380, 800, 18, 400, 18, 370],
          color: ["#FFC34B"],
        },
        {
          name: "非公司人数",
          type: "line",
          stack: "总量",
          data: [100, 5, 3, 120, 200, 3, 200, 13, 130],
          color: ["#216CFF"],
        },
      ],
    };
    myChart.setOption(option);
  };

  //近24H园区访客统计
  let initChart2 = () => {
    let element = document.getElementById("main2");
    let myChart = echarts.init(element);
    let option = {
      xAxis: {
        type: "category",
        data: [
          "00:00",
          "03:00",
          "06:00",
          "10:00",
          "11:00",
          "13:30",
          "15:30",
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
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          interval: 0,
          textStyle: {
            color: "#fff",
            fontSize: 10,
          },
        },
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

        right: "10%",

        bottom: "10%",
      },
      series: [
        {
          data: [0, 0, 0, 56, 57, 74, 78, 0, 0],
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

  //近24H园区人流量统计
  let initChart3 = () => {
    let element = document.getElementById("main3");
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
        },
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

        right: "10%",

        bottom: "10%",
      },
      series: [
        {
          data: [500, 20, 20,500, 1000, 20, 600, 20, 500],
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

  //今日各部门访问情况
  let initChart4 = () => {
    let element = document.getElementById("main4");
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
              color: "#969696", // 0% 处的颜色
            },
            {
              offset: 0.88,
              color: "#969696", // 100% 处的颜色
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
            { value: 42 },
            { value: 37 },
            { value: 23 },
            { value: 12 },
            { value: 11 },
            { value: 37 }
          ],
        },
      ],
    };
    myChart.setOption(option);
  };

  useEffect(() => {
    initChart1();
    initChart2();
    initChart3();
    initChart4();
  }, [top_count]);

  return (
    <div className="nt4_box">
      <div className="nt4_tu">
        <div className="nt4_t">
          <span className="nt4_close"></span>
          <span className="nt4_title">近24小时人脸抓拍统计</span>
        </div>
        <div className="tu tu1">
          <div id={"main1"} style={{ height: 200 }}></div>
        </div>
      </div>
      <div className="nt4_tu">
        <div className="nt4_t">
          <span className="nt4_close"></span>
          <span className="nt4_title">近24H园区访客统计</span>
        </div>
        <div className="tu tu2">
          <div id={"main2"} style={{ height: 200 }}></div>
        </div>
      </div>
      <div className="nt4_tu">
        <div className="nt4_t">
          <span className="nt4_close"></span>
          <span className="nt4_title">近24H园区人流量统计</span>
        </div>
        <div className="tu3">
          <div id={"main3"} style={{ height: 200 }}></div>
        </div>
      </div>
      <div className="nt4_tu">
        <div className="nt4_t">
          <span className="nt4_close"></span>
          <span className="nt4_title">今日各部门访问情况</span>
        </div>
        <div className="tu4">
          <div className="bread_box">
            <div className="bg_box">
              {/* 饼图在这里 */}
              <div id={"main4"} className="tu" style={{ height: 130 }}></div>
              <div className="bread_title">
                <div className="bread_t">162</div>
                <div className="bread_b">访客总数</div>
              </div>
            </div>
            <div className="bg_right">
              {nt2.map((item, index) => {
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
      </div>
    </div>
  );
}
export default Nt4;
