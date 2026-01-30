import "./layout.css";
import HotelInfo from "./Components/HotelInfo";
import StayDetailsForm from "./Components/StayDetailsForm";
import RoomList from "./Components/RoomList";
import PriceSummary from "./Components/PriceSummary";

const BookingLayout= () => {
  return (
    <div className="booking-page">
      <HotelInfo />

      <div className="booking-content">
        <div className="left-panel">
          <StayDetailsForm />
          <RoomList />
        </div>

        <div className="right-panel">
          <PriceSummary />
        </div>
      </div>
    </div>
  );
};

export default BookingLayout;
