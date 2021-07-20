import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Qp2() {
  const qp2_data = [
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
    <div className="qp2_box">
      {qp2_data.map((item, index) => {
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
