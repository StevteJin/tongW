import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Nnsnap() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const title = "通道闸机实时抓拍列表";
  const nsnapData = [
    {
      name: "张学李(12452)",
      pic: "P4",
      what: "生产管理部门",
      time: "2021-09-09 19:09:32",
      where: "园区西门1门BH19201",
      isHere: "yes",
    },
    {
      name: "王学李(12452)",
      pic: "P3",
      what: "生产管理部门",
      time: "2021-09-09 19:09:32",
      where: "园区西门1门BH19201",
      isHere: "yes",
    }
  ];

  useEffect(() => {}, [top_count]);

  return (
    <div className="nsnap_box">
      <div className="nsnap_t">
        <span className="nsnap_close"></span>
        <span className="nsnap_title">{title}</span>
      </div>
      <div className="nsnap_con">
        {nsnapData.map((item, index) => {
          return item.isHere == "yes" ? (
            <div key={index} className="nsnap_top">
              <div className="t_name">{item.name}</div>
              <div className="t_con">
                <img
                  className="t_tou"
                  src={
                    require("../../assets/tongwei/RRR/" + item.pic + ".png").default
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
            <div key={index} className="nsnap_bot">
              <img
                className="bot_tou"
                src={
                  require("../../assets/tongwei/RRR/" + item.pic + ".png").default
                }
                alt=""
              />
              <div className="bot_right">
                <div className="bot_name">{item.name}</div>
                <div className="bot_time bot_same">
                  <img src={require("../../assets/tongwei/time.png").default} alt="" />
                  <span>{item.time}</span>
                </div>
                <div className="bot_where bot_same">
                  <img src={require("../../assets/tongwei/where.png").default} alt="" />
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
export default Nnsnap;
