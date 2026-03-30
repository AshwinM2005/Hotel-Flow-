import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Side_content from '../UserDashBoard/DashboadLayout/Side_content'
import Admin_Sidebar_Content from '../Admin--Board/Layout/Sidebar_Layout';
import { User, LogOut} from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../config/Authcontext.jsx";


function Sidebar_Layout() {
  const { role } = useContext(AuthContext);
  let sidebar ;
    if (role === "Admin") {
        sidebar =(<Admin_Sidebar_Content/>)
    }else {
        sidebar = (<Side_content/>)
    }
    
    const logout = ()=>{
      window.location.href = "http://127.0.0.1:5500/Home_Page/";
      localStorage.removeItem("token");
      return ;
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
        <button onClick={logout} ><div ><LogOut className="icon" style={{color:"red"}}/>
          <span>Logout</span></div></button>
      </div>
      </div>

    </aside>
  )
}

export default Sidebar_Layout