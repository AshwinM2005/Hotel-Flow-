const PriceSummary = () => {
  return (
    <div className="card price-summary">
      <h3>Price Summary</h3>

      <div className="price-row">
        <span>Room Charges</span>
        <span>₹13,500</span>
      </div>

      <div className="price-row">
        <span>Taxes</span>
        <span>₹1,620</span>
      </div>

      <hr />

      <div className="price-row total">
        <span>Total</span>
        <span>₹15,120</span>
      </div>

      <button className="confirm-btn">Confirm Booking</button>
    </div>
  );
};

export default PriceSummary;
