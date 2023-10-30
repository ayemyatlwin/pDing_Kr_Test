import React from 'react'

const ThirdColList = ({name}) => {
  return (
    <>
    <div className="thirdColListContainer">
                <img className="thirdColImg" src={name} alt="" />
                <div className="flexColum">
                  <span>나무심는아무무</span>
                  <span>총 후원 나무 : 4,300,000</span>
                </div>
              </div>
             
      
    </>
  )
}

export default ThirdColList
