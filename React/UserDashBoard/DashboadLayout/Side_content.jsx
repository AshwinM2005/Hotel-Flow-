import React from 'react'
import { NavLink } from 'react-router-dom'


function Side_content() {
  return (
    <>  
        <NavLink to="/" end className="sidebar-link">Home</NavLink>
        <NavLink to="new-booking"  className="sidebar-link">New Booking</NavLink>
        <NavLink to="my_bookings"  className="sidebar-link">My Bookings</NavLink>
        <NavLink to=""  className="sidebar-link">My Documents</NavLink>
        <NavLink to=""  className="sidebar-link">Hotel Services</NavLink>
        
    </>
  )
}

export default Side_content