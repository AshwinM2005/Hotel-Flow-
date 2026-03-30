import React, { useState, useEffect } from 'react';
import "./layout.css";
import { NavLink } from 'react-router-dom';
import { User, Settings, Bell } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../config/Authcontext"

function Header() {
  const {user}= useContext(AuthContext);
  
  return (
    <div className='header-section'>
      <div>
        Hello, { user?.User_Name || "Guest"}
        <p>Welcome To Your Dashboard</p>
      </div>

      <div style={{ gap: "35px" }}>
        <NavLink to="notification"><Bell className='icon' /></NavLink>
        <NavLink to="settings"><Settings className='icon' /></NavLink>
        <NavLink to="profile"><User className='icon' /></NavLink>
      </div>
    </div>
  );
}

export default Header;