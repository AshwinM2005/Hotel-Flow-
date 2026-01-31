import React from "react";
import { Star } from "lucide-react";
import "../layout.css";

function Rating_Card({
  title,
  rating,
  totalReviews,
  variant = "default"
}) {
  const fullStars = Math.floor(rating);

  return (
    <div className={`admin-card rating-card ${variant}`}>
      <div className="admin-card-top">
        <span className="admin-card-title">{title}</span>
        <div className="admin-card-icon">
          <Star size={18} />
        </div>
      </div>

      <div className="rating-value">
        {rating.toFixed(1)}
        <span className="rating-max">/5</span>
      </div>

      <div className="rating-stars">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < fullStars ? "star-filled" : "star-empty"}
          />
        ))}
      </div>

      <div className="rating-reviews">
        Based on {totalReviews} reviews
      </div>
    </div>
  );
}

export default Rating_Card;
