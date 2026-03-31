import "./layout.css";
import HotelInfo from "./Components/HotelInfo";
import StayDetailsForm from "./Components/StayDetailsForm";
import RoomList from "./Components/RoomList";
import PriceSummary from "./Components/PriceSummary";
import { useState } from "react";

const BookingLayout= () => {
  const [stayDetails, setStayDetails] = useState({});
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div className="booking-page">
      <HotelInfo />

      <div className="booking-content">
        <div className="left-panel">
          <StayDetailsForm onChange={setStayDetails} />
          <RoomList onSelectRoom={setSelectedRoom} />
        </div>

        <div className="right-panel">
          <PriceSummary stayDetails={stayDetails} stayRoomList={selectedRoom}/>
        </div>
      </div>
    </div>
  );
};

export default BookingLayout;
