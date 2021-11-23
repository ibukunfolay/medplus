import React from "react";
import drive from "../../src/assets/drive.png";
import calendar from "../../src/assets/calendar.png";
import erm from "../../src/assets/erm.png";
import mail from "../../src/assets/mail.png";
import map from "../../src/assets/map.png";

const Sidebar = () => {
  return (
    <div className="sidecon">
      <div>
        <div className="list-elements">
          <img src={erm} alt="erm" />
          <span>CleoERM</span>
        </div>
        <div className="list-elements">
          <img src={drive} alt="drive" />
          <span>Drive</span>
        </div>
        <div className="list-elements">
          <img src={map} alt="map" />
          <span>Map</span>
        </div>
        <div className="list-elements">
          <img src={calendar} alt="calendar" />
          <span>Calendar</span>
        </div>
        <div className="list-elements">
          <img src={mail} alt="mail" />
          <span>Mail</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
