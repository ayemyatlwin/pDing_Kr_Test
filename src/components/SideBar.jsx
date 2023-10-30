import React from "react";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import msg from "../images/msg.png";
import profile from "../images/profile.png";
import tv from "../images/tv.png";
import setting from "../images/setting.png";
import video from "../images/video.png";
import doll from "../images/doll.png";
import SideBarItem from "./SideBarItem";
import MobNav from "./MobNav";

const SideBar = () => {
  return (
    <>
      <div className=" SideBarContainer">
        <div className="SideBarMainTextContainer">
          <img src={profile} alt="" className="SideBarPhoto" />
          <h2 className="SideBarMainText">이끌고 PD</h2>
          <span className="SideBarSmallText ">1200위</span>
        </div>
        <div className="SideBarItemContainer">
          <SideBarItem route={"/"} icon={icon1} text={"대쉬보드"} />
          <SideBarItem route={"/two"} icon={icon2} text={"콘텐츠"} />
          <SideBarItem route={"/"} icon={icon3} text={"후원자"} />
          <SideBarItem route={"/"} icon={icon4} text={"인사이트"} />
          <SideBarItem route={"/"} icon={msg} text={"메시지"} />
          <SideBarItem route={"/"} icon={tv} text={"채널 관리"} />
          <SideBarItem route={"/"} icon={setting} text={"설정"} />
        </div>
        <img className="SideBarVideo" src={video} alt="" />
        <img className="SideBarDoll" src={doll} alt="" />
      </div>
      <div className=" MobNav">
        <MobNav icon={icon1} text={"대쉬보드"} />
        <MobNav icon={icon2} text={"콘텐츠"} />
        <MobNav icon={icon3} text={"후원자"} />
        <MobNav icon={icon3} text={"인사이트"} />
      </div>
    </>
  );
};

export default SideBar;
