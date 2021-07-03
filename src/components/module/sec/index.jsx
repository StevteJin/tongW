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
import Bowen from "../../bowen";
//今日设备在线情况
import Online from "../../online";
//今日超速车辆统计
import Cscar from "../../cscar";
//今日报警类型统计(车)
import Lx from "../../lx";

//车辆实时报警
import Bj1 from "../../bj1";
//周界报警
import Zj from "../../zj";

import "./style.scss";
export default function Sec() {
  return (
    <div>
      <div className="z1">
        <Zj />
      </div>
      <div className="sec_left">
        <div>
          <Online />
        </div>
        <div>
          <Cscar />
        </div>
      </div>
      <div className="sec_right">
        <div className="lx">
          <Lx />
        </div>
        <div className="bj1">
          <Bj1 />
        </div>
      </div>
    </div>
  );
}
