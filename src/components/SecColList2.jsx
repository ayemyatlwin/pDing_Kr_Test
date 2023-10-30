import React from "react";

const SecColList2 = ({ text1, text2, name }) => {
  return (
    <div className="SecColList2Container ">
      {text1}
      <span className="SecColList2Text">{text2}</span>
      <img className="SecColList2Img" src={name} alt="" />
    </div>
  );
};

export default SecColList2;
