import React from "react";
import { Tabs, TabContent, TabLink } from "react-tabs-redux";
import RightContent from "./RightContent";

const Right = () => {
  return (
    <div className="right-con">
      <Tabs>
        <div className="right-tab-con">
          <TabLink
            to="right-tab1"
            className="tablink"
            activeClassName="active-tab"
          >
            Overview
          </TabLink>
          <TabLink
            to="right-tab2"
            className="tablink"
            activeClassName="active-tab"
          >
            DRTLM
          </TabLink>
          <TabLink
            to="right-tab3"
            className="tablink"
            activeClassName="active-tab"
          >
            History
          </TabLink>
        </div>
        <TabContent for="right-tab1">
          <RightContent />
        </TabContent>
        <TabContent for="right-tab2">
          <RightContent />
        </TabContent>
        <TabContent for="right-tab3">
          <RightContent />
        </TabContent>
      </Tabs>
    </div>
  );
};

export default Right;
