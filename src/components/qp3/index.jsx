import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Qp3() {
  const qp3_data = [
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
    <div className="qp3_box">
      {qp3_data.map((item, index) => {
        return (
          <div key={index} className="qp3">
            <span className="qp3_name">{item.name} ：</span>
            <span className="qp3_value">{item.value}</span>
          </div>
        );
      })}
    </div>
  );
}
export default Qp3;
