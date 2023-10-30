import React from "react";
import eye from "../images/eye.png";
import pencil from "../images/pensil.png";
import tabimage from "../images/tabimage.png";

const TableList = ({ name }) => {
  return (
    <tr className="">
      <td className="tablePadding">
        <input type="checkbox" name="" id="" />
      </td>
      <td className="tablePadding">
        <img className="toggle" src={name} alt="" />
      </td>
      <td className="tablePadding">
        <span className=" flexgapped">
          <img className="tabImage" src={tabimage} alt="" />
          <span>영상의 제목이 들어가게 됩니다 최대 두줄까지 가능합니다.</span>
        </span>
      </td>
      <td className="tablePadding">100</td>
      <td className="tablePadding">2,100,000</td>
      <td className="tablePadding">21,000,000</td>
      <td className="tablePadding">2023.05.19</td>
      <td className="tablePadding">
        <span className="flexgapped">
          <img className="actionBtn" src={pencil} alt="" />
          <img className="actionBtn" src={eye} alt="" />
        </span>
      </td>
    </tr>
  );
};

export default TableList;
