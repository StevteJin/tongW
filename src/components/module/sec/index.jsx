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
//今日设备在线情况
import Online from "../../online"

import "./style.scss";
export default function Sec() {
  return (
    <div>
      <Online />
    </div>
  );
}
