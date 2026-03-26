import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Home,
  CalendarPlus,
  ClipboardList,
  FileText,
  ConciergeBell
} from "lucide-react";


function Side_content() {
  return (
    <>
      <NavLink to="/" end className="sidebar-link">
        <Home className="icon" />
        <span>Home</span>
      </NavLink>

      <NavLink to="new-booking" className="sidebar-link">
        <CalendarPlus className="icon" />
        <span>New Booking</span>
      </NavLink>

      <NavLink to="my_bookings" className="sidebar-link">
        <ClipboardList className="icon" />
        <span>My Bookings</span>
      </NavLink>

      <NavLink to="document" className="sidebar-link">
        <FileText className="icon" />
        <span>My Documents</span>
      </NavLink>

      <NavLink to="service" className="sidebar-link">
        <ConciergeBell className="icon" />
        <span>Hotel Services</span>
      </NavLink>
    </>
  );
}

export default Side_content