import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Zl() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const title = "今日访客滞留统计";
  const zlData = [
    {
      name: "史小龙",
      id: "3333333******22444",
      name1: "访客入园时间：",
      value1: "2021-07-15  09:00:00",
      name2: "预计离开时间：",
      value2: "2021-07-15  12:00:00",
      note: "超时180分钟",
    },
    {
      name: "赵亮",
      id: "3333333******22444",
      name1: "访客入园时间：",
      value1: "2021-07-15  09:00:00",
      name2: "预计离开时间：",
      value2: "2021-07-15  12:00:00",
      note: "超时180分钟",
    },
  ];

  useEffect(() => {}, [top_count]);

  return (
    <div className="zl_box">
      <div className="zl_t">
        <span className="zl_close"></span>
        <span className="zl_title">{title}</span>
      </div>
      <div className="zl_con">
        {
          zlData.map((item,index)=>{
            return(
              <div key={index} className="zl_text">
                <div className="note">{item.note}</div>
                <div className="zl1">
                  <span className="zllt">{item.name}</span>
                  <span className="zlrt">{item.id}</span>
                </div>
                <div className="zl2">
                  <span className="zllt">{item.name1}</span>
                  <span className="zlrt">{item.value1}</span>
                </div>
                <div className="zl3">
                  <span className="zllt">{item.name2}</span>
                  <span className="zlrt">{item.value2}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
export default Zl;
