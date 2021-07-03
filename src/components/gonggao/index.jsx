import React, { useState, useEffect } from "react";
import "./style.scss";
import { useDispatch, useMappedState } from "redux-react-hook";

function Gonggao() {
  const top_count = useMappedState((state) => state.top_navigation_count);

  const title = "公告";

  useEffect(() => {}, [top_count]);

  return (
    <div className="gonggao_box">
      <div className="gonggao_t">
        <span className="gonggao_close"></span>
        <span className="gonggao_title">{title}</span>
      </div>
      <div className="font_box">
        这里是公告，这里是公告描述，这里是公告，这里是公告描述，这里是公告，这里是公告描述，这里是公告，这里是公告描述，这里是公告，这里是公告描述，这里是公告，这里是公告描述，这里是公告，这里是公告描述，这里是公告，这里是公告描述，这里是公告，这里是公告描述，
      </div>
    </div>
  );
}
export default Gonggao;
