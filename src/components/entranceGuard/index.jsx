import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

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
      name: "张丽丽",
      time: "19:09:32",
    },
    {
      pic: "tou",
      name: "张丽丽",
      time: "19:09:32",
    },
  ];
  useEffect(() => {}, [top_count]);

  return (
    <div className="mjbox">
      <div className="close"></div>
      <div className="title">{title}</div>
      <div className="content">
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
        <Swiper
          spaceBetween={100}
          slidesPerView={3}
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
  );
}
export default Entranceguard;
