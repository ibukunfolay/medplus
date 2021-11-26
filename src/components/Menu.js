import React from "react";
import { GrStackOverflow } from "react-icons/gr";
import { AiFillClockCircle } from "react-icons/ai";
import { IoMdAttach } from "react-icons/io";
import { BsFillBarChartFill } from "react-icons/bs";
import { IoIosFlag } from "react-icons/io";
import { Tabs, TabContent, TabLink } from "react-tabs-redux";
import Content from "./Content";

const Menu = () => {
  return (
    <div>
      <Tabs>
        <div className="menu-con">
          <TabLink
            to="sub-tab1"
            className="menu-item"
            activeClassName="active-menu"
          >
            <GrStackOverflow className="menu-icon" /> Order & Collection
          </TabLink>
          <TabLink
            to="sub-tab2"
            className="menu-item"
            activeClassName="active-menu"
          >
            <AiFillClockCircle className="menu-icon" /> Results
          </TabLink>
          <TabLink
            to="sub-tab3"
            className="menu-item"
            activeClassName="active-menu"
          >
            <IoMdAttach className="menu-icon" /> Attachment
          </TabLink>
          <TabLink
            to="sub-tab4"
            className="menu-item"
            activeClassName="active-menu"
          >
            <BsFillBarChartFill className="menu-icon" /> Graph
          </TabLink>
          <TabLink
            to="sub-tab5"
            className="menu-item"
            activeClassName="active-menu"
          >
            <IoIosFlag className="menu-icon" /> Progress Report
          </TabLink>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <TabContent className="menu-content" for="sub-tab1">
            <Content />
          </TabContent>
          <TabContent className="menu-content" for="sub-tab2">
            <Content />
          </TabContent>
          <TabContent className="menu-content" for="sub-tab3">
            <Content />
          </TabContent>
          <TabContent className="menu-content" for="sub-tab4">
            <Content />
          </TabContent>
          <TabContent className="menu-content" for="sub-tab5">
            <Content />
          </TabContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Menu;
