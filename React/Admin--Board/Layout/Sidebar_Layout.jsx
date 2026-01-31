import React from 'react'
import { NavLink } from 'react-router-dom'

function Admin_Sidebar_Content() {
  return (
    <>  
        <NavLink to="/" end className="sidebar-link">Home</NavLink>
        <NavLink to="reservation"  className="sidebar-link">Reservations</NavLink>
        <NavLink to="staff"  className="sidebar-link">Staff</NavLink>
        <NavLink to="room"  className="sidebar-link">Rooms</NavLink>
        <NavLink to="expense"  className="sidebar-link">Expences</NavLink>
        
    </>
  )
}

export default Admin_Sidebar_Content