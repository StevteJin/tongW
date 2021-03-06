import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";
import "swiper/swiper.scss";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

SwiperCore.use([Autoplay]);
function Carp() {
  const top_count = useMappedState((state) => state.top_navigation_count);
  const [timeNow, setTime] = useState();

  const title = "通威大道车辆抓拍HB18920NH";
  const menjin = [
    { name: "点位用途", value: "出入口" },
    { name: "所在位置", value: "信息监察部门" },
    { name: "所属部门", value: "人脸抓拍" },
  ];
  const num = "0432";
  const nei = [52,5,3,2];
  const peopleContent = [
    {
      pic: "carcar2",
      name: "川A.56434",
      time: timeNow,
    },
    {
      pic: "carcar3",
      name: "川A.32134",
      time: timeNow,
    },
    {
      pic: "carcar4",
      name: "川A.45341",
      time: timeNow,
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
    <div className="mjboxxx">
      <div className="close"></div>
      <div className="title">{title}</div>
      <div className="cccontent">
        {menjin.map((item, index) => {
          return (
            <div key={index}>
              <span className="left">{item.name} :</span>
              <span className="right">{item.value}</span>
            </div>
          );
        })}
      </div>
      <div className="numbox">
        <span className="num_top">今日累计通行车数量</span>
        <span className="num_bot">{num}</span>
        <div className="nei_car_box">
        <div className="nei_car">
          <span className="n_left">&nbsp;访客车辆：</span>
          <span className="n_right">{nei[0]}</span>
        </div>
        <div className="nei_car">
          <span className="n_left">&nbsp;物流车辆：</span>
          <span className="n_right">{nei[1]}</span>
        </div>
        <div className="nei_car">
          <span className="n_left">&nbsp;参观接待：</span>
          <span className="n_right">{nei[2]}</span>
        </div>
        <div className="nei_car">
          <span className="n_left">化学品槽车：</span>
          <span className="n_right">{nei[3]}</span>
        </div>
        </div>
      </div>
      <div className="pic_con">
        <div className="pic_width">
          {/* 参数说明
           *spaceBetween 间隙*
           *slidesPerView张数*
           */}
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            loop={true} // 循环模式选项
            observer={true} //修改swiper自己或子元素时，自动初始化swiper
            observeParents={true} //修改swiper的父元素时，自动初始化swiper
            autoplay={
              {
                delay: 2500,
                disableOnInteraction: false,
              } //解决滑动后不能轮播的问题
            }
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {peopleContent.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="picbox">
                    <img
                      className="pic_icon"
                      src={
                        require("../../assets/tongwei/" + item.pic + ".png")
                          .default
                      }
                      alt=""
                    />
                    <div className="pic_content">
                      <div className="pic_name">{item.name}</div>
                      <div className="pic_time">{item.time}</div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
export default Carp;
