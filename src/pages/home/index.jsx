import React, { useEffect } from "react";
import "./style.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Alertnav from "../../components/alertnav";
//通威大道门禁
import Entranceguard from "../../components/entranceGuard";
//今日数量统计
import Todaynum from "../../components/todaynum";

function Home() {
  useEffect(() => {}, []);
  return (
    <div className="home">
      <Header />
      {/* <Alertnav /> */}
      {/* <Entranceguard />
      <Todaynum /> */}
      <Footer />
    </div>
  );
}

export default Home;
