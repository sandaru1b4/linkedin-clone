import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import "./App.css";
import Feed from "./Feed";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        {/* sidebar */}
        <SideBar />

        {/* feed */}
        <Feed />

        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
