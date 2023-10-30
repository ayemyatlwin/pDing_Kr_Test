import React from "react";
import back from "../images/back.png";
import NotiList from "./NotiList";

const NotiBox = ({ setNotiClick }) => {
  return (
    <div className="fixedNotiContainer">
      <div className="flexColum">
        <div className="notiListBtn">
          <button onClick={() => setNotiClick(false)}>
            <img className="notiListBtnImg" src={back} alt="" />
          </button>
          <span>전체 읽기</span>
        </div>
        <NotiList />
        <NotiList />
        <NotiList />
        <NotiList />
        <NotiList />
      </div>
    </div>
  );
};

export default NotiBox;
