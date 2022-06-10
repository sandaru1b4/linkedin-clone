import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./SideBar.css";

function SideBar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sideBar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1548263594-a71ea65a8598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar" src={user?.photoURL}>
          {user.email[0]}
        </Avatar>
        <h2>{user?.displayName}</h2>
        <h4>{user?.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viwed you</p>
          <p className="sidebar__statNumber">1'562</p>
        </div>
        <div className="sidebar__stat">
          <p>Viwes on post</p>
          <p className="sidebar__statNumber">1'230</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("Java")}
        {recentItem("JavaScript")}
        {recentItem("React js")}
        {recentItem("React Native")}
        {recentItem("Programming")}
      </div>
    </div>
  );
}

export default SideBar;
