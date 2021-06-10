//园区总览
import React, { useRef, useState } from "react";
//今日数量统计
import Todaynum from "../../todaynum";

import "./style.scss";
export default function Overview() {
  return (
    <div>
      <div className="today_num">
        <Todaynum />
      </div>
    </div>
  );
}
