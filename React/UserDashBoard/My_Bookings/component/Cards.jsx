import React from "react";
import "../layout.css";

function Cards() {
  return (
    <div className="booking-card">
      {/* Header */}
      <div className="card-header">
        <img
          src="Images/user_interface/slidingimg6.jpg"
          alt="Hotel"
          className="hotel-image"
        />
        <span className="status-badge">Upcoming</span>
      </div>

      {/* Body */}
      <div className="card-body">
        <h3 className="hotel-name">Grand Plaza Hotel</h3>
        <p className="booking-dates">Oct 25, 2025 — Oct 28, 2025</p>

        <div className="booking-info-grid">
          <div className="info-item">
            <span className="label">Booking ID :</span>
            <span className="value">#413107</span>
          </div>
          {/* <div className="info-item">
            <span className="label">Guest</span>
            <span className="value">Ashwin Maurya</span>
          </div> */}
        </div>
      </div>

      {/* Footer */}
      <div className="card-footer">
        <button className="btn btn-outline">View Details</button>
        <button className="btn btn-primary">Modify</button>
      </div>
    </div>
  );
}

export default Cards;
