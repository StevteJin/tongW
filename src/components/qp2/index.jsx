import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Qp2() {
  const qp1_data = [
    {
      name: "污水排放量",
      value: "1000m³",
    },
    {
      name: "F离子",
      value: "6ppm",
    },
    {
      name: "PH值",
      value: "7.3",
    },
    {
      name: "总氮",
      value: "20ppm",
    },
    {
      name: "COD",
      value: "80ppm",
    },
    {
      name: "氨氮",
      value: "8ppm",
    },
  ];

  useEffect(() => {}, []);

  return (
    <div className="qp2_box">
      {qp1_data.map((item, index) => {
        return (
          <div key={index} className="qp2">
            <span className="qp2_name">{item.name} ：</span>
            <span className="qp2_value">{item.value}</span>
          </div>
        );
      })}
    </div>
  );
}
export default Qp2;
