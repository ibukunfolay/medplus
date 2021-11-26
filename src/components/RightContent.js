import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { BiCheckboxSquare } from "react-icons/bi";
import { AiOutlinePlusSquare } from "react-icons/ai";
const RightContent = () => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  return (
    <div className="last-con">
      <span>Maciej Zakoscielny, M of 31/02/2020</span>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? (
          <div className="last-button">
            Global Alerts
            <IoMdArrowDropup />
          </div>
        ) : (
          <div className="last-button">
            Global Alerts
            <IoMdArrowDropdown />
          </div>
        )}
      </button>
      {visible && (
        <div className="last-content">
          <BiCheckboxSquare className="last-icons" />
          Fasting
        </div>
      )}
      <button
        onClick={() => {
          setVisible1(!visible1);
        }}
      >
        {visible1 ? (
          <div className="last-button">
            CCM
            <IoMdArrowDropup />
          </div>
        ) : (
          <div className="last-button1">
            CCM
            <div style={{ display: "flex", alignItems: "center", padding: 0 }}>
              <div className="span-CCM">Time Completed: 00:21</div>
              <IoMdArrowDropdown />
            </div>
          </div>
        )}
      </button>
      {visible1 && <div className="last-content">My element</div>}
      <button
        onClick={() => {
          setVisible2(!visible2);
        }}
      >
        {visible2 ? (
          <div className="last-button">
            Advanced Directives
            <IoMdArrowDropup />
          </div>
        ) : (
          <div className="last-button">
            Advanced Directives
            <IoMdArrowDropdown />
          </div>
        )}
      </button>
      {visible2 && (
        <div className="last-content">
          {" "}
          <BiCheckboxSquare className="last-icons" />
          LW
          <div className="span-AD">Living Will</div>
        </div>
      )}
      <button
        onClick={() => {
          setVisible3(!visible3);
        }}
      >
        {visible3 ? (
          <div className="last-button">
            Problem List
            <IoMdArrowDropup />
          </div>
        ) : (
          <div className="last-button">
            Problem List
            <IoMdArrowDropdown />
          </div>
        )}
      </button>
      {visible3 && (
        <div className="last-content1">
          <div className="last-content-div">
            <AiOutlinePlusSquare className="last-icons" />
            <div className="red">9</div>
            <div className="black">498.3</div>
            <div className="span">COPD</div>
          </div>
          <div className="last-content-div">
            <AiOutlinePlusSquare className="last-icons" />
            <div className="green">10</div>
            <div className="black">j33.2</div>
            <div className="span">Hypertension</div>
          </div>
          <div className="last-content-div">
            <AiOutlinePlusSquare className="last-icons" />
            <div className="green">10</div>
            <div className="black">i19</div>
            <div className="span">Hyperthermia</div>
          </div>
          <div className="last-content-div">
            <AiOutlinePlusSquare className="last-icons" />
            <div className="green">10</div>
            <div className="black">E23.3</div>
            <div className="span">Diabetes</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightContent;
