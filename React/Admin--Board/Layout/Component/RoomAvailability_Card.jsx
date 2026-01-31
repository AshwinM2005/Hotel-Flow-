import React from "react";
import "../layout.css";

function RoomAvailability_Card({
  occupied = 286,
  reserved = 87,
  available = 32,
  notReady = 13,
}) {
  const total = occupied + reserved + available + notReady;

  const getWidth = (value) => `${(value / total) * 100}%`;

  return (
    <div className="room-availability-card">
      {/* Header */}
      <div className="room-availability-header">
        <span className="room-availability-title">Room Availability</span>
        <span className="room-availability-menu">•••</span>
      </div>

      {/* Availability Bar */}
      <div className="room-availability-bar">
        <div
          className="room-bar occupied"
          style={{ width: getWidth(occupied) }}
        />
        <div
          className="room-bar reserved"
          style={{ width: getWidth(reserved) }}
        />
        <div
          className="room-bar available"
          style={{ width: getWidth(available) }}
        />
        <div
          className="room-bar not-ready"
          style={{ width: getWidth(notReady) }}
        />
      </div>

      {/* Stats */}
      <div className="room-availability-stats">
        <div className="room-stat">
          <span className="room-stat-indicator occupied" />
          <div>
            <div className="room-stat-label">Occupied</div>
            <div className="room-stat-value">{occupied}</div>
          </div>
        </div>

        <div className="room-stat">
          <span className="room-stat-indicator reserved" />
          <div>
            <div className="room-stat-label">Reserved</div>
            <div className="room-stat-value">{reserved}</div>
          </div>
        </div>

        <div className="room-stat">
          <span className="room-stat-indicator available" />
          <div>
            <div className="room-stat-label">Available</div>
            <div className="room-stat-value">{available}</div>
          </div>
        </div>

        <div className="room-stat">
          <span className="room-stat-indicator not-ready" />
          <div>
            <div className="room-stat-label">Not Ready</div>
            <div className="room-stat-value">{notReady}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomAvailability_Card;
