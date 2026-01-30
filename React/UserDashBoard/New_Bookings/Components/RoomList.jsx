import RoomCard from "./RoomCard";

const RoomList = () => {
  return (
    <div className="card">
      <h3>Select Room</h3>

      <RoomCard
        title="Deluxe Room"
        desc="King Bed · Breakfast Included"
        price="₹4,500 / night"
      />

      <RoomCard
        title="Executive Room"
        desc="Large Room · City View"
        price="₹5,800 / night"
      />
      <RoomCard
        title="XXX Room"
        desc="Large Room · City View"
        price="₹5,800 / night"
      />
    </div>
  );
};

export default RoomList;
