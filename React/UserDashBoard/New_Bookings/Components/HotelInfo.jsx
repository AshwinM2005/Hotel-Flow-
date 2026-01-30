const HotelInfo = () => {
  return (
    <div className="hotel-info">
      <img
        src="Images/user_interface/LivingRoom.jpg"
        alt="Hotel"
      />

      <div className="hotel-details">
        <h2>Luxurious Hotel</h2>
        <p className="rating">★★★★★ (4.8)</p>
        <p>
          Experience premium comfort in the heart of the city with world-class
          service.
        </p>

        <div className="amenities">
          <span>Free Wi-Fi</span>
          <span>Breakfast</span>
          <span>Swimming Pool</span>
          <span>Parking</span>
          <span>AC Rooms</span>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
