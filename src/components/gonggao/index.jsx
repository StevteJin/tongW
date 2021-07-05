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
        通威太阳能(金堂)有限公司于2020年04月29日成立。法定代表人谢毅，公司经营范围包括：太阳能电池及组件制造；太阳能热管、太阳能热水器及太阳能光热应用产品制造；硅片制造；电气机械及器材制造、安装；商品批发与零售；进出口业；商务服务业；专业技术服务业等。
      </div>
    </div>
  );
}
export default Gonggao;
