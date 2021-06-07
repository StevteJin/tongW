import React, { useEffect } from "react";
import "./style.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Alertnav from "../../components/alertnav";
import Entranceguard from "../../components/entranceGuard";
function Home() {
  useEffect(() => {}, []);
  return (
    <div className="home">
      <Header />
      {/* <Alertnav /> */}
      <Entranceguard />
      <Footer />
    </div>
  );
}

export default Home;
