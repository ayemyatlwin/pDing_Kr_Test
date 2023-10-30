import React, { useState } from "react";

const SecColList = ({ text, name,btnText,button }) => {
  return (
    <>
      <div className="SecColListText">
        {text}
        <div className="SecColListImg">
          <img className="SecColListImgMargin" src={name} alt="" />
        </div>
        {button && (<>
        <button className="bordred extraSmallText ">{btnText}</button>
        </>) }
      </div>
    </>
  );
};

export default SecColList;
