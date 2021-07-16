import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Snap() {
  const top_count = useMappedState((state) => state.top_navigation_count);
  const [timeNow, setTime] = useState();

  const title = "实时人脸抓拍列表";
  const snapData = [
    {
      name: "刘维维",
      pic: "1",
      what: "生产管理部门",
      time: timeNow,//这个时间需要跟随变动
      where: "西区前台",
      isHere: "yes",
    },
    {
      name: "陌生人",
      pic: "2",
      time: timeNow,
      where: "行政楼办公室楼梯间",
      isHere: "no",
    },
    {
      name: "李孝勇",
      pic: "3",
      what: "生产管理部门",
      time: timeNow,
      where: "东区二号辅房",
      isHere: "yes",
    },
  ];

  const showtime = () => {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    var time =
      year +
      "-" +
      month +
      "-" +
      day +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds +
      " "
    setTime(time);
    // setTimeout(showtime, 1000);
  };
  useEffect(() => {showtime()}, [top_count]);

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
                <div className="t_tou">
                  <img
                    src={
                      require("../../assets/tongwei/" + item.pic + ".png")
                        .default
                    }
                    alt=""
                  />
                </div>
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
              <div className="bot_tou">
              <img
                src={
                  require("../../assets/tongwei/" + item.pic + ".png").default
                }
                alt=""
              />
              </div>
              <div className="bot_right">
                <div className="bot_name">{item.name}</div>
                <div className="bot_time bot_same">
                  <img
                    src={require("../../assets/tongwei/time.png").default}
                    alt=""
                  />
                  <span>{item.time}</span>
                </div>
                <div className="bot_where bot_same">
                  <img
                    src={require("../../assets/tongwei/where.png").default}
                    alt=""
                  />
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
