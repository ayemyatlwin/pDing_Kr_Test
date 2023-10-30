import React from "react";
import first from "../images/300,000.png";
import second from "../images/200,000.png";
import third from "../images/100,000.png";
import dual1 from "../images/thirddual1.png";
import dual2 from "../images/thirddual2.png";
import mask from "../images/Mask.png";
import purple from "../images/purrple.png";
import profile from "../images/profile.png";
import FouthColList from "./FouthColList";
import ThirdColList2 from "./ThirdColList2";
import ThirdColList from "./ThirdColList";
import SecColList from "./SecColList";
import SecColList2 from "./SecColList2";
import SecColList3 from "./SecColList3";

const PageOne = () => {
  return (
    <>
      <div className="SecondContainer">
        <div className="MobHead">
          <img className="MobPhoto" src={profile} alt="" />{" "}
          <span className="MobPhotoText">이끌고 PD</span>
        </div>

        <div className=" SecColList">
          <SecColList text={"최근 환전 현황"} name={third} button={false} />
          <SecColList text={"환전 가능 나무"} name={second} button={true} btnText={"환전하기"} />
          <SecColList text={"6월 나무 수익"} name={first} button={true} btnText={"환전완료"} />
        </div>

        <div className="SecColList2">
          <SecColList2
            text1={"영상 판매 건수"}
            text2={"이번달 판매된 영상 건수입니다"}
            name={second}
          />
          <SecColList2
            text1={"총 즐겨찾기수"}
            text2={"누적 즐겨찾기수입니다"}
            name={third}
          />
        </div>

        <div className=" SecColList3">
          <h1 className="headingFont">인기 영상</h1>
          <div className="flex">
            <img className="SecColList3Img" src={dual1} alt="" />
            <img className="SecColList3Img" src={dual2} alt="" />
          </div>
          <div className="borderline"></div>
          <div className="flexClass">
            <span>동영상</span>
            <span>판매수</span>
          </div>
          <div className="borderline"></div>
          <SecColList3 />
          <SecColList3 />
          <SecColList3 />
          <SecColList3 />
        </div>
      </div>
      <div className=" thirdContainer">
        <div className="thirdFlex">
          {/* 3rd  */}
          <div className="thirdColWidth ">
            <div className="thirdColList ">
              <h1 className="headingFont">Fan Ranking</h1>

              <ThirdColList name={mask} />
              <ThirdColList name={purple} />
              <ThirdColList name={purple} />

              <button className="thirdColBtn">
                순위 모두 보기
              </button>
            </div>
            <div className="thirdColList">
              <h1 className="headingFont">최근 선물 내역 &rarr; </h1>
              <ThirdColList2 />
              <ThirdColList2 />
              <ThirdColList2 />
              <ThirdColList2 />
              <ThirdColList2 />
            </div>
          </div>

          {/* 4th */}
          <div className="thirdColWidth">
            <div className=" fouthColList">
              <h1 className="headingFont">최근 메시지</h1>
              <FouthColList />
              <FouthColList />
              <FouthColList />
              <FouthColList />
              <FouthColList />
              <FouthColList />
              <FouthColList />
              <FouthColList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageOne;
