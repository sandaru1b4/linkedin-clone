import React from "react";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import "./App.css";
import Feed from "./components/Feed/Feed";

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
