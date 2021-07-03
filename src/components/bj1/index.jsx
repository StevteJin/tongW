import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Bj1() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const title = "实时报警";
  const bjData = [
    {
      name: "车辆超速",
      who: "川A1234",
      spic: "scar",
      snam: "就",
      pic: "che",
      what: "未处理",
      time: "2021-09-09 19:09:32",
      where: "园区西门1门BH19201",
      isHere: "yes",
    },
    {
      name: "车辆超速",
      who: "川A1234",
      spic: "scar",
      snam: "就",
      pic: "che",
      what: "未处理",
      time: "2021-09-09 19:09:32",
      where: "园区西门1门BH19201",
      isHere: "yes",
    },
    {
      name: "车辆超速",
      who: "川A1234",
      spic: "scar",
      snam: "就",
      pic: "che",
      what: "未处理",
      time: "2021-09-09 19:09:32",
      where: "园区西门1门BH19201",
      isHere: "yes",
    },
    {
      name: "车辆超速",
      who: "川A1234",
      spic: "scar",
      snam: "就",
      pic: "che",
      what: "未处理",
      time: "2021-09-09 19:09:32",
      where: "园区西门1门BH19201",
      isHere: "yes",
    },
    {
      name: "车辆超速",
      who: "川A1234",
      spic: "scar",
      snam: "就",
      pic: "che",
      what: "未处理",
      time: "2021-09-09 19:09:32",
      where: "园区西门1门BH19201",
      isHere: "yes",
    },
    {
      name: "车辆超速",
      who: "川A1234",
      spic: "scar",
      snam: "就",
      pic: "che",
      what: "未处理",
      time: "2021-09-09 19:09:32",
      where: "园区西门1门BH19201",
      isHere: "yes",
    },
  ];

  useEffect(() => {}, [top_count]);

  return (
    <div className="bj_box">
      <div className="bj_t">
        <span className="bj_close"></span>
        <span className="bj_title">{title}</span>
      </div>
      <div className="bj_con">
        {bjData.map((item, index) => {
          return (
            <div key={index} className="bj_top">
              <div className={item.name == "陌生人" ? "t_name t_mo" : "t_name"}>
                <div className="who">{item.who}</div>
                <div className="name">{item.name}</div>
              </div>
              <div className="t_con">
                <div className="t_right">
                  <div className="t_time">
                    <img
                      src={require("../../assets/tongwei/scar.png").default}
                      alt=""
                    />
                    <span>{item.snam}</span>
                  </div>
                  <div className="t_time">
                    <img
                      src={require("../../assets/tongwei/time.png").default}
                      alt=""
                    />
                    <span>{item.time}</span>
                  </div>
                  <div className="t_where">
                    <img
                      src={require("../../assets/tongwei/where.png").default}
                      alt=""
                    />
                    <span>{item.where}</span>
                  </div>
                  <div className="t_what">
                    <img
                      src={require("../../assets/tongwei/chuli.png").default}
                      alt=""
                    />
                    <span className={item.what == "未处理" ? "red" : "green"}>
                      {item.what}
                    </span>
                  </div>
                </div>
                <img
                  className="t_tou"
                  src={
                    require("../../assets/tongwei/" + item.pic + ".png").default
                  }
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Bj1;
