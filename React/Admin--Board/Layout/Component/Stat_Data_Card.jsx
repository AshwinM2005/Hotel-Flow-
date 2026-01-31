import React from 'react'
import "../layout.css"

function Stat_Data_Card({
  title,
  value,
  icon,
  trend,
  trendText,
  variant = "default" // success | danger | default
}) {
  return (
    <div className={`admin-card ${variant}`}>
      <div className="admin-card-top">
        <span className="admin-card-title">{title}</span>
        <div className="admin-card-icon">{icon}</div>
      </div>

      <div className="admin-card-value">{value}</div>

      <div className="admin-card-trend">
        <span className={`trend-badge ${trend > 0 ? "up" : "down"}`}>
          {trend > 0 ? "▲" : "▼"} {Math.abs(trend)}%
        </span>
        <span className="trend-text">{trendText}</span>
      </div>
    </div>
  )
}

export default Stat_Data_Card