import React from 'react'
import "../layout.css"

function Cards() {
    
  return (
    <div className="booking-card">
      
      {/* Top Image Section */}
      <div className="card-header">
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
          alt="Grand Plaza Hotel" 
          className="hotel-image" 
        />
        <span className="status-badge upcoming">Upcoming</span>
      </div>

      {/* Middle Content Section */}
      <div className="card-body">
        <h3 className="hotel-name">Grand Plaza Hotel</h3>
        <p className="booking-dates">Oct 25, 2025 — Oct 28, 2025</p>

        <div className="booking-info-grid">
          <div className="info-item">
            <span className="label">Booking ID</span>
            <span className="value">#413107</span>
          </div>
          <div className="info-item">
            <span className="label">Guest</span>
            <span className="value">Ashwin Maurya</span>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="card-footer">
        <button className="btn btn-outline">View Details</button>
        <button className="btn btn-primary">Modify</button>
      </div>

    </div>
  );
};
  

export default Cards