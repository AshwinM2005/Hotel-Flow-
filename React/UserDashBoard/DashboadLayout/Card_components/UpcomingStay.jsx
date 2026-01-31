import React from "react";

function UpcomingStay() {
  return (
    <div className="upcoming-stay-card">

      <div className="stay-header">
        <div>
          <h3>Your Upcoming Stay</h3>
          <p>Luxurious Hotel</p>
        </div>

        <span className="stay-status">Confirmed</span>
      </div>

      <div className="stay-image">
        <img src="Images/user_interface/HCM_P_7556778_4by3.webp" alt="Hotel Image" />
      </div>

      <div className="stay-info">
        <div>
          <p>Check-in</p>
          <p>Oct 25</p>
          <p>3:00 PM</p>
        </div>

        <div>
          <p>Check-out</p>
          <p>Oct 28</p>
          <p>11:00 AM</p>
        </div>

        <div>
          <p>Guests</p>
          <p>2 Adults</p>
          <p>1 Child</p>
        </div>
      </div>

    </div>
  );
}

export default UpcomingStay;
