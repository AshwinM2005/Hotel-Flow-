import React from 'react'
import { Outlet } from 'react-router-dom'
import Side_content from '../UserDashBoard/DashboadLayout/Side_content'

function Sidebar_Layout() {
  return (
    <aside className="sidebar">
      
      <div className="logo">
        Hotel Flow
      </div>
      <div className='slide-div'>
        <nav className="menu">
            <Side_content/>
        </nav>

      <div className="side_footer">
        <div>Profile</div>
        <div >Logout</div>
      </div>
      </div>

    </aside>
  )
}

export default Sidebar_Layout