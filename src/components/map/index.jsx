import React, { useEffect } from "react";
import { createMap, Model } from "../../utils/map3d";

import { Common } from "../../utils/mapMethods";
import { useMappedState, useDispatch } from "redux-react-hook";
import { twGetLogin } from "../../api/mainApi";
import urlData from "../../api/config";

import "./style.scss";

const Map = (props) => {
  const dispatch = useDispatch();
  const mapUrl = useMappedState((state) => state.mapLight_url);
  console.log("我是地址", urlData);
  useEffect(() => {
    console.log(mapUrl, "createMapcreateMapcreateMapcreateMapcreateMap");
    // if (mapUrl) {
    //   createMapsss("http://" + mapUrl);
    //   console.log('对象url',mapUrl)
    // }
    // eslint-disable-next-line
    login_user();
    createMapsss();
  }, []);

  //用户登录的
  const login_user = () => {
    twGetLogin({ user_name: "admin", user_pwd: "admin" }).then((res) => {
      console.log("我是last结果", res);
    });
  };

  const createMapsss = (url) => {
    var map = createMap.createMap(
      {
        id: "mapv3dContainer_light",
        url: urlData.url55,
        // url: urlData.url50,
        projectId: "5nbmjsdljf785208",
        token: "rt2d645ty3eadaed32268mdta6",
      },
      () => {}
    );
  };
  return <div id="mapv3dContainer_light"></div>;
};

export default Map;
