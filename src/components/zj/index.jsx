import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Zj() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const title = "违停";
  const ffData = {
    time: "2021-09-09 19:09:32",
    where: "升旗广场南面",
    pic: "cs",
  };

  useEffect(() => {}, [top_count]);

  return (
    <div className="zj_box">
      <div className="fei_title">
        <span className="t_title">{title}</span>
        <span className="t_close"></span>
      </div>
      <div className="fei_content">
        <img
          className="fei_tou"
          src={require("../../assets/tongwei/" + ffData.pic + ".png").default}
          alt=""
        />
        <div className="fei_right">
          <div className="right_con">
            <img
              src={require("../../assets/tongwei/time.png").default}
              alt=""
            />
            <span>{ffData.time}</span>
          </div>
          <div className="right_con">
            <img
              src={require("../../assets/tongwei/where.png").default}
              alt=""
            />
            <span>{ffData.where}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Zj;
