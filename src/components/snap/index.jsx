import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Snap() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const title = "实时人脸抓拍列表";
  const snapData = [
    {
      name: "张学李(12452)",
      pic: "tou",
      what: "生产管理部门",
      time: "2021-09-09 19:09:32",
      where: "园区西门1门BH19201",
      isHere: "yes",
    },
    {
      name: "陌生人",
      pic: "tou",
      time: "2021-09-09 19:09:32",
      where: "园区西门1门BH19201",
      isHere: "no",
    },
    {
      name: "王学李(12452)",
      pic: "tou",
      what: "生产管理部门",
      time: "2021-09-09 19:09:32",
      where: "园区西门1门BH19201",
      isHere: "yes",
    },
    {
      name: "陌生人",
      pic: "tou",
      time: "2021-09-09 19:09:32",
      where: "园区西门1门BH19201",
      isHere: "no",
    },
    {
      name: "金学李(12452)",
      pic: "tou",
      what: "生产管理部门",
      time: "2021-09-09 19:09:32",
      where: "园区西门1门BH19201",
      isHere: "yes",
    },
  ];

  useEffect(() => {}, [top_count]);

  return (
    <div className="snap_box">
      <div className="snap_t">
        <span className="snap_close"></span>
        <span className="snap_title">{title}</span>
      </div>
      <div className="snap_con">
        {snapData.map((item, index) => {
          return item.isHere == "yes" ? (
            <div key={index} className="snap_top">
              <div className="t_name">{item.name}</div>
              <div className="t_con">
                <img
                  className="t_tou"
                  src={
                    require("../../assets/tongwei/" + item.pic + ".png").default
                  }
                  alt=""
                />
                <div className="t_right">
                  <div className="t_what">
                    <img
                      src={require("../../assets/tongwei/chan.png").default}
                      alt=""
                    />
                    <span>{item.what}</span>
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
                </div>
              </div>
            </div>
          ) : (
            <div key={index} className="snap_bot">
              <img
                className="bot_tou"
                src={
                  require("../../assets/tongwei/" + item.pic + ".png").default
                }
                alt=""
              />
              <div className="bot_right">
                <div>{item.name}</div>
                <div>
                  <img src="" alt="" />
                  <span>{item.time}</span>
                </div>
                <div>
                  <img src="" alt="" />
                  <span>{item.where}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Snap;
