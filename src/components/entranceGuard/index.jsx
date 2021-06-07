import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Entranceguard() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const title = "通威大道门禁HB18920NH";
  const menjin = [
    { name: "点位用途", value: "通威大道西街道" },
    { name: "所在位置", value: "信息监察部门" },
    { name: "所属部门", value: "人脸抓拍" },
  ];
  useEffect(() => {}, [top_count]);

  return (
    <div className="mjbox">
      <div className="close"></div>
      <div className="title">{title}</div>
      <div className="content">
        {menjin.map((item, index) => {
          return (
            <div key={index}>
              <span className="left">{item.name} :</span>
              <span className="right">{item.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Entranceguard;
