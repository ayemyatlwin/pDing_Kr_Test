import React from 'react'
import { Link } from 'react-router-dom'

const SideBarItem = ({icon,route,text}) => {
  return (
    <h2 className="py-3">
            <Link to={route} className="flexgapped">
              <img src={icon} alt="" />
              <span className="extraSmallText">{text}</span>
            </Link>
          </h2>
  )
}

export default SideBarItem
