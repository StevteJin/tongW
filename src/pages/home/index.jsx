import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  lazy,
  Suspense,
} from "react";
import $ from "jquery";
import { useMappedState, useDispatch } from "redux-react-hook";
import { useLocation } from "react-router-dom";
import "./style.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Alertnav from "../../components/alertnav";
//通威大道门禁抓拍
import Entranceguard from "../../components/entranceGuard";
//今日数据统计
import Todaynum from "../../components/todaynum";
//访客非法闯入
import Feifa from "../../components/feifa";
//今日人员分类统计
import Fenlei from "../../components/fenlei";
//今日入园人数统计
import Ruyuan from "../../components/ruyuan";
//实时人脸抓拍列表
import Snap from "../../components/snap";
//今日门禁人员统计
import Mj from "../../components/mj";
//车辆超速
import Chaosu from "../../components/chaosu";
//通威大道车辆抓拍HB18920NH
import Carp from "../../components/carp";
//今日园区违纪统计
import Wj from "../../components/wj";
//今日园区人员巡更统计
import Xg from "../../components/xg";
//今日访客滞留统计
import Zl from "../../components/zl";
// 底部页脚三个统计图
import Tj from "../../components/tj";
//今日人员违纪次数统计
import Wjtimes from "../../components/wjtimes";
//实时报警列表
import Bj from "../../components/bj";
//场景地图
import Map from "../../components/map";
//今日入园车辆统计
import Cl from "../../components/cl";
//车辆实时报警
import Bj1 from "../../components/bj1";
//今日报警类型统计(车)
import Lx from "../../components/lx";
//今日报警类型统计(人的)
import Plx from "../../components/plx";
//今日人员异常出入统计
import Yc from "../../components/yc";
//今日停车位统计

//近24小时入园车辆统计
import Rucar from "../../components/rucar";
//今日出入口通行分布
import ToXi from "../../components/toxi";
//今日无人叉车统计
import Chache from "../../components/chache";
//周界报警
import Zj from "../../components/zj";
//小工具
import SmallTools from "../../components/smallTools";

function Home() {
  const dateRef = useRef();
  console.log("容器对象", dateRef.current);
  const dispatch = useDispatch();
  const active_name = useMappedState((state) => state.nav_active);
  const { pathname } = useLocation(); //存储当前路由地址`
  console.log("我是哪一个", pathname, active_name);
  const [ContentPage, setContentPage] = useState("div"); //模块组件容器
  const closePage = () => {
    dispatch({ type: "handleTop", bot_index: "" });
    dispatch({ type: "changeActive", nav_active: "" });
  };

  const getIPAdress = () => {
    console.log("我执行了");
  };

  // 1.初始化的时候获得大屏幕的比例
  // 2.把这个比例设置给css的scale变量
  // 3.监听浏览器的窗口大小, 将新的比例赋给scale变量

  // getScale函数是在获取较小比例的一条边, 这样较大比例的一条边就可以按照既定的比例缩放了, width和height是设置的默认比例, window.innerWidth和window.innerHeight 是大屏幕的缩放尺寸

  const getScale = () => {
    // 窗口的文档显示区的宽度，高度(5760X4320)
    const width = 1920;
    const height = 1080;
    let ww = window.innerWidth / width;
    let wh = window.innerHeight / height;
    console.log("宽，高", ww, wh);
    return ww < wh ? ww : wh;
  };

  let scale;
  const setScale = () => {
    scale = getScale();
    console.log("用的比例", scale);
    // this.refs.ScaleBox.style.setProperty("--scale", this.scale);
  };

  // 切换模块
  useLayoutEffect(() => {
    if (active_name !== "") {
      setContentPage(
        lazy(() => import(`../../components/module/${active_name}`))
      );
      if (
        pathname != "/home/person" &&
        (active_name == "overview" ||
          active_name == "perception" ||
          active_name == "management")
      ) {
        setContentPage(lazy(() => import(`../../components/module/cars`)));
      }
      if (
        pathname == "/home/person" &&
        (active_name == "cars" || active_name == "hvac" || active_name == "sec")
      ) {
        setContentPage(lazy(() => import(`../../components/module/overview`)));
      }
    }
  }, [active_name]);

  useEffect(() => {
    getIPAdress();
    setScale();
  }, []);

  return (
    <div className="home">
      <Header />
      {/* <Alertnav /> */}
      {/* 通威大道门禁 */}
      {/* <Entranceguard /> */}
      {/* 今日数据统计 */}
      {/* <Todaynum /> */}
      {/* 访客非法闯入 */}
      {/* <Feifa /> */}
      {/* 今日人员分类统计 */}
      {/* <Fenlei /> */}
      {/* 今日入园人数统计 */}
      {/* <Ruyuan /> */}
      {/* 实时人脸抓拍列表 */}
      {/* <Snap /> */}
      {/* 今日门禁人员统计 */}
      {/* <Mj /> */}
      {/* 车辆超速 */}
      {/* <Chaosu /> */}
      {/* 通威大道车辆抓拍HB18920NH */}
      {/* <Carp /> */}
      {/* 今日园区违纪统计 */}
      {/* <Wj /> */}
      {/* 今日园区人员巡更统计 */}
      {/* <Xg /> */}
      {/* 今日访客滞留统计 */}
      {/* <Zl /> */}
      {/* 底部页脚三个统计图 */}
      {/* <Tj /> */}
      {/* 今日人员违纪次数统计 */}
      {/* <Wjtimes /> */}
      {/* 实时报警列表 */}
      {/* <Bj /> */}
      {/* 地图 */}
      <div className="content">
        {active_name !== "" && (
          <Suspense fallback={<div>Loading</div>}>
            <div className="popup">
              <ContentPage close={closePage} />
            </div>
          </Suspense>
        )}
      </div>
      <div className="mapstyle">
        <Map />
      </div>
      {/* 今日入园车辆统计 */}
      {/* <Cl /> */}
      {/* 车辆实时报警 */}
      {/* <Bj1 /> */}
      {/* 今日报警类型统计(车的) */}
      {/* <Lx /> */}
      {/* 今日报警类型统计(人的) */}
      {/* <Plx /> */}
      {/* 今日人员异常出入统计 */}
      {/* <Yc /> */}
      {/* 周界报警 */}
      {/* <Zj /> */}
      {/* 小工具 */}
      <div className="untils_sTools">
        <SmallTools />
      </div>
      {/* 页脚 */}
      <Footer />
    </div>
    // <div ref={dateRef}>
    // </div>
    //   <div className="ScaleBox" id="ScaleBox">
    // </div>
  );
}

export default Home;
