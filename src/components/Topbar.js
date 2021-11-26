import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgMenuGridR } from "react-icons/cg";
const Topbar = () => {
  return (
    <div className="topcon">
      <div className="con2">
        <GiHamburgerMenu />
        <span className="topspan">CleoEMR</span>
      </div>
      <div className="con2">
        <CgMenuGridR />
        <img
          className="small-avatar"
          src="https://images.pexels.com/photos/8976513/pexels-photo-8976513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="small-avatar"
        />
      </div>
    </div>
  );
};

export default Topbar;
