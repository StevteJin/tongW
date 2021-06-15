//智慧管理
import React, { useRef, useState } from "react";
//今日园区违纪统计
import Wj from "../../wj";
//今日人员违纪次数统计
import Wjtimes from "../../wjtimes";
//今日访客滞留统计
import Zl from "../../zl";
//今日园区人员巡更统计
import Xg from "../../xg";
//实时报警列表
import Bj from "../../bj";
//今日报警类型统计(人的)
import Plx from "../../plx";
//今日人员异常出入统计  
import Yc from "../../yc";

import "./style.scss";
export default function Management() {
  return (
    <div className="perx">
      <div className="perx_top">
        <div className="perx_left">
          <div className="wj">
            <Wj />
          </div>
          <div className="wjtimes">
            <Wjtimes />
          </div>
          <div className="zl">
            <Zl />
          </div>
          <div className="yc">
            <Yc />
          </div>
        </div>
        <div className="perx_right">
          <div className="xg">
            <Xg />
          </div>
          <div className="plx">
            <Plx />
          </div>
          <div className="bj">
            <Bj />
          </div>
        </div>
      </div>
    </div>
  );
}
