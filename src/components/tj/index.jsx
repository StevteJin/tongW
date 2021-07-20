import React, { useState, useEffect } from "react";
import * as echarts from "echarts";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";
import { useLocation } from "react-router-dom";
import { getWater24Consume, getElectric24consume, getDirtyWaterOut24consume, getalldata } from "../../api/mainApi";


function Tj() {
  const [water24Consume, setWater24Consume] = useState();
  const [electric24consume, setElectric24consume] = useState();
  const [dirtyWaterOut24consume, setDirtyWaterOut24consume] = useState();
  const [index1,setIndex1] = useState(1)
  const [index2,setIndex2] = useState(2)
  const [index3,setIndex3] = useState(3)
  const top_count = useMappedState((state) => state.top_navigation_count);
  const { pathname } = useLocation(); //存储当前路由地址`
  const title = "统计";
  //近24小时园区用水量统计
  let initChart1 = (time,data) => {
    let element = document.getElementById("main1");
    let myChart = echarts.init(element);
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
        // data: [
        //   "00:00",
        //   "03:00",
        //   "06:00",
        //   "09:00",
        //   "12:00",
        //   "15:00",
        //   "18:00",
        //   "21:00",
        //   "24:00",
        // ],
        data:time
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
          name: "用水量",
          type: "line",
          smooth: true, //圆润
          symbol: "none", //不要圈
          stack: "总量",
          // data: [800, 830, 840, 978, 1000, 987, 876, 850, 800],
          data:data,
          color: ["#216CFF"],
        }
      ],
    };
    myChart.setOption(option);
  };

  //近24H园区用电量统计
  let initChart2 = (time,data) => {
    let element = document.getElementById("main2");
    let myChart = echarts.init(element);
    let option = {
      xAxis: {
        type: "category",
        // data: [
        //   "00:00",
        //   "03:00",
        //   "06:00",
        //   "09:00",
        //   "12:00",
        //   "15:00",
        //   "18:00",
        //   "21:00",
        //   "24:00",
        // ],
        data:time,
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

        left: "10%",

        right: "10%",

        bottom: "10%",
      },
      series: [
        {
          // data: [200, 195, 185, 180, 176, 180, 176, 200, 200],
          data:data,
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

  //近24H园区污水排放量统计
  let initChart3 = (time,data) => {
    let element = document.getElementById("main3");
    let myChart = echarts.init(element);
    let option = {
      xAxis: {
        type: "category",
        // data: [
        //   "00:00",
        //   "03:00",
        //   "06:00",
        //   "09:00",
        //   "12:00",
        //   "15:00",
        //   "18:00",
        //   "21:00",
        //   "24:00",
        // ],
        data:time,
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

        right: "10%",

        bottom: "10%",
      },
      series: [
        {
          // data: [600, 678, 757, 750, 800, 754, 643, 600, 765],
          data:data,
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
    getWater24Consume().then((res)=>{
      if(res.code==0){
        setWater24Consume(res.data);
        setIndex1(2);
        let waterTime1=[];
        let waterData1=[];
        water24Consume.map((item,index)=>{
          waterTime1.push(item.time);
          waterData1.push(item.count);
        })
        initChart1(waterTime1,waterData1);
      }
    }).catch(err=>{
      console.log(err);
    });
    getElectric24consume().then((res)=>{
      if(res.code==0){
        setElectric24consume(res.data);
        setIndex2(3);
        let waterTime2=[];
        let waterData2=[];
        electric24consume.map((item,index)=>{
          waterTime2.push(item.time);
          waterData2.push(item.count);
        })
        initChart2(waterTime2,waterData2);
      }
    }).catch(err=>{
      console.log(err);
    });
    getDirtyWaterOut24consume().then((res)=>{
      if(res.code==0){
        setDirtyWaterOut24consume(res.data);
        setIndex3(4);
        let waterTime3=[];
        let waterData3=[];
        dirtyWaterOut24consume.map((item,index)=>{
          waterTime3.push(item.time);
          waterData3.push(item.count);
        })
        initChart3(waterTime3,waterData3);
      }
    }).catch(err=>{
      console.log(err);
    });
    getalldata();
  }, [index1,index2,index3]);

  return (
    <div className="tj_box">
      <div className="tj_tu">
        <div className="tj_t">
          <span className="tj_close"></span>
          <span className="tj_title">近24小时园区用水量统计</span>
        </div>
        <div className="tu tu1">
          <div id={"main1"} style={{ height: 200 }}></div>
        </div>
      </div>
      <div className="tj_tu">
        <div className="tj_t">
          <span className="tj_close"></span>
          <span className="tj_title">近24H园区用电量统计</span>
        </div>
        <div className="tu tu2">
          <div id={"main2"} style={{ height: 200 }}></div>
        </div>
      </div>
      <div className="tj_tu">
        <div className="tj_t">
          <span className="tj_close"></span>
          <span className="tj_title">近24H园区污水排放量统计</span>
        </div>
        <div className="tu3">
          <div id={"main3"} style={{ height: 200 }}></div>
        </div>
      </div>
    </div>
  );
}
export default Tj;
