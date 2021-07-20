import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Qp5() {
  const qp5_data = [
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
    <div className="qp5_box">
      {qp5_data.map((item, index) => {
        return (
          <div key={index} className="qp5">
            <span className="qp5_name">{item.name} ：</span>
            <span className="qp5_value">{item.value}</span>
          </div>
        );
      })}
    </div>
  );
}
export default Qp5;
