import React from "react";
import purplemoon from "../images/purplemoon.png";

const FouthColList = () => {
  return (
    <div className="flexClass">
      <div className="fourthContainer">
        <img className="fourthImgh" src={purplemoon} alt="" />
        <div className="flexColum">
          <span>유저닉네임</span>
          <span className="extraSmallText">안녕하세요 항상 감사합니다 다음...</span>
        </div>
      </div>
      <span className="extraSmallText">오후 7:35 </span>
    </div>
  );
};

export default FouthColList;
