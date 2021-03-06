import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Qp1() {
  const qp1_data = [
    {
      name: "RO水用量",
      value: "100m³",
    },
    {
      name: "纯水用量",
      value: "100m³",
    }
  ];

  useEffect(() => {}, []);

  return (
    <div className="qp1_box">
      {qp1_data.map((item, index) => {
        return (
          <div key={index} className="qp1">
            <span className="qp1_name">{item.name} ：</span>
            <span className="qp1_value">{item.value}</span>
          </div>
        );
      })}
    </div>
  );
}
export default Qp1;
