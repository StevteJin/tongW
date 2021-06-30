//实时车辆
import React, { useRef, useState } from "react";
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
import Bowen from "../../bowen"
// 底部页脚三个统计图
import Tj from "../../tj";

//气泡
import Qp1 from "../../qp1";

import "./style.scss";
export default function Hvac() {
  return (
    <div>
      <div className="perx_bot">
        <Tj />
      </div>
      <Qp1 />
    </div>
  );
}
