import RoomCard from "./RoomCard";
import Room_Type_Card from "../../../Components/Room_Type";
import { useState , useEffect } from "react";

const RoomList = ({onSelectRoom}) => {
  const [rooms , setRooms] = useState([]);
  const [available , setAvailable] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
    const token = localStorage.getItem("token");
    useEffect(() => {
      fetch("http://localhost:3000/room_types" , {
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => {
          if (!res.ok) throw new Error("Failed to fetch");
          return res.json();
        })
        .then(data => setRooms(data))
        
      fetch("http://localhost:3000/rooms/available" , {
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => {
          if (!res.ok) throw new Error("Failed to fetch available");
          return res.json();
        })
        .then(data => setAvailable(data))
        
      
    }, []);


  return (
    <div className="card">
      <h3>Select Room</h3>

    {rooms.map((room) => {
      
     const isAvailable =  available[room.type] || 0;
     
     const status =  isAvailable > 0 ? "Available" : "Temporarily Unavailable"
  return (
    <div
      key={room.id}
      onClick={() => {
        if (isAvailable > 0) {
          setSelectedId(room.id);
          onSelectRoom(room);
        }
        
      }}
      style={{ cursor: isAvailable > 0 ? "pointer" : "not-allowed" }}
      className={room.id === selectedId ? "selected" : ""}
    >
    <Room_Type_Card
      key={room.id}
      image={`/${room.image}`}
      type={room.type}
      guests={room.capacity}
      description={room.description}
      availabile_room={isAvailable}
      price={room.price}
      status={status}
      size={room.area}
    />
    </div>
  );
})}

    </div>
  );
};

export default RoomList;
