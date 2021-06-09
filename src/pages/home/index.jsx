import React, { useEffect } from "react";
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



function Home() {
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
      <Wjtimes />
      {/* 页脚 */}
      <Footer />
    </div>
  );
}

export default Home;
