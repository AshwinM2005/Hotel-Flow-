import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Side_content from '../UserDashBoard/DashboadLayout/Side_content'
import Admin_Sidebar_Content from '../Admin--Board/Layout/Sidebar_Layout';
import { User, LogOut} from "lucide-react";

function Sidebar_Layout({role}) {
  let sidebar ;
    if (role === "admin") {
        sidebar =(<Admin_Sidebar_Content/>)
    }else {
        sidebar = (<Side_content/>)
    }
  return (
    <aside className="sidebar">
      
      <div className="logo">
        Hotel Flow
      </div>
      <div className='slide-div'>
        <nav className="menu">
            {sidebar}
        </nav>

      <div className="side_footer">
        <NavLink to="profile"><div ><User className="icon" style={{color:"red"}}/>
          <span>Profile</span></div></NavLink>
        <NavLink ><div ><LogOut className="icon" style={{color:"red"}}/>
          <span>Logout</span></div></NavLink>
      </div>
      </div>

    </aside>
  )
}

export default Sidebar_Layout