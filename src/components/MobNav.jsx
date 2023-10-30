import React from 'react'

const MobNav = ({icon,text}) => {
  return (
    <div className='flexColum'>
          <img className="MobNavIcons" src={icon} alt="" />
          <span className="MobNavText ">{text}</span>
        </div>
  )
}

export default MobNav
