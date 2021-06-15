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
import Chache from "../../Chache";

import "./style.scss";
export default function Cars() {
  return (
    <div>
      <div className="ru_car_box">
        <div className="ru">
          <Cl />
        </div>
        <div className="ru">
          <Rucar />
        </div>
        <div className="ru">
          <Toxi />
        </div>
        <div className="ru">
          <Chache />
        </div>
      </div>
    </div>
  );
}
