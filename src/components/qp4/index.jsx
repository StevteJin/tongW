import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Qp4() {
  const qp4_data = [
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
    <div className="qp4_box">
      {qp4_data.map((item, index) => {
        return (
          <div key={index} className="qp4">
            <span className="qp4_name">{item.name} ：</span>
            <span className="qp4_value">{item.value}</span>
          </div>
        );
      })}
    </div>
  );
}
export default Qp4;
