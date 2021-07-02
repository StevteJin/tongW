import React, { useState, useEffect } from "react";
import { createMap, Model } from "../../utils/map3d";

import { Common } from "../../utils/mapMethods";
import { useMappedState, useDispatch } from "redux-react-hook";
import {
  getConfig,
  getLogin,
  cameraList_S,
  labelLists
} from "../../api/mainApi";
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
        console.log(res.data);
        //展示地图
        createMapsss(res.data.data_server_url);
      }
    });
  };

  const createMapsss = (url) => {
    console.log("数据La", url);
    var map_light = createMap.createMap(
      {
        id: "mapvision3d",
        url: url,
        // url: urlData.url50,
        projectId: "5nbmjsdljf785208",
        token: "rt2d645ty3eadaed32268mdta6",
      },
      () => {
        //加载模型
        dispatch({ type: "mp_light", map3d_light: map_light });
        //初始化位置
        setTimeout(() => {
          Common.initializationPosition(map_light);
        }, 0);

        setTimeout(() => {
          cameraList_S().then((res) => {
            var results = res.data;
            console.log('222',results)
            Common.addModel(0, results, map_light);
            //图标
            // Common.add_iconModel(0, results, map_light);
          });
          //创建文字标注
          labelLists().then((res) => {
            if (res.msg === "success") {
              var res2Data = res.data;
              res2Data.forEach((element2, index2) => {
                var labelData = JSON.parse(element2.label_style.model);
                var labelPosition = JSON.parse(labelData.attr.center);
                Model.labelLoading(map_light, {
                  text: element2.label_name,
                  attr: labelData.attr,
                  location: {
                    x: Common.filter(labelPosition.x),
                    y: Common.filter(labelPosition.y),
                    z: Common.filter(labelPosition.z),
                    pitch: Common.filter(labelPosition.pitch),
                    yaw: Common.filter(labelPosition.yaw),
                    roll: Common.filter(labelPosition.roll),
                  },
                  fontcolor: labelData.fontcolor,
                  fontsize: labelData.fontsize,
                });
              });
            }
          });
        }, 100);
      }
    );
  };
  return <div id="mapvision3d"></div>;
};

export default Map;
