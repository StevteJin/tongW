//实时车辆
import React, { useRef, useState, useEffect } from "react";
import {  getalldata } from "../../../api/mainApi";
//今日数量统计
import Todaynum from "../../todaynum";
//今日入园车辆统计
import Cl from "../../cl";
//近24小时入园车辆统计
import Rucar from "../../rucar";
//今日出入口通行分布
import Toxi from "../../toxi";
//今日无人叉车统计
import Chache from "../../chache";
//今日停车位统计（波纹图）
import Bowen from "../../bowen";
// 底部页脚三个统计图
import Tj from "../../tj";

//气泡
import Qp1 from "../../qp1";
import Qp2 from "../../qp2";
import Qp3 from "../../qp3";
import Qp4 from "../../qp4";
import Qp5 from "../../qp5";
import Qp6 from "../../qp6";
import Qp7 from "../../qp7";

import "./style.scss";
export default function Hvac() {
  //厂区入水口
  const [type1Data, setType1Data] = useState();
  //110电站
  const [type2Data, setType2Data] = useState();
  //U1动力站
  const [type3Data, setType3Data] = useState();
  //W1污水站
  const [type4Data, setType4Data] = useState();
  //U1纯水站
  const [type5Data, setType5Data] = useState();
  //特气站
  const [type6Data, setType6Data] = useState();
  //A1车间
  const [type7Data, setType7Data] = useState();

  const [t1,setT1] = useState(1);
  const [t2,setT2] = useState(2);
  const [t3,setT3] = useState(3);
  const [t4,setT4] = useState(4);
  const [t5,setT5] = useState(5);
  const [t6,setT6] = useState(6);
  const [t7,setT7] = useState(7);

  useEffect(() => {
    getalldata().then((res)=>{
      if(res.code==0){
        let data=res.data;
        data.map((item,index)=>{
          if(item.workShopName=="厂区入水口"){
            setType1Data(item.targets);
            setT1(2)
          }else if(item.workShopName=="110电站"){
            setType2Data(item.targets);
            setT2(3)
          }else if(item.workShopName=="U1动力站"){
            setType3Data(item.targets);
            setT3(4)
          }else if(item.workShopName=="W1污水站"){
            setType4Data(item.targets);
            setT4(5)
          }else if(item.workShopName=="U1纯水站"){
            setType5Data(item.targets);
            setT5(6)
          }else if(item.workShopName=="特气站"){
            setType6Data(item.targets);
            setT6(7)
          }else if(item.workShopName=="A1车间"){
            setType7Data(item.targets);
            setT7(8)
          }
        })
      }
    }).catch(err=>{
      console.log(err);
    });
  },[t1,t2,t3,t4,t5,t6,t7])
  
  return (
    <div>
      <div className="perx_bot">
        <Tj />
      </div>
      {/* 厂区入水口 */}

      {/* 110电站 */}
      {/* U1动力站 */}
      {/* W1污水站 */}
      {/* U1纯水站 */}
      {/* 特气站 */}
      {/* A1车间 */}
      <Qp1 getT={type1Data}/>
      <Qp2 getT={type2Data} />
      <Qp3 getT={type3Data} />
      <Qp4 getT={type4Data} />
      <Qp5 getT={type5Data} />
      <Qp6 getT={type6Data} />
      <Qp7 getT={type7Data} />
    </div>
  );
}
