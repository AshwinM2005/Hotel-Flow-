import React from "react";
import "../layout.css";

function Cards( {booking}) {
  const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
};
  return (
    <div className="booking-card">
      {/* Header */}
      <div className="card-header">
        <img
          src={booking.image}
          alt="Hotel"
          className="hotel-image"
        />
        <span className="status-badge">Upcoming</span>
      </div>

      {/* Body */}
      <div className="card-body">
        <h3 className="hotel-name">Hotel Flow</h3>
        <p className="booking-dates">{formatDate(booking.check_in)} — {formatDate(booking.check_out)}</p>

        <div className="booking-info-grid">
          <div className="info-item">
            <span className="label">Room No:</span>
            <span className="value">{booking.room_number}</span>
          </div>
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
