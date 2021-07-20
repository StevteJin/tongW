import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Qp6() {
  const qp6_data = [
    {
      name: "东区温度",
      value: "25℃",
    },
    {
      name: "东区湿度",
      value: "40%",
    },
    {
      name: "西区温度",
      value: "25℃",
    },
    {
      name: "西区温度",
      value: "42%",
    },
  ];

  useEffect(() => {}, []);

  return (
    <div className="qp6_box">
      {qp6_data.map((item, index) => {
        return (
          <div key={index} className="qp6">
            <span className="qp6_name">{item.name} ：</span>
            <span className="qp6_value">{item.value}</span>
          </div>
        );
      })}
    </div>
  );
}
export default Qp6;
