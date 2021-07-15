import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Chaosu() {
  const top_count = useMappedState((state) => state.top_navigation_count);
  const [timeNow, setTime] = useState();

  const title = "车辆超速";
  const ffData = {
    time: timeNow,//时间需要跟随
    where: "升旗广场北面",
    pic: "che",
    who: "川A·12345",
  };

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
    <div className="fei_box">
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
          <div className="che">{ffData.who}</div>
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
export default Chaosu;
