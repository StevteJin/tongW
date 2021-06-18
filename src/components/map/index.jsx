import React, { useState, useEffect } from "react";
import { createMap, Model } from "../../utils/map3d";

import { Common } from "../../utils/mapMethods";
import { useMappedState, useDispatch } from "redux-react-hook";
import { getConfig, getLogin } from "../../api/mainApi";
import urlData from "../../api/config";

import "./style.scss";

const Map = (props) => {
  const dispatch = useDispatch();
  const twUserData = useMappedState((state) => state.userData);
  const twConfigList = useMappedState((state) => state.configList);
  const [twData, setST] = useState();

  useEffect(() => {
    // if (mapUrl) {
    //   createMapsss("http://" + mapUrl);
    //   console.log('对象url',mapUrl)
    // }
    // eslint-disable-next-line
    login_user();
    config_list();
  }, []);

  //用户登录的
  const login_user = () => {
    getLogin({ user_name: "admin", user_pwd: "admin" }).then((res) => {
      console.log("我是last结果", res);
      if (res.msg == "success") {
        dispatch({ type: "userData", userData: res.data });
      }
    });
  };

  //查询基础配置
  const config_list = () => {
    getConfig().then((res) => {
      console.log("基础配置", res);
      if (res.msg == "success") {
        dispatch({ type: "configList", configList: res.data });
        setST(res.data);
        //展示地图
        createMapsss(res.data.data_server_url);
      }
    });
  };

  const createMapsss = (url) => {
    console.log("数据La", url);
    var map = createMap.createMap(
      {
        id: "mapvision3d",
        url: url,
        // url: urlData.url50,
        projectId: "5nbmjsdljf785208",
        token: "rt2d645ty3eadaed32268mdta6",
      },
      () => {}
    );
  };
  return <div id="mapvision3d"></div>;
};

export default Map;
