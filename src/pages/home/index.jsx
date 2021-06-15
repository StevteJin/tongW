import React, {
  useState,
  useEffect,
  useLayoutEffect,
  lazy,
  Suspense,
} from "react";
import { useMappedState, useDispatch } from "redux-react-hook";

import "./style.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Alertnav from "../../components/alertnav";
//通威大道门禁抓拍
import Entranceguard from "../../components/entranceGuard";
//今日数量统计
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

function Home() {
  const dispatch = useDispatch();
  const active_name = useMappedState((state) => state.nav_active);
  console.log("我是哪一个", active_name);
  const [ContentPage, setContentPage] = useState("div"); //模块组件容器
  const closePage = () => {
    dispatch({ type: "handleTop", bot_index: "" });
    dispatch({ type: "changeActive", nav_active: "" });
  };
  // 切换模块
  useLayoutEffect(() => {
    if (active_name !== "") {
      setContentPage(
        lazy(() => import(`../../components/module/${active_name}`))
      );
    }
  }, [active_name]);

  useEffect(() => {}, []);

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
      {/* 页脚 */}
      <Footer />
    </div>
  );
}

export default Home;
