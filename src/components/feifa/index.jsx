import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Feifa() {
  const [timeNow, setTime] = useState();

  const top_count = useMappedState((state) => state.top_navigation_count);

  // const title = "访客非法闯入";//随机改变内容
  const ffData = {
    time: timeNow,//时间需要跟随
    where: "园区西门1门BH19201TO",
    pic: "tou1",
  };

  let titleData=["访客非法闯入","陌生人翻越围墙","访客携带刀具","陌生人携带宠物"];
  let ran;
  const [title, setTitle] = useState(localStorage.getItem("title")||"访客非法闯入");
  let ay;
  let content = () => {
    ay=setInterval(function(){
      let title1=titleData[ran];
      ran=Math.floor(Math.random()*3);
      console.log('我是随机数',ran)
      console.log('我是标题内容',title1);
      setTitle(title1);
    localStorage.setItem("title",title1);
  },5000)};


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
    setTimeout(showtime, 5000);
  };
  useEffect(() => {showtime();content();return componentWillUnmount;}, [top_count]);
  function componentWillUnmount() {
    // 组件销毁时你要执行的代码
    // clearInterval(ay);
  }

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
export default Feifa;
