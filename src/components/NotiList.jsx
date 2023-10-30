import React from "react";
import mask from "../images/Mask.png";

const NotiList = () => {
  return (
    <div className="notiListContainer">
      <div className="notiListLeft">
        <img className="notiListImg" src={mask} alt="" />
        <span className="extraSmallText myAuto">
          나무심는아무무님이 2000나무를 후원하셨습니다.
        </span>
      </div>
      <span className="notiListRight">오후 7:35 </span>
    </div>
  );
};

export default NotiList;
