import React from "react";
import logo from "../images/logo.png";
import bell from "../images/Black.png";
import btn from "../images/navbtn.png";
import profile from "../images/profile.png";

const Navbar = ({ handleClick }) => {
  return (
    <nav>
      <div className="NavBar">
        <img className="navlogo" src={logo} alt="" />

        <div className="NavItems">
          <button onClick={handleClick}>
            <img className="NavBell" src={bell} alt="" />
          </button>
          <img className="NavBtn" src={btn} alt="" />
          <img className="NavProfile" src={profile} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
