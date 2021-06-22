import React, { useState, useEffect } from "react";
import * as echarts from "echarts";
// 水波图
import "echarts-liquidfill";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Bowen() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const title = "今日停车位统计";
  const bwData = [
    {
      name: "车位总数",
      value: 567,
    },
    {
      name: "剩余车位数",
      value: 135,
    },
  ];

  let initChart = () => {
    let element = document.getElementById("mainb");
    let myChart = echarts.init(element);
    //环形图参数
    let option = {
      // 提示框组件
      tooltip: {
        trigger: "item", // 触发类型, 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
        textStyle: {
          color: "#fff", // 文字颜色
        },
        // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
        // 水球图: {a}（系列名称），{b}（无），{c}（数值）
        // 使用函数模板   传入的数据值 -> value: number|Array,
        formatter: function (value) {
          return value.seriesName + ": " + value.data * 100 + "%";
        },
      },
      series: [
        {
          type: "liquidFill",
          name: "", // 系列名称，用于tooltip的显示，legend 的图例筛选
          radius: "70%", // 水球图的半径
          center: ["50%", "50%"], // 水球图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标
          // 水填充图的形状 circle 默认圆形  rect 圆角矩形  triangle 三角形
          // diamond 菱形  pin 水滴状 arrow 箭头状  还可以是svg的path
          shape: "circle",
          phase: 0, // 波的相位弧度 不设置  默认自动
          direction: "right", // 波浪移动的速度  两个参数  left 从右往左 right 从左往右
          outline: {
            show: true,
            borderDistance: 0, // 边框线与图表的距离 数字
            itemStyle: {
              opacity: 1, // 边框的透明度   默认为 1
              borderWidth: 1, // 边框的宽度
              shadowBlur: 1, // 边框的阴影范围 一旦设置了内外都有阴影
              shadowColor: "#0052FA", // 边框的阴影颜色,
              borderColor: "rgb(104,140,182)", // 边框颜色
            },
          },
          // 图形样式
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 1,
              x2: 0,
              y2: 0,
              colorStops: [
                {
                  offset: 1,
                  color: ["rgba(4,197,173, 1)"], // 0% 处的颜色
                },
                {
                  offset: 0,
                  color: ["rgba(17,68,138, 0.6)"], // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            }, // 水球显示的背景颜色
            opacity: 1, // 波浪的透明度
            shadowBlur: 10, // 波浪的阴影范围
          },
          color: {
            type: "linear",
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [
              {
                offset: 1,
                color: ["rgba(32, 240, 242, 1)"], // 0% 处的颜色
              },
              {
                offset: 0,
                color: ["rgba(65, 141, 235, 0.8)"], // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
          backgroundStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                {
                  offset: 1,
                  color: ["rgba(31,69,116, 0.2)"], // 0% 处的颜色
                },
                {
                  offset: 0,
                  color: ["rgba(39,76,124, 0.8)"], // 100% 处的颜色
                },
              ],
            },
          },
          // 图形的高亮样式
          emphasis: {
            itemStyle: {
              opacity: 0.8, // 鼠标经过波浪颜色的透明度
            },
          },
          // 图形上的文本标签
          label: {
            fontSize: 20,
            fontWeight: 400,
            color: "#fff",
          },
          // data: [0.50] // 系列中的数据内容数组
          data: [Number(53) / 100],
        },
      ],
    };
    myChart.setOption(option);
  };

  useEffect(() => {
    initChart();
  }, [top_count]);

  return (
    <div className="bowen">
      <div className="mj_t">
        <span className="mj_close"></span>
        <span className="mj_title">{title}</span>
      </div>
      <div className="bread_box">
        <div className="bg_box">
          {/* 饼图在这里 */}
          <div id={"mainb"} className="tu" style={{ height: 120 }}></div>
          <div className="bread_title">
            <div className="bread_b">任务总数</div>
          </div>
        </div>
        <div className="bo_bt">
          {bwData.map((item, index) => {
            return (
              <div key={index} className="bo">
                <div className="bo_name">{item.name}</div>
                <div className="bo_value">{item.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Bowen;
