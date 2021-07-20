import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Qp7() {
  const qp7_data = [
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
    <div className="qp7_box">
      {qp7_data.map((item, index) => {
        return (
          <div key={index} className="qp7">
            <span className="qp7_name">{item.name} ：</span>
            <span className="qp7_value">{item.value}</span>
          </div>
        );
      })}
    </div>
  );
}
export default Qp7;
