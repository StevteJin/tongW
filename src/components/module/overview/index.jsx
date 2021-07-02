//园区总览
import React, { useRef, useState } from "react";
//今日数量统计
import Todaynum from "../../todaynum";
//访客非法闯入
import Feifa from "../../feifa";
//通威大道门禁抓拍
import Entranceguard from "../../entranceGuard";

import "./style.scss";
export default function Overview() {
  return (
    <div>
      <div className="a1">
        <Feifa />
      </div>
      <div className="a2">
        <Entranceguard />
      </div>
      {/* <div className="today_num">
        <Todaynum />
      </div> */}
    </div>
  );
}
