import React from "react";
import dual1 from "../images/thirddual1.png";
import dual2 from "../images/thirddual2.png";
import TableList from "./TableList";
import toggleon from "../images/toggleon.png";
import toggleoff from "../images/toggleoff.png";

const PageTwo = () => {
  return (
    <div className="pageTwoContainer">
      <div className="imgPageTwo">
        <img className="dualImage" src={dual1} alt="" />
        <img className="dualImage" src={dual2} alt="" />
      </div>
      <div className="tableBorder">
        <div className="tableHeadItems">
          <div className="tanleInputContainer">
            <input className=" tanleInput" type="search" name="" id="" />
            <span>
              제한된 영상만 보기
              <input type="checkbox" name="" id="" />
            </span>
          </div>
          <div className="tanleInputContainer">
            <span>총 1개 선택됨</span>
            <span className="tableEndBtns">공개전환</span>
            <span className="tableEndBtns">삭제</span>
          </div>
        </div>

        <div className="tableBorderWidth"></div>
        <div>
          <table className="tableWidth  ">
            <thead className="text-xs   ">
              <tr className=" theadBorder">
                <th>
                  <input type="checkbox" name="" id="" />
                </th>
                <th>공개</th>
                <th>동영상</th>
                <th>가격</th>
                <th>판매수</th>
                <th>수익(나무)</th>
                <th>등록일</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <TableList name={toggleon} />
              <TableList name={toggleon} />
              <TableList name={toggleon} />
              <TableList name={toggleon} />
              <TableList name={toggleon} />
              <TableList name={toggleoff} />
              <TableList name={toggleon} />
              <TableList name={toggleon} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
