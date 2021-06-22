import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";
import "swiper/swiper.scss";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

SwiperCore.use([Autoplay]);
function Entranceguard() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const title = "通威大道门禁HB18920NH";
  const menjin = [
    { name: "点位用途", value: "通威大道西街道" },
    { name: "所在位置", value: "信息监察部门" },
    { name: "所属部门", value: "人脸抓拍" },
  ];
  const num = "0528";
  const peopleContent = [
    {
      pic: "tou",
      name: "张丽丽",
      time: "19:09:32",
    },
    {
      pic: "tou",
      name: "刘小丽",
      time: "19:09:32",
    },
    {
      pic: "tou",
      name: "李大丽",
      time: "19:09:32",
    },
  ];
  useEffect(() => {}, [top_count]);

  return (
    <div className="mjbox">
      <div className="close"></div>
      <div className="title">{title}</div>
      <div className="mcontent">
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
        <span className="num_top">今日累计通行人数</span>
        <span className="num_bot">{num}</span>
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
            loop={false} // 循环模式选项
            observer={true} //修改swiper自己或子元素时，自动初始化swiper
            observeParents={true} //修改swiper的父元素时，自动初始化swiper
            autoplay={
              {
                delay: 500,
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
export default Entranceguard;
