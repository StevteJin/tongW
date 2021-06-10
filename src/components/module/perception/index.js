//园区感知
import React, { useRef, useState } from "react";
//今日人员分类统计
import Fenlei from "../../fenlei";
//今日入园人数统计
import Ruyuan from "../../ruyuan";
//今日门禁人员统计
import Mj from "../../mj";
//实时人脸抓拍列表
import Snap from "../../snap";
// 底部页脚三个统计图
import Tj from "../../tj";

import "./style.scss";
export default function Perception() {
  return (
    <div className="perx">
      <div className="perx_top">
        <div className="perx_left">
          <div className="fl">
            <Fenlei />
          </div>
          <div className="ry">
            <Ruyuan />
          </div>
          <div className="mj">
            <Mj />
          </div>
        </div>
        <div className="perx_right">
          <Snap />
        </div>
      </div>
      <div className="perx_bot">
        <Tj />
      </div>
    </div>
  );
}
