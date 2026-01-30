const RoomCard = ({ title, desc, price }) => {
  return (
    <div className="room-card">
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>

      <div className="room-price">
        <span>{price}</span>
        <input type="radio" name="room" />
      </div>
    </div>
  );
};

export default RoomCard;
