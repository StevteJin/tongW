import $ from "jquery";

// let testUrl;//李晓飞地图测试接口

var ApiUrl; //张源接口
var ApiUrl2; //李晓飞接口

let alertS; //通威socket，金
let twUrl;//通威接口，金


var videoS; //相机视频socket
var alarmS; //报警socket
var luWang; //路网接口
var luwangName; //路网名字
var doorUrl; //门禁接口
var intercomS; //对讲机
var datamanel; //数据面板

$.ajax({
  url: "./config.json",
  type: "get",
  async: false,
  success: function (response) {
    let projectAddrass = window.location.host;
    console.log("%c config.json配置:", "color: red;font-size:13px", response);
    console.log("%c 本机IP:", "color: blue;font-size:13px", projectAddrass);
    // 返回当前的URL协议,既http协议还是https协议
    // let protocol = document.location.protocol;
    // const interfaceIp = `${protocol}//${projectAddrass}/api`;

    console.log("测试结果", response);
    //李测试接口
    // testUrl=response.testUrl;

    ApiUrl = response.Url;
    ApiUrl2 = response.Url2;

    alertS = response.alertSocket;//通威控屏websockt
    twUrl = response.twUrl;//通威接口

    videoS = response.videoSocket;
    alarmS = response.alarmSocket;
    luWang = response.luwangIp;
    luwangName = response.luwangName;
    doorUrl = response.doorInterface;
    intercomS = response.intercomSocket;
    datamanel = response.datamanel;
  },
});

export var api1 = ApiUrl;
export var api2 = ApiUrl2;

export let AlSocket = alertS; //通威控屏
export let twUrlNow = twUrl;//通威接口

export var vSocekt = videoS;
export var ASocekt = alarmS;
export var lwIP = luWang;
export var lwName = luwangName;
export var doorInurl = doorUrl;
export var iSocket = intercomS;
export var api3 = datamanel;
