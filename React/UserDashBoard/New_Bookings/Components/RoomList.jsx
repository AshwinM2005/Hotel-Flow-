import RoomCard from "./RoomCard";
import Room_Type_Card from "../../../Components/Room_Type";

const RoomList = () => {
  return (
    <div className="card">
      <h3>Select Room</h3>

      <Room_Type_Card
        image="Images/user_interface/pexels-heyho-6523283.jpg"
        name="Deluxe"
        size="35 m²"
        bed="King Bed"
        guests={2}
        description="More space and luxury with separate seating."
        availability="18/25 Rooms"
        price={150}
        status="Available"
      />
      <Room_Type_Card
        image="Images/user_interface/bdroom1.jpg"
        name="Deluxe"
        size="35 m²"
        bed="King Bed"
        guests={2}
        description="More space and luxury with separate seating."
        availability="18/25 Rooms"
        price={150}
        status="Available"
      />
      <Room_Type_Card
        image="Images/user_interface/pexels-dada-_design-240566386-12281845.jpg"
        name="Deluxe"
        size="35 m²"
        bed="King Bed"
        guests={2}
        description="More space and luxury with separate seating."
        availability="18/25 Rooms"
        price={150}
        status="Available"
      />




      {/* <RoomCard
        title="Executive Room"
        desc="Large Room · City View"
        price="₹5,800 / night"
      />
      <RoomCard
        title="XXX Room"
        desc="Large Room · City View"
        price="₹5,800 / night"
      /> */}
    </div>
  );
};

export default RoomList;
