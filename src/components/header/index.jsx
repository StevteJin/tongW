import React, { useState, useEffect } from "react";
import { Checkbox } from "antd";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";
import { useLocation } from "react-router-dom";

function Header() {
  const [timeNow, setTime] = useState();
  const top_count = useMappedState((state) => state.top_navigation_count);
  const { pathname } = useLocation(); //存储当前路由地址`
  console.log("当前路由", pathname);
  const choiceName = [
    {
      key: 1,
      name: "entranceGuard",
      value: "门禁设备",
      url: "../../assets/tongwei/entranceGuard.png",
    },
    {
      key: 2,
      name: "videoEquipment",
      value: "视频设备",
      url: "../../assets/tongwei/videoEquipment.png",
    },
    {
      key: 3,
      name: "entranceAndExitEquipment",
      value: "出入口设备",
      url: "../../assets/tongwei/entranceAndExitEquipment.png",
    },
    {
      key: 4,
      name: "faceSnapper",
      value: "人脸抓拍机",
      url: "../../assets/tongwei/faceSnapper.png",
    },
    {
      key: 5,
      name: "ArEquipment",
      value: "AR设备",
      url: "../../assets/tongwei/ArEquipment.png",
    },
    {
      key: 6,
      name: "mountTheTest",
      value: "卡口测试",
      url: "../../assets/tongwei/mountTheTest.png",
    },
    {
      key: 7,
      name: "limitHighs",
      value: "限高点位",
      url: "../../assets/tongwei/limitHighs.png",
    },
    {
      key: 8,
      name: "noForklift",
      value: "无人叉车",
      url: "../../assets/tongwei/noForklift.png",
    },
    {
      key: 9,
      name: "individual",
      value: "单兵",
      url: "../../assets/tongwei/individual.png",
    },
    {
      key: 10,
      name: "heatMap",
      value: "热力图",
      url: "../../assets/tongwei/heatMap.png",
    },
  ];

  useEffect(() => {
    showtime();
  }, [pathname, top_count]);

  function getWeekDate() {
    var now = new Date();
    var day = now.getDay();
    var weeks = new Array(
      "星期日",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六"
    );
    var week = weeks[day];
    return week;
  }
  // move time
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
      " " +
      getWeekDate();
    setTime(time);
    setTimeout(showtime, 1000);
  };

  const onChange = (item, index) => {
    console.log("我点击了", item, index);
  };

  return (
    <div className="header">
      <div className="header_bg">
        <div className="headerTitle">
          {pathname == "/home/person" ? "园区智慧人员管控" : "园区智慧物资管控"}
        </div>
        <div className="header_time_user">
          <div className="time">
            <span>{timeNow}</span>
          </div>
        </div>
      </div>
      <div className="check_box">
        <ul>
          {choiceName.map((item, index) => {
            return (
              <li key={index}>
                <Checkbox onClick={() => onChange(item, index)}>
                  <span className="check_content">
                    <img
                      className="icon"
                      src={
                        require("../../assets/tongwei/" + item.name + ".png")
                          .default
                      }
                      alt=""
                    />
                    {item.value}
                  </span>
                </Checkbox>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Header;
