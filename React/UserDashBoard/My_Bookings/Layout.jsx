import React from "react";
import "./layout.css";
import Cards from "./component/Cards";
import { useState , useEffect } from "react";

const My_Booking_Layout = () => {
  const [bookings, setBookings] = useState([]);
  const fetchBookings = async () => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("http://localhost:3000/booking/my_bookings", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const data = await res.json();
      console.log(data);
      if (!Array.isArray(data)) {
        console.error(data);
        setBookings([]);
      } else {
        setBookings(data);
      }

    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchBookings();
  }, []);


  return (
    
    <div className="booking-page">
      {/* Static header / content */}
      <div className="booking-header">
        <h2>My Bookings</h2>
        <p>Manage your upcoming and past stays</p>
      </div>

      <div className="cards-scroll-area">
        <div className="cards-grid">

          {bookings.length === 0 ? (
            <p className="no-booking">No bookings found !! <br />Please book a stay to see it here.</p>
          ) : (
            bookings.map((booking) => (
              <Cards key={booking.booking_id} booking={booking} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default My_Booking_Layout;
