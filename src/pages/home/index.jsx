import React, { useEffect } from "react";
import "./style.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Alertnav from "../../components/alertnav";
//通威大道门禁
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
      <Chaosu />
    </div>
  );
}

export default Home;
