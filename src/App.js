import React from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Main from "./components/Main";

const App = () => {
  return (
    <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
      <Topbar />
      <div className="main-con">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default App;
