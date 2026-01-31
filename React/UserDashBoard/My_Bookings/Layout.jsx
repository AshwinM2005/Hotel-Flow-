import React from "react";
import "./layout.css";
import Cards from "./component/Cards";

function My_Booking_Layout() {
  const any_bookings = true;

  if (!any_bookings) {
    return <div>No recent bookings</div>;
  }

  return (
    <div className="booking-page">
      {/* Static header / content */}
      <div className="booking-header">
        <h2>My Bookings</h2>
        <p>Manage your upcoming and past stays</p>
      </div>

      {/* ONLY THIS SCROLLS */}
      <div className="cards-scroll-area">
        <div className="cards-grid">
          <Cards/>
          <Cards/>
        </div>
      </div>
    </div>
  );
}

export default My_Booking_Layout;
