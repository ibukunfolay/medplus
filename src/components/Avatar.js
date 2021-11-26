import React from "react";

const Avatar = () => {
  return (
    <div className="avatar-con">
      <img
        className="pro-pic"
        src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="profile"
      />
      <div className="name-con">
        <span className="name">Maciej Zakoscielny, 39, M</span>
        <span>
          Pornoska, 55/9, Wroclaw,
          <br />
          Poland
        </span>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>03/06/1956</span>
          <span>+49 7235 39 595</span>
          <span>maciejz@gmail.com</span>
        </div>
        <div>
          <button>Allergies</button>
          <button>Billing Alert</button>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
