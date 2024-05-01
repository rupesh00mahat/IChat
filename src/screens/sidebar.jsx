import React from "react";
import "../style.css";
import UserInfoComponent from "./user-info-component";

function Sidebar() {
  return (
    <div id="sidebar">
      <div className="sidebar-header">
        <h2>Ichat</h2>
        <div className="sidebar-header-user-info">
          <img src="" />
          <span className="user-name">UserName</span>
          <button className="logout-button">logout</button>
        </div>
      </div>
      <section id="user-list">
        <p>Find a user</p>
        <div className="users">
            <UserInfoComponent/>
            <UserInfoComponent/>
            <UserInfoComponent/>
        </div>
      </section>
    </div>
  );
}

export default Sidebar;
