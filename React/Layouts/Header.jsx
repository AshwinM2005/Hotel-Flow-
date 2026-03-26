import React from 'react'
import "./layout.css"
import { NavLink } from 'react-router-dom'
import { User,Settings, Bell} from "lucide-react";

function Header() {
  return (
    <div className='header-section'>
        <div>
            Hello,Ashwin
            <p>Welcome To Your Dashboard</p>
        </div>
        
        <div style={{gap:"35px"}}>
            <NavLink to="notification"><Bell className='icon'/></NavLink>
            <NavLink to="settings"><Settings className='icon'/></NavLink>
            <NavLink to="profile"><User className='icon'/></NavLink>
        </div>
    </div>
  )
}

export default Header