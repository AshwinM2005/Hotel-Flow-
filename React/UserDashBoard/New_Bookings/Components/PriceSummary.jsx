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
  const oneDayPrice = stayRoomList.price / 2;
  const charges = nights * stayRoomList.price;
  const price = nights === 0 ? oneDayPrice : charges;
  const tax = price * 0.18;
  const total = price + tax;

  const booking = async () => {
  const token = localStorage.getItem("token");

  // 🔴 validation
  if (!stayRoomList) {
    alert("Please select a room");
    return;
  }

  if (!stayDetails?.check_in || !stayDetails?.check_out) {
    alert("Please select dates");
    return;
  }

  try {
    const res = await fetch("http://localhost:3000/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        check_in: stayDetails.check_in,
        check_out: stayDetails.check_out,
        room_type_id: stayRoomList.id,
        payment_amount: total
      })
    });

    if (!res.ok) throw new Error("Booking failed");

    const data = await res.json();

    alert(data.message || "Booking successful!");

  } catch (err) {
    alert("Error: " + err.message);
  }
};

  return (
    <div className="card price-summary" >
      <h3>Price Summary</h3><br />

      <div className="price-row">
        <span>No of Nights</span>
        <span>{nights}</span>
      </div>
      <div className="price-row">
        <span>Room Charges</span>
        <span>₹{price}</span>
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

      <button className="confirm-btn" onClick={booking}>
        Confirm Booking
      </button>
    </div>
  );
};

export default PriceSummary;
