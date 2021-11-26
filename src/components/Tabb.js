import React from "react";
import { Tabs, TabContent, TabLink } from "react-tabs-redux";
import Tab from "./Tab";

const Tabb = () => {
  return (
    <div>
      <Tabs>
        <div className="tabb-con">
          <TabLink to="tab1" className="tablink" activeClassName="active-tab">
            Medical Summary
          </TabLink>
          <TabLink to="tab2" className="tablink" activeClassName="active-tab">
            CDSS
          </TabLink>
          <TabLink to="tab3" className="tablink" activeClassName="active-tab">
            Labs
          </TabLink>
          <TabLink to="tab4" className="tablink" activeClassName="active-tab">
            DI
          </TabLink>
          <TabLink to="tab5" className="tablink" activeClassName="active-tab">
            Growth Chart
          </TabLink>
          <TabLink to="tab6" className="tablink" activeClassName="active-tab">
            Imm
          </TabLink>
          <TabLink to="tab7" className="tablink" activeClassName="active-tab">
            T.Inj
          </TabLink>
          <TabLink to="tab8" className="tablink" activeClassName="active-tab">
            Encounters
          </TabLink>
          <TabLink to="tab9" className="tablink" activeClassName="active-tab">
            Patients Docs
          </TabLink>
          <TabLink to="tab10" className="tablink" activeClassName="active-tab">
            Flowsheets
          </TabLink>
          <TabLink to="tab11" className="tablink" activeClassName="active-tab">
            Notes
          </TabLink>
        </div>
        <TabContent for="tab1">
          <Tab />
        </TabContent>
        <TabContent for="tab2">
          <Tab />
        </TabContent>
        <TabContent for="tab3">
          <Tab />
        </TabContent>
        <TabContent for="tab4">
          <Tab />
        </TabContent>
        <TabContent for="tab5">
          <Tab />
        </TabContent>
        <TabContent for="tab6">
          <Tab />
        </TabContent>
        <TabContent for="tab7">
          <Tab />
        </TabContent>
        <TabContent for="tab8">
          <Tab />
        </TabContent>
        <TabContent for="tab9">
          <Tab />
        </TabContent>
        <TabContent for="tab10">
          <Tab />
        </TabContent>
        <TabContent for="tab11">
          <Tab />
        </TabContent>
      </Tabs>
    </div>
  );
};

export default Tabb;
