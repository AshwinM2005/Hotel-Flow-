import React from 'react'
import "./layout.css"

function Header() {
  return (
    <div className='header-section'>
        <div>
            Hello,Ashwin
            <p>Welcome To Your Dashboard</p>
        </div>
        
        <div>
            <span>Notification</span>
            <span>setting</span>
            <span>profile</span>
        </div>
    </div>
  )
}

export default Header