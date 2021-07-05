import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";
import { useLocation, useHistory } from "react-router-dom";
import { AlSocket } from "../../api/address";

function Footer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const bot_real_index = useMappedState((state) => state.bot_index);
  const real_nav_active = useMappedState((state) => state.nav_active);
  const { pathname } = useLocation(); //存储当前路由地址`
  console.log("我是当前路由", pathname, real_nav_active);
  console.log("socket地址", AlSocket);
  if (
    pathname != "/home/person" &&
    (real_nav_active != "cars" ||
      real_nav_active != "hvac" ||
      real_nav_active != "sec")
  ) {
  }
  // 导航
  const footerName = [
    {
      key: 1,
      name: "overview",
      value: "园区总览",
    },
    {
      key: 2,
      name: "perception",
      value: "园区感知",
    },
    {
      key: 3,
      name: "management",
      value: "智慧管理",
    },
  ];
  const footerName1 = [
    {
      key: 4,
      name: "cars",
      value: "实时车辆",
    },
    {
      key: 5,
      name: "hvac",
      value: "厂务管理",
    },
    {
      key: 6,
      name: "sec",
      value: "园区安防",
    },
  ];
  const handle_top = (item, index) => {
    console.log("点的哪个", index, item);
    dispatch({ type: "handleTop", bot_index: index });
    dispatch({ type: "changeActive", nav_active: item.name });
  };

  const alertPlay = () => {
    const webSocket = new WebSocket(AlSocket);

    webSocket.onopen = function (e) {
      console.log("通威 websocket is open:", "color: red;font-size:13px");
      // let json = {
      //   uuid: 1,
      // };

      // webSocket.send(JSON.stringify(json));
    };
    webSocket.onmessage = function (e) {
      console.log("返回的指令", e.data);
      // if(e.data){message.success(datamsg)}
      let command = e.data.command;
      /**
       * 001人员管控
       * 002物资管控
       * 1园区总览
       * 2园区感知
       * 3智慧管理
       * D人脸抓拍点位 D1取消
       * B门禁点位 B1取消
       * A视频/AR点位 A1取消
       * 4实时车辆
       * 5厂务管理
       * 6园区安防
       * E卡口测试 E1取消
       * C出入口点位 C1取消
       */

      switch (command) {
        case "001":
          history.push("/home/person");
          handle_top({ key: 1, name: "overview", value: "园区总览" }, 0);
          break;
        case "002":
          history.push("/home/things");
          handle_top({ key: 4, name: "cars", value: "实时车辆" }, 0);
          break;
        case "1":
          history.push("/home/person");
          handle_top({ key: 1, name: "overview", value: "园区总览" }, 0);
          break;
        case "2":
          history.push("/home/person");
          handle_top({ key: 2, name: "perception", value: "园区感知" }, 1);
          break;
        case "3":
          history.push("/home/person");
          handle_top({ key: 3, name: "management", value: "智慧管理" }, 2);
          break;
        case "D":
          break;
        case "D1":
          break;
        case "B":
          break;
        case "B1":
          break;
        case "A":
          break;
        case "A1":
          break;
        case "4":
          history.push("/home/things");
          handle_top({ key: 4, name: "cars", value: "实时车辆" }, 0);
          break;
        case "5":
          history.push("/home/things");
          handle_top({ key: 5, name: "hvac", value: "厂务管理" }, 1);
          break;
        case "6":
          history.push("/home/things");
          handle_top({ key: 6, name: "sec", value: "园区安防" }, 2);
          break;
        case "E":
          break;
        case "E1":
          break;
        default:
          // alert(e.data)
          return;
      }
    };
  };
  useEffect(() => {
    alertPlay();
  }, [pathname, bot_real_index, real_nav_active]);

  return (
    <div className="footer_box">
      <div className="footer">
        <ul>
          {pathname == "/home/person"
            ? footerName.map((item, index) => {
                return (
                  <li
                    className={bot_real_index == index ? "active_LI" : null}
                    key={index}
                    onClick={() => handle_top(item, index)}
                  >
                    {item.value}
                  </li>
                );
              })
            : footerName1.map((item, index) => {
                return (
                  <li
                    className={bot_real_index == index ? "active_LI" : null}
                    key={index}
                    onClick={() => handle_top(item, index)}
                  >
                    {item.value}
                  </li>
                );
              })}
        </ul>
      </div>
    </div>
  );
}
export default Footer;
