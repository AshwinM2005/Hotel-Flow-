import { useState , useEffect } from "react";

const PriceSummary = ( {stayDetails , stayRoomList}) => {
  if (!stayRoomList) {
    return <div></div>;
  }

  const nights =
    Math.max(
    0,
    (new Date(stayDetails.check_out) - new Date(stayDetails.check_in)) /
      (1000 * 60 * 60 * 24)
    );

  const charges = nights * stayRoomList.price;
  const tax = charges * 0.18;
  const total = charges + tax;

    const booking =()=>{
      const token = localStorage.getItem("token");
      fetch("http://localhost:3000/bookings" , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          check_in: stayDetails.check_in,
          check_out: stayDetails.check_out,
          room_id: stayRoomList.id
        })
      })
      .then(res => {
        if (!res.ok) throw new Error("Booking failed");
        return res.json();
      })
      .then(data => {
        alert("Booking successful! Your booking ID is " + data.id);
      })
      .catch(err => {
        alert("Error: " + err.message);
      });}

  return (
    <div className="card price-summary" >
      <h3>Price Summary</h3><br />

      <div className="price-row">
        <span>No of Nights</span>
        <span>{nights}</span>
      </div>
      <div className="price-row">
        <span>Room Charges</span>
        <span>₹{charges}</span>
      </div>

      <div className="price-row">
        <span>Taxes</span>
        <span>₹{tax}</span>
      </div>

      <hr />

      <div className="price-row total">
        <span>Total</span>
        <span>₹{total}</span>
      </div>

      <button className="confirm-btn">Confirm Booking</button>
    </div>
  );
};

export default PriceSummary;
