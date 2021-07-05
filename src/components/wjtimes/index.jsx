import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Wjtimes() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const title = "今日人员违纪次数统计";
  const timesData = [
    { name: "刘本元", where: "机身制造部", times: "4次" },
    { name: "陈梅心", where: "行政部门", times: "3次" },
    { name: "刘二", where: "机身制造部", times: "5次" },
    { name: "郑新", where: "机身制造部", times: "2次" },
    { name: "刘三", where: "机身制造部", times: "1次" }
  ];

  useEffect(() => {}, [top_count]);

  return (
    <div className="wjtimes_box">
      <div className="wjtimes_t">
        <span className="wjtimes_close"></span>
        <span className="wjtimes_title">{title}</span>
      </div>
      <div className="wjtimes_con">
        <div className="bot_title">
          <span className="bot_l">人员姓名</span>
          <span className="bot_c">部门</span>
          <span className="bot_r">违纪次数</span>
        </div>
        {timesData.map((item,index)=>{
          return(
            <div className="bot_con" key={index}>
              <span className="con_l">{item.name}</span>
              <span className="con_c">{item.where}</span>
              <span className="con_r">{item.times}</span>
            </div>
          )
        })}
      </div>
    </div>
  );
}
export default Wjtimes;
