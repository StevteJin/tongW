import React, { useEffect } from "react";
import "./style.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
function Home() {
  useEffect(() => {}, []);
  return (
    <div className="home">
      <Header />
      <Footer />
    </div>
  );
}

export default Home;
