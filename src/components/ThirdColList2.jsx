import React from 'react'
import msg from "../images/msg.png";
import purplemoon from "../images/purplemoon.png";

const ThirdColList2 = () => {
  return (
    <div className="flexClass">
                <div className="thirdColListContainer">
                  <img className="thirdColImg" src={purplemoon} alt="" />
                  <div className="flexColum">
                    <span>나무심는아무무</span>
                    <span className="extraSmallText">총 후원 나무 : 4,300,000</span>
                  </div>
                </div>
                <img className="msgIcon" src={msg} alt="" />
              </div>
  )
}

export default ThirdColList2
