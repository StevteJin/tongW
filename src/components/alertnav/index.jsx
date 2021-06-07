import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Alertnav() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const alertName = [
    {
      key: 1,
      value: "访客非法闯入",
    },
    {
      key: 2,
      value: "通威大道门禁HB18920NH",
    },
    {
      key: 3,
      value: "今日数据统计",
    },
  ];
  useEffect(() => {}, [top_count]);

  return (
    <div className="alert_box">
      <div className="title">我是弹窗组件集合</div>
      <ul>
        {alertName.map((item, index) => {
          return <li key={index}>{item.value}</li>;
        })}
      </ul>
    </div>
  );
}
export default Alertnav;
