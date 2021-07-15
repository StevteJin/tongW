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
  let changN;

  let titleBool=[true,false,false,false];

  const [tshow1, setTsBool0] = useState(titleBool[0]);
  const [tshow2, setTsBool1] = useState(titleBool[1]);
  const [tshow3, setTsBool2] = useState(titleBool[2]);
  const [tshow4, setTsBool3] = useState(titleBool[3]);




  
  
  
  let changeBool= () =>{
    changN=setInterval(function(){
      titleBool=[false,false,false,false];
      // 取1-4的随机数
    let snum = Math.floor(Math.random()*4);
    titleBool[snum]=true;
    console.log('取到的布尔值',titleBool[snum],titleBool);
    console.log('新数组',titleBool)
    setTsBool0(titleBool[0]);
    setTsBool1(titleBool[1]);
    setTsBool2(titleBool[2]);
    setTsBool3(titleBool[3]);
    console.log('结果',tshow1,tshow2,tshow3,tshow4)
    },5000)
    
  }
  

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

  let changeShow =()=>{

  }
  useEffect(() => {changeBool();return componentWillUnmount;}, []);
  function componentWillUnmount() {
    // 组件销毁时你要执行的代码
    // clearInterval(changeN);
    // clearInterval(myTime1);
    // clearInterval(myTime2);
  }
  return (
    <div>
      {/* <div className="gonggao">
        <Gonggao />
      </div> */}
      {/* 弹窗随机弹出，循环 */}
      {/* {show1==true?<div className={css1==true?"a1":"a1x"}>
        <Feifa />
      </div>:""} */}
      {/* 换个思路写 四个位置不同的报警弹框*/}
      {/* 传值到子 */}
      {tshow1?<div className="b1">
        <Feifa getTitle={"访客非法闯入"}/>
      </div>:""}
      {tshow2?<div className="b2">
        <Feifa getTitle={"车辆超速"}/>
      </div>:""}
      {tshow3?<div className="b3">
        <Feifa  getTitle={"访客非法闯入"}/>
      </div>:""}
      {tshow4?<div className="b4">
        <Feifa  getTitle={"车辆超速"}/>
      </div>:""}

      {/* <div className="b1">
        <Feifa getTitle={"访客非法闯入"}/>
      </div>
      <div className="b2">
        <Feifa getTitle={"车辆超速"}/>
      </div>
      <div className="b3">
        <Feifa  getTitle={"访客非法闯入"}/>
      </div>
      <div className="b4">
        <Feifa  getTitle={"车辆超速"}/>
      </div> */}
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
