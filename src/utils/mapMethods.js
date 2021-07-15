import { createMap, Event, Model } from "./map3d";
import { locationList } from "../api/mainApi";
//判断人还是物路由
let urlPath = window.location.hash.split("#")[1];
console.log("222地址", window.location.hash.split("#")[1]);
export const Common = {
  //格式化坐标
  filter(value) {
    return value ? parseInt(value) : 0;
  },
  //飞行定位
  mapFly(map, data) {
    createMap.FlyToPosition(map, {
      x: Common.filter(data.center.x),
      y: Common.filter(data.center.y),
      z: Common.filter(data.center.z),
      pitch: Common.filter(data.center.pitch),
      yaw: Common.filter(data.center.yaw),
      roll: Common.filter(data.center.roll),
    });
  },
  //初始化地图位置
  initializationPosition(map3d) {
    locationList().then((res) => {
      if (res.msg === "success") {
        let resultsPosition = JSON.parse(res.data[0].position);
        let resultsPosition1 = {
          x: "52351.40234375",
          y: "-45275.8515625",
          z: "8076.00537109375",
          pitch: "24.038965225219727",
          yaw: "161.0946807861328",
          roll: "0.0000070114119807840325",
        };
        console.log("坐标", typeof resultsPosition1);
        let positionJson;
        if (urlPath == "/home/person") {
          console.log("1执行");
          positionJson = {
            x: resultsPosition.x,
            y: resultsPosition.y,
            z: resultsPosition.z,
            pitch: resultsPosition.pitch,
            yaw: resultsPosition.yaw,
            roll: resultsPosition.roll,
          };
        } else {
          console.log("2执行");
          positionJson = {
            x: resultsPosition1.x,
            y: resultsPosition1.y,
            z: resultsPosition1.z,
            pitch: resultsPosition1.pitch,
            yaw: resultsPosition1.yaw,
            roll: resultsPosition1.roll,
          };
        }
        console.log('坐标看看是啥',positionJson)
        Common.mapFly(map3d, { center: positionJson });
      }
    });
  },
  //往地图递归添加模型
  addModel(index, data, map3d) {
    console.log("111,00");
    if (data[index].model_name !== null && data[index].model_url !== null) {
      let position = data[index].list_style
        ? data[index].list_style
        : data[index].center;
      Model.modelLoading(
        map3d,
        {
          gid: data[index].model_url,
          filename: data[index].model_name,
          attr: data[index],
          location: {
            x: Common.filter(position.x),
            y: Common.filter(position.y),
            z: Common.filter(position.z),
            pitch: Common.filter(position.pitch),
            yaw: Common.filter(position.yaw),
            roll: Common.filter(position.roll),
          },
        },
        (msg) => {
          if (++index < data.length) {
            setTimeout(() => {
              Common.addModel(index, data, map3d);
            }, 0);
          } else {
            console.log("模型加载完毕");
            Model.getModel(map3d);
          }
        }
      );
    } else {
      if (++index < data.length) {
        setTimeout(() => {
          Common.addModel(index, data, map3d);
        }, 0);
      } else {
        console.log("模型加载完毕");
        Model.getModel(map3d);
      }
    }
  },
  //往地图递归添加图标
  add_iconModel(index, data, map3d) {
    let iccon;
    // if (data[index].model_name) {
    //   iccon = data[index].model_name;
    // }
    // if (data[index].model_name === null) {
    //   iccon = "menjin";
    // }
    console.log("每一项", data);
    //通威图标处理
    if (data[index].category_name === "摄像机") {
      iccon = "shipin";
    } else if (data[index].category_name === "门禁") {
      iccon = "menjin";
    } else if (data[index].category_name === "叉车") {
      iccon = "chache";
    } else if (data[index].category_name === "车辆道闸") {
      iccon = "chukou";
    } else if (data[index].category_name === "单兵") {
      iccon = "danbing";
    }

    let position = data[index].list_style
      ? data[index].list_style
      : data[index].center;
    Model.createIcon(
      map3d,
      {
        typeStyle: iccon,
        attr: data[index],
        location: {
          x: Common.filter(position.x),
          y: Common.filter(position.y),
          z: Common.filter(position.z),
          pitch: Common.filter(position.pitch),
          yaw: Common.filter(position.yaw),
          roll: Common.filter(position.roll),
        },
      },
      (msg) => {
        if (++index < data.length) {
          setTimeout(() => {
            Common.add_iconModel(index, data, map3d);
            console.log("加载了第", index, "个图标");
          });
        } else {
          console.log("图标模型加载完毕");
          Model.getModel(map3d);
        }
      }
    );
  },
  //导航地图效果清除
  navigationClose(map3d) {
    Model.closeIcon(map3d);
    Event.clearPatrolPath(map3d);
    //Model.getModel(map3d);   //5.22李帆帆进行调整，新加，解决头部导航点击之后鼠标点击之类的操作失灵
  },
};
