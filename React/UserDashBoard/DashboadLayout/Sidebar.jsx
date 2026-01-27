import React from 'react'


    function Sidebar() {
  return (
    <aside className="sidebar">
      
      <div className="logo">
        Hotel Flow
      </div>
      <div className='slide-div'>
      <nav className="menu">
        <div className="menu-item">Home</div>
        <div className="menu-item">New Booking</div>
        <div className="menu-item">My Bookings</div>
        <div className="menu-item">My Documents</div>
        <div className="menu-item">Hotel Services</div>
      </nav>

      <div className="side_footer">
        <div>Profile</div>
        <div >Logout</div>
      </div>
      </div>

    </aside>
  );
}



export default Sidebar