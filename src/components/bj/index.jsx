import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Bj() {
  const top_count = useMappedState((state) => state.top_navigation_count);
  const [timeNow, setTime] = useState();

  const title = "实时报警列表";
  const bjData = [
    {
      name: "陌生人",
      pic: "tou",
      what: "未处理",
      time: timeNow,//时间需要跟随
      where: "园区西门1门BH19201",
      isHere: "yes",
    },
    {
      name: "未戴口罩",
      pic: "tou",
      what: "已处理",
      time: timeNow,
      where: "园区西门1门BH19201",
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
    setTimeout(showtime, 1000);
  };

  useEffect(() => {showtime()}, [top_count]);

  return (
    <div className="bj_boxx">
      <div className="bj_t">
        <span className="bj_close"></span>
        <span className="bj_title">{title}</span>
      </div>
      <div className="bj_con">
        {bjData.map((item, index) => {
          return (
            <div key={index} className="bj_top">
              <div className={item.name == "陌生人" ? "t_name t_mo" : "t_name"}>
                {item.name}
              </div>
              <div className="t_con">
                <img
                  className="t_tou"
                  src={
                    require("../../assets/tongwei/" + item.pic + ".png").default
                  }
                  alt=""
                />
                <div className="t_right">
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Bj;
