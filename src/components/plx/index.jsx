import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Plx() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const title = "今日报警类型统计";
  const fenleiData = [
    { name: "陌生人", value: "18" },
    { name: "访客非法闯入", value: "14" },
    { name: "未带口罩", value: "11" },
    { name: "翻越闸机", value: "11" },
    { name: "踩草坪", value: "8" },
    { name: "未戴安全帽", value: "5" },
    { name: "打架斗殴", value: "3" },
    { name: "物品滞留", value: "2" },
    { name: "其他", value: "1" },
  ];

  useEffect(() => {}, [top_count]);

  return (
    <div className="fen_box2">
      <div className="fen_t">
        <span className="fen_close"></span>
        <span className="fen_title">{title}</span>
      </div>
      
    </div>
  );
}
export default Plx;
