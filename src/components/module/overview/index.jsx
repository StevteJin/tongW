//园区总览
import React, { useRef, useState, useEffect } from "react";
//今日数量统计
import Todaynum from "../../todaynum";
//访客非法闯入
import Feifa from "../../feifa";
//通威大道门禁抓拍
import Entranceguard from "../../entranceGuard";
//公告
import Gonggao from "../../gonggao";

import "./style.scss";

export default function Overview() {
  const [css1, setBool] = useState(true);
  const [css2, setBool1] = useState(true);
  const [show1, setShow] = useState(true);
  const [show2, setShow1] = useState(false);
  let bool1=false;
  let bool2=false;
  let s1=true;
  let s2=false;
  let myTime1;
  let myTime2;
  let changeCss=()=>{
    // css1=true
    // css2=true

  myTime1 =  setInterval(function(){
      console.log('我执行了吧')
      if(bool1==false){
        bool1=true
        bool2=false
      }else if(bool1==true){
        bool1=false
        bool2=true
      }
      setBool(bool1)
      setBool1(bool2)
      console.log("css1",css1,"css2",css2);
    },4000)

  myTime2 =setInterval(function(){
      if(s1==false){
        s1=true
        s2=false
      }else if(s1==true){
        s1=false
        s2=true
      }
      setShow(s1);
      setShow1(s2);
    },2000);
  }
  useEffect(() => {changeCss();return componentWillUnmount;}, []);
  function componentWillUnmount() {
    // 组件销毁时你要执行的代码
    clearInterval(myTime1);
    clearInterval(myTime2);
  }
  return (
    <div>
      {/* <div className="gonggao">
        <Gonggao />
      </div> */}
      {/* 弹窗随机弹出，循环 */}
      {show1==true?<div className={css1==true?"a1":"a1x"}>
        <Feifa />
      </div>:""}
      {/* {show2==true?<div className={css2==true?"a2":"a2x"}>
        <Entranceguard />
      </div>:""} */}
      <div className="a2">
        <Entranceguard />
      </div>
      {/* <div className="today_num">
        <Todaynum />
      </div> */}
    </div>
  );
}
