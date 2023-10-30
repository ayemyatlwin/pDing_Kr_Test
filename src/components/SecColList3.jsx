import React from "react";
import rect from "../images/Rectangle.png";

const SecColList3 = () => {
  return (
    <div className="flexClass">
      <div className="thirdColListContainer">
        <img className=" rect" src={rect} alt="" />
        <h2 className="extraSmallText myAuto">
          이 부분에서 영상의 제목은 최대 두줄까지 가능합니다
        </h2>
      </div>
      <span className=" fontBold extraSmallText myAuto">100 회</span>
    </div>
  );
};

export default SecColList3;
