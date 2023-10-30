import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import { useState } from "react";

import NotiBox from "../components/NotiBox";

const Home = ({ children }) => {
  const [notiClick, setNotiClick] = useState(false);
  console.log(notiClick);
  const handleClick = () => {
    setNotiClick(!notiClick);
  };

  return (
    <main className="Home">
      <div className="HomeContainer">
        <Navbar handleClick={handleClick} />
      </div>
      {notiClick === true ? <NotiBox setNotiClick={setNotiClick} /> : ``}

      <div className="HomeSideBarContainer">
        <div className="SideBar">
          <SideBar />
        </div>
        {children}
      </div>
    </main>
  );
};

export default Home;
